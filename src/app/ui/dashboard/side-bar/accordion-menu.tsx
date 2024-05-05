"use client";
import { useState } from "react";
import AccordionLink from "./accordion-link";
import { cn } from "@/app/lib/utils";

interface Props {
  buttonLabel: string;
  links: { linkName: string; href: string }[];
  pathname: string;
  activeAccordionMenu: string;
  onAccordionMenuChange: (accordionMenu: string) => void;
}

export default function AccordionMenu({
  buttonLabel,
  links,
  pathname,
  activeAccordionMenu,
  onAccordionMenuChange,
}: Props) {
  const isOpen = activeAccordionMenu === buttonLabel;

  const renderedLinks = links.map(({ linkName, href }) => (
    <AccordionLink
      key={linkName}
      linkName={linkName}
      pathname={pathname}
      href={href}
    />
  ));

  return (
    <div>
      <button
        className=" 
            w-full rounded-md p-2
            text-start bg-slate-500 hover:bg-slate-600 
            transition-colors duration-200 
          "
        onClick={() => onAccordionMenuChange(buttonLabel)}
      >
        {buttonLabel}
      </button>
      <ul
        className={cn(
          "flex flex-col transition-all duration-500 overflow-hidden max-h-0",
          isOpen && "overflow-visible max-h-[1000px]"
        )}
      >
        {renderedLinks}
      </ul>
    </div>
  );
}
