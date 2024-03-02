import Link from "next/link";
import React from "react";
import { NavbarNestedLinks } from "../../lib/definitions";
import { ChevronDownIcon, ChevronLeftIcon, XMarkIcon } from "@heroicons/react/24/outline";

interface props {
  href: string;
  name: string;
  nestedLinks: NavbarNestedLinks;
}

export default function NavLink({ href, name, nestedLinks }: props) {
  const hasMainNestedLinks = !!nestedLinks.length;
  // li have a list of links
  // and every link inside of the links
  // have a nested links inside of it.

  const renderedNestedLinks =
    hasMainNestedLinks &&
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
    `}
    >
      <Link href={href} className=" flex items-center gap-[2px] group:">
        {name}
        {hasMainNestedLinks && (
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
