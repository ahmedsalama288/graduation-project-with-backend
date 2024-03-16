"use client";

import { usePathname } from "next/navigation";
import { navbarLinks } from "../../lib/constants";
import Logo from "./logo";
import MobileNavbar from "./mobile-navbar/mobile-navbar";
import NavLink from "./nav-link";

export default function Navbar() {
  const pathname = usePathname();

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
      <MobileNavbar pathname={pathname} />
      <ul
        className={`
          hidden xl:flex gap-1 text-white h-full max-h-full
      `}
      >
        {navbarLinks.map(({ name, nestedLinks, href }, index) => (
          <NavLink
            pathname={pathname}
            href={href || ""}
            name={name}
            nestedLinks={nestedLinks}
            key={index}
          />
        ))}
      </ul>
    </nav>
  );
}
