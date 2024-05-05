import SideBar from "../ui/dashboard/side-bar/side-bar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div className=" flex">
        <SideBar />
        <section className=" flex-1">{children}</section>
      </div>
    </section>
  );
}
