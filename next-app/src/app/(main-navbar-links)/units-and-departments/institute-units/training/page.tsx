import { getPageByName } from "@/app/lib/data";
import { BasicPageData } from "@/app/lib/definitions";
import PageSections from "@/app/ui/academic-life/page-sections";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "وحدة التدريب",
};

export default async function Page() {
  const pageData: BasicPageData = await getPageByName("training");

  return (
    <section>
      <MainPageHeader text="وحدة التدريب" />
      <PageContentContainer>
        <PageSections sections={pageData.sections} />
      </PageContentContainer>
    </section>
  );
}
