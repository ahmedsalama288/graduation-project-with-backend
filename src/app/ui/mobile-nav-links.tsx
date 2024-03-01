import Link from "next/link";
import { NavbarNestedLinks } from "../lib/definitions";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

interface props {
  href: string;
  name: string;
  nestedLinks: NavbarNestedLinks;
}

export default function MobileNavLinks({ href, name, nestedLinks }: props) {
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
        {!!href ? (
          <Link
            href={href || ""}
            className={`
          transition-all
          py-3 px-4 rounded-md
          hover:pr-5 hover:bg-slate-300
          w-fit flex gap-2 items-center
          peer
        `}
          >
            {name}
            {!!nestedLinks?.length && (
              <ChevronDownIcon className="h-4 w-4 text-gray-500 mt-1" />
            )}
          </Link>
        ) : (
          <span
            className={`
          transition-all
          py-3 px-4 rounded-md
          hover:pr-5 hover:bg-slate-300
          w-fit flex gap-2 items-center
          peer
        `}
          >
            {name}
            {!!nestedLinks?.length && (
              <ChevronDownIcon className="h-4 w-4 text-gray-500 mt-1" />
            )}
          </span>
        )}

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
        href={href || ""}
        className=" text-black-gray font-bold mb-4 inline-block"
      >
        {name}
      </Link>
      <ul>{renderedNestedLinks}</ul>
    </li>
  );
}
