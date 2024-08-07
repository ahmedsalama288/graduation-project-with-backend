import { getPageByName } from "@/app/lib/data";
import { BasicPageData } from "@/app/lib/definitions";
import PageSections from "@/app/ui/academic-life/page-sections";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "وحدة تكنولوجيا المعلومات",
};

export default async function Page() {
  const pageData: BasicPageData = await getPageByName("information-technology");

  return (
    <section>
      <MainPageHeader text="وحدة تكنولوجيا المعلومات" />
      <PageContentContainer>
        <PageSections sections={pageData.sections} />
      </PageContentContainer>
    </section>
  );
}
