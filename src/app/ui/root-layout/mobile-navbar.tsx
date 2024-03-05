"use client";

import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/20/solid";
import { navbarLinks } from "../../lib/constants";
import MobileNavLinks from "./mobile-nav-links";
import { XMarkIcon } from "@heroicons/react/24/solid";

export default function MobileNavbar({ pathname }: { pathname: string }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenuHandler = () => {
    setIsMenuOpen(true);
  };
  const closeMenuHandler = () => {
    setIsMenuOpen(false);
  };
  const closeMenuWhenNavigateHandler = () => {
    setTimeout(closeMenuHandler, 100);
  };

  return (
    <>
      <div>
        <Bars3Icon
          onClick={openMenuHandler}
          className="h-8 w-8 xl:hidden cursor-pointer"
        />

        <ul
          onClick={closeMenuWhenNavigateHandler}
          className={`
          ${isMenuOpen ? "flex" : "hidden"}
        bg-slate-200 absolute  flex-col
          top-0 right-0 p-8 w-[300px] 
          h-[4000px]
          gap-4
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
          {navbarLinks.map(({ name, nestedLinks }, index) => (
            <MobileNavLinks
              href={""}
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
            h-[4000px]
        `}
        onClick={closeMenuHandler}
      ></div>
    </>
  );
}
