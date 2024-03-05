import Link from "next/link";
import { NavbarNestedLinks } from "../../lib/definitions";
import {
  ChevronDownIcon,
  ChevronLeftIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { getFirstSegment } from "@/app/lib/utils";
import { ignoredLinks } from "@/app/lib/constants";

interface props {
  href: string;
  name: string;
  nestedLinks: NavbarNestedLinks;
  pathname: string;
}

export default function NavLink({ href, name, nestedLinks, pathname }: props) {
  const hrefAfterFiltering = ignoredLinks.find((link) => link === href) ? "" : href;

  const parentSegmentInUrl = getFirstSegment(pathname);

  const hasNestedLinks = !!nestedLinks.length;
  // li have a list of links
  // and every link inside of the links
  // have a nested links inside of it.

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
        <Link
          href={href || ""}
          className={`
            ${href == pathname ? "bg-slate-300 pr-5" : ""}
            transition-all
            py-3 px-4 rounded-md
            hover:pr-5 hover:bg-slate-300
            w-full flex justify-between items-center
            peer
          `}
        >
          {name}{" "}
          {!!nestedLinks?.length && (
            <ChevronLeftIcon className=" h-5 w-5 text-gray-500" />
          )}
        </Link>

        {!!nestedLinks?.length && (
          <ul
            className={`
              w-56 max-w-72 min-w-fit
              peer hidden peer-hover:block hover:block
              top-0 -left-full
              absolute bg-slate-200 rounded
              drop-shadow-lg
          `}
          >
            {nestedLinks.map(({ name, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={` 
                    ${href == pathname ? "bg-slate-300 pr-5" : ""}
                    transition-all
                    py-3 px-4 rounded-md
                    hover:pr-5 hover:bg-slate-300
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
    <li
      className={` 
      before:content-[""] before:w-full before:h-7
      before:absolute before:top-9 
      before:hidden hover:before:block

      whitespace-nowrap 
      relative px-4 py-3 rounded-md cursor-pointer
      transition-colors hover:bg-sky-700
      group

      ${href === parentSegmentInUrl ? "bg-sky-700" : ""}
    `}
    >
      <Link
        href={hrefAfterFiltering}
        className=" flex items-center gap-[2px] group"
      >
        {name}
        {hasNestedLinks && (
          <>
            <ChevronDownIcon className="h-3 w-3 mt-[2px] group-hover:hidden" />
            <XMarkIcon className="h-3 w-3 mt-[2px] hidden group-hover:block" />
          </>
        )}
      </Link>
      <ul
        className={`
          w-56 max-w-72 min-w-fit absolute top-16 right-2 bg-slate-200 rounded
          hidden group-hover:flex flex-col 
          drop-shadow-lg z-[1000]
        `}
      >
        {renderedNestedLinks}
      </ul>
    </li>
  );
}
