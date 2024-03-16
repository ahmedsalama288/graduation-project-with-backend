"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface props {
  href: string;
  nestedLinks: { name: string; href: string }[];
  pathname: string;
  subLinksContainerName: string;
}

export default function NestedLinkContainer({
  href,
  nestedLinks,
  pathname,
  subLinksContainerName,
}: props) {
  const [isNestedLinksOpen, setIsNestedLinksOpen] = useState(false);

  const toggleNestedLinksHandler = () => {
    setIsNestedLinksOpen((prevState) => !prevState);
  };

  return (
    <>
      <span
        onClick={toggleNestedLinksHandler}
        className={`
            transition-all cursor-pointer
            py-3 px-4 rounded-md
            hover:pr-5 hover:bg-slate-300
            ${href === pathname ? "bg-slate-300 pr-5" : ""}
            w-fit flex gap-2 items-center
            peer
          `}
      >
        {subLinksContainerName}
        <ChevronDownIcon className="h-4 w-4 text-gray-500 mt-1" />
      </span>

      {!!nestedLinks?.length && (
        <ul
          className={`
            transition-all
            ${isNestedLinksOpen ? "block" : "hidden"}
            w-56 max-w-72 min-w-fit mr-2
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
    </>
  );
}
