"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { cn } from "@/app/lib/utils";

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
    <div>
      <span
        onClick={toggleNestedLinksHandler}
        className={cn(
          `transition-all cursor-pointer
            py-3 px-4 rounded-md hover:bg-slate-300
            w-fit flex gap-2 items-center`,
          isNestedLinksOpen && "pr-5 bg-slate-300",
          href === pathname && "pr-5 bg-slate-300"
        )}
      >
        {subLinksContainerName}
        <>
          <ChevronDownIcon
            className={`
            ${isNestedLinksOpen ? " hidden" : " block"}
            h-4 w-4 text-gray-500 mt-1
          `}
          />
          <XMarkIcon
            className={` 
            ${isNestedLinksOpen ? "block" : "hidden"}
            h-3 w-3 mt-[2px] text-gray-500
          `}
          />
        </>
      </span>

      {nestedLinks && (
        <ul
          className={cn(
            `
            transition-all duration-400 max-h-0 overflow-hidden
            w-56 max-w-72 min-w-fit mr-2
            bg-slate-200 rounded
            drop-shadow-lg`,
            isNestedLinksOpen && "max-h-[1000px] overflow-visible"
          )}
        >
          {nestedLinks.map(({ name, href }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  ` transition-color duration-300 py-3 px-4 rounded-md hover:pr-5 hover:bg-slate-300
                    w-full inline-block text-transparent`,
                  href === pathname && "pr-5 bg-slate-300",
                  isNestedLinksOpen && "text-black-gray"
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
