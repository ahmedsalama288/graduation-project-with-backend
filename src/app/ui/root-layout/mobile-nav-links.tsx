import Link from "next/link";
import { NavbarNestedLinks } from "../../lib/definitions";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { ignoredLinks } from "@/app/lib/constants";

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
  const hrefAfterFilteringIgnoredLinks = ignoredLinks.find(
    (link) => link === href
  )
    ? ""
    : href;

  const isTheLinkHaveNestedLinks = !!nestedLinks.length;

  const renderedNestedLinks =
    isTheLinkHaveNestedLinks &&
    nestedLinks.map(({ name, href, nestedLinks }, index) => (
      <li
        key={index}
        className={`
        w-full whitespace-nowrap text-black-gray
        relative inline-block
    `}
      >
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
          {!!nestedLinks?.length && (
            <ChevronDownIcon className="h-4 w-4 text-gray-500 mt-1" />
          )}
        </Link>

        {!!nestedLinks?.length && (
          <ul
            className={`
            mr-2
            w-56 max-w-72 min-w-fit
            bg-slate-200 rounded
            drop-shadow-lg
        `}
          >
            {nestedLinks.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={` 
                  transition-all
                  py-3 px-4 rounded-md
                  hover:pr-5 hover:bg-slate-300
                  ${href === pathname ? "bg-slate-300 pr-5" : ""}
                  w-full inline-block
                `}
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </li>
    ));

  return (
    <li>
      <Link
        href={hrefAfterFilteringIgnoredLinks}
        className=" text-black-gray font-bold mb-4 inline-block"
      >
        {name}
      </Link>
      <ul>{renderedNestedLinks}</ul>
    </li>
  );
}
