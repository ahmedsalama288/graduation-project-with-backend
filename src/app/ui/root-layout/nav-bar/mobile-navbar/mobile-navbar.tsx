"use client";

import { useEffect, useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import MobileNavLinks from "./mobile-nav-links";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { navbarLinks } from "@/app/lib/constants";

export default function MobileNavbar({ pathname }: { pathname: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
    document.documentElement.style.setProperty("--scroll-behavior", "hidden");
  };
  const closeMenuHandler = () => {
    setIsMenuOpen(false);
    document.documentElement.style.setProperty("--scroll-behavior", "auto");
  };

  // when the user navigate to another page close the nav-bar
  useEffect(closeMenuHandler, [pathname]);

  return (
    <>
      <div>
        <Bars3Icon
          onClick={openMenuHandler}
          className="h-8 w-8 xl:hidden cursor-pointer"
        />
        <ul
          className={`
            ${isMenuOpen ? "flex" : "hidden"}
          bg-slate-200 fixed flex-col
            top-0 right-0 p-8 w-[300px] 
            h-screen gap-4 overflow-y-scroll scrollbar-hidden
          `}
        >
          {/* close Icon */}
          <li>
            <XMarkIcon
              className="h-8 w-8 text-gray-500 cursor-pointer mb-3"
              onClick={closeMenuHandler}
            />
          </li>

          {/* nav-bar-links */}
          {navbarLinks.map(({ href, name, nestedLinks }, index) => (
            <MobileNavLinks
              href={href || ""}
              name={name}
              nestedLinks={nestedLinks}
              pathname={pathname}
              key={index}
            />
          ))}
        </ul>
      </div>

      {/* overlay div */}
      <div
        className={`
          ${isMenuOpen ? "block" : "hidden"}
          cursor-pointer
          fixed top-0 left-0 bg-gray-700 opacity-20 width-minus-300px z-40
          h-screen
        `}
        onClick={closeMenuHandler}
      ></div>
    </>
  );
}
