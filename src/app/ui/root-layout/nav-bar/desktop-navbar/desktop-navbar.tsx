import { usePathname } from "next/navigation";
import NavLink from "./nav-link";
import { navbarLinks } from "@/app/lib/constants";

export default function DesktopNavbar() {
  const pathname = usePathname();

  return (
    <ul className="hidden xl:flex gap-1 text-white h-full max-h-full">
      {navbarLinks.map(({ name, nestedLinks, href }, index) => (
        <NavLink
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
