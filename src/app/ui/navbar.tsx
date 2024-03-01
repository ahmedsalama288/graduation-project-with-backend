import { navbarLinks } from "../lib/constants";
import Logo from "./logo";
import MobileNavbar from "./mobile-navbar";
import NavLink from "./nav-link";
import { useState } from "react";

export default function Navbar() {

  return (
    <nav
      className={`
        z-[100000] mx-auto w-full px-8
        flex items-center gap-3
        justify-between xl:justify-center
        flex-row-reverse xl:flex-row
    `}
    >
      <Logo />
      <MobileNavbar/>
      <ul
        className={`
          hidden xl:flex gap-1 text-white h-full max-h-full
      `}
      >
        {navbarLinks.map(({ name, nestedLinks }, index) => (
          <NavLink
            href={""}
            name={name}
            nestedLinks={nestedLinks}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
}
