import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import PageContent from "@/app/ui/units-and-departments/page-content";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="وحدة التدريب" />
      <PageContent pageName="training" />
    </section>
  );
}
