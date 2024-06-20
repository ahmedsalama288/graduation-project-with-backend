import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContent from "@/app/ui/units-and-departments/page-content";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="المكتبة" />
      <PageContent pageName="library" />
    </section>
  );
}
