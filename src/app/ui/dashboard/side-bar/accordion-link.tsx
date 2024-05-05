import { cn } from "@/app/lib/utils";
import Link from "next/link";

interface Props {
  linkName: string;
  href: string;
  pathname: string;
}

export default function AccordionLink({ linkName, href, pathname }: Props) {
  return (
    <Link
      href={href}
      className={cn(
        `w-full block rounded-md p-2 cursor-pointer
      text-start bg-slate-500 hover:bg-slate-600 
      transition-colors duration-200`,
        pathname === href && "bg-slate-600"
      )}
    >
      {linkName}
    </Link>
  );
}
