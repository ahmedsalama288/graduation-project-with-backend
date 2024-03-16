"use client";

import { usePathname } from "next/navigation";
import Logo from "./logo";
import MobileNavbar from "./nav-bar/mobile-navbar/mobile-navbar";
import DesktopNavbar from "./nav-bar/desktop-navbar/desktop-navbar";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="
        z-[100000] mx-auto w-full px-8
        flex items-center gap-3
        justify-between xl:justify-center
        flex-row-reverse xl:flex-row
      "
    >
      <Logo />
      <MobileNavbar pathname={pathname} />
      <DesktopNavbar pathname={pathname} />
    </nav>
  );
}
