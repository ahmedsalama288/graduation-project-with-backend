"use client";

import { dashboardSidebarLinks } from "@/app/lib/constants";
import AccordionMenu from "./accordion-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/app/lib/utils";
import { useState } from "react";

export default function SidebarMainSections() {
  const pathname = usePathname();

  const [activeAccordionMenu, setActiveAccordionMenu] = useState("عن المعهد");

  const handleActiveAccordionMenu = (accordionMenu: string) => {
    setActiveAccordionMenu(() => accordionMenu);
  };

  const renderedDashboardSidebarLinks = dashboardSidebarLinks.map(
    ({ sectionName, sectionHref, sectionLinks }) => (
      <li key={sectionName} className="bg-slate-500 rounded-md">
        {sectionHref && (
          <Link
            href={sectionHref}
            className={cn(
              `
                w-full block bg-slate-500 hover:bg-slate-600
                p-2 rounded-md transition-colors duration-200`,
              pathname === sectionHref && "bg-slate-600"
            )}
          >
            {sectionName}
          </Link>
        )}
        {!sectionHref && sectionLinks && (
          <AccordionMenu
            buttonLabel={sectionName}
            links={sectionLinks}
            pathname={pathname}
            activeAccordionMenu={activeAccordionMenu}
            onAccordionMenuChange={handleActiveAccordionMenu}
          />
        )}
      </li>
    )
  );

  return (
    <ul className=" flex flex-col gap-2">{renderedDashboardSidebarLinks}</ul>
  );
}
