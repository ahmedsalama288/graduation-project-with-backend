import SidebarMainSections from "./sidebar-main-sections";

export default function SideBar() {
  return (
    <nav dir="rtl" className=" bg-slate-400 w-[300px] mr-auto rounded-b-md h-full">
      <ul className="px-2 pt-4 pb-2 h-full min-h-[1000px]">
        <SidebarMainSections />
      </ul>
    </nav>
  );
}
