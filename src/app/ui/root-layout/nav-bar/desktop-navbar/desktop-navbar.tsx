import NavLink from "./nav-link";
import { navbarLinks } from "@/app/lib/constants";

interface props {
  pathname: string;
}
export default function DesktopNavbar({ pathname }: props) {
  return (
    <ul className="hidden xl:flex gap-1 text-white h-full max-h-full">
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
  );
}
