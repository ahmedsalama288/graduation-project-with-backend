import Link from "next/link";
import { ignoredLinks } from "@/app/lib/constants";
import NestedLinkContainer from "./nested-link-container";
import { NavbarNestedLinks } from "@/app/lib/definitions";

interface props {
  href: string;
  name: string;
  nestedLinks: NavbarNestedLinks;
  pathname: string;
}

export default function MobileNavLinks({
  href,
  name,
  nestedLinks,
  pathname,
}: props) {
  const linkHref = ignoredLinks.find(
    (link) => link === href
  )
    ? ""
    : href;

  const hasNestedLinks = !!nestedLinks.length;

  const renderedNestedLinks =
    hasNestedLinks &&
    nestedLinks.map(({ name, href, nestedLinks }, index) => (
      <li
        key={index}
        className={`
        w-full whitespace-nowrap text-black-gray
        relative inline-block
    `}
      >
        {!!!nestedLinks?.length && (
          <Link
            href={href || ""}
            className={`
          transition-all
          py-3 px-4 rounded-md
          hover:pr-5 hover:bg-slate-300
          ${href === pathname ? "bg-slate-300 pr-5" : ""}
          w-fit flex gap-2 items-center
          peer
        `}
          >
            {name}
          </Link>
        )}

        {nestedLinks && (
          <NestedLinkContainer
            pathname={pathname}
            nestedLinks={nestedLinks}
            subLinksContainerName={name || ""}
            href={href || ""}
          />
        )}
      </li>
    ));

  return (
    <li>
      {!hasNestedLinks && (
        <Link
          href={linkHref}
          className=" text-black-gray font-bold mb-4 inline-block"
        >
          {name}
        </Link>
      )}

      {hasNestedLinks && (
        <>
          <span className=" text-black-gray font-bold mb-4 inline-block">
            {name}
          </span>
          <ul className=" flex flex-col gap-0">{renderedNestedLinks}</ul>
        </>
      )}
    </li>
  );
}
