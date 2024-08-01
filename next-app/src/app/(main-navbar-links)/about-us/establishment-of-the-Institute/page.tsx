import { getPageByName } from "@/app/lib/data";
import { BasicPageData } from "@/app/lib/definitions";
import PageSectionsList from "@/app/ui/shared-ui/page-sections/page-sections-list";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "نشأة المعهد",
};

export default async function Page() {
  const pageData: BasicPageData = await getPageByName(
    "establishment-of-the-Institute"
  );

  return (
    <section>
      <MainPageHeader text="نشأة المعهد" />
      <PageContentContainer>
        <PageSectionsList sections={pageData.sections} />
      </PageContentContainer>
    </section>
  );
}
