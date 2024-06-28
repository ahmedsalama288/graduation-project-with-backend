import { NavbarNestedLinks } from "@/app/lib/definitions";
import { cn } from "@/app/lib/utils";
import { ChevronLeftIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NestedLinkProps {
  name: string;
  href: string;
  nestedLinks?: NavbarNestedLinks;
}

export default function NestedLink({
  name,
  href,
  nestedLinks,
}: NestedLinkProps) {
  const pathname = usePathname();

  return (
    <li className="relative inline-block w-full whitespace-nowrap text-black-gray">
      <Link
        href={href || ""}
        className={`
        ${href === pathname ? "bg-slate-300 pr-5" : ""}
        transition-all py-3 px-4 rounded-md hover:pr-5 hover:bg-slate-300
        w-full flex justify-between items-center peer
      `}
      >
        {name}
        {!!nestedLinks?.length && (
          <ChevronLeftIcon className="h-5 w-5 text-gray-500" />
        )}
      </Link>
      {!!nestedLinks?.length && (
        <ul className="absolute bg-slate-200 rounded drop-shadow-lg top-0 -left-56 w-56 min-w-fit hidden peer-hover:block hover:block">
          {nestedLinks.map(({ name, href = "" }) => (
            <li key={href}>
              <Link
                href={href}
                className={cn(
                  `transition-all py-3 px-4 rounded-md
                  hover:pr-5 hover:bg-slate-300 w-full
                  inline-block`,
                  href === pathname && "bg-slate-300 pr-5"
                )}
              >
                {name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}
