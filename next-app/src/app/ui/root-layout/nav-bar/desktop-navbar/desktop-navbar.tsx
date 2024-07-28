import { usePathname } from "next/navigation";
import { navbarLinks } from "@/app/lib/constants";
import MainNavbarSection from "./main-navbar-section";

export default function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <ul className="hidden xl:flex gap-1 text-white h-full max-h-full">
      {navbarLinks.map(({ name, nestedLinks, href }, index) => (
        <MainNavbarSection
          key={index}
          href={href || ""}
          name={name}
          nestedLinks={nestedLinks}
          pathname={pathname}
        />
      ))}
    </ul>
  );
}
