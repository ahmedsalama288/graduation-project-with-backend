import Link from "next/link";
import {
  ChevronDownIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { cn, getFirstSegment } from "@/app/lib/utils";
import { ignoredLinks } from "@/app/lib/constants";
import { NavbarNestedLinks } from "@/app/lib/definitions";
import NestedLink from "./nested-link";

interface props {
  href: string;
  name: string;
  nestedLinks: NavbarNestedLinks;
  pathname: string;
}

export default function NavLink({ href, name, nestedLinks, pathname }: props) {
  const hrefAfterFilteringIgnoredLinks = ignoredLinks.includes(href)
    ? ""
    : href;
  const parentSegmentInUrl = getFirstSegment(pathname);
  const hasNestedLinks = !!nestedLinks.length;

  return (
    <li
      className={cn(
        `
          before:content-[""] before:w-full before:h-7
          before:absolute before:top-9 
          before:hidden hover:before:block
          whitespace-nowrap relative px-4 py-3 rounded-md cursor-pointer
          transition-colors hover:bg-sky-700 group
        `,
        href === parentSegmentInUrl && "bg-sky-700"
      )}
    >
      <Link
        href={hrefAfterFilteringIgnoredLinks}
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
      {hasNestedLinks && (
        <ul
          className="
            absolute top-16 right-2 rounded bg-slate-200 
            hidden group-hover:flex flex-col
            w-56 max-w-72 min-w-fit
            drop-shadow-lg z-[1000]
          "
        >
          {nestedLinks.map(({ name, href = "", nestedLinks }) => (
            <NestedLink
              key={name}
              name={name}
              href={href}
              nestedLinks={nestedLinks}
            />
          ))}
        </ul>
      )}
    </li>
  );
}
