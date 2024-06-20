import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContent from "@/app/ui/units-and-departments/page-content";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="إدارة شئون العاملين" />
      <PageContent pageName="personnel-affairs" />
    </section>
  );
}
