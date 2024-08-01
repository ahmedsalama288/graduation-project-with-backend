import { getPageByName } from "@/app/lib/data";
import { BasicPageData } from "@/app/lib/definitions";
import PageSectionsList from "@/app/ui/shared-ui/page-sections/page-sections-list";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الرؤية - الرسالة - الاهداف",
};

export default async function Page() {
  const pageData: BasicPageData = await getPageByName("vision-mission-goals");

  return (
    <section>
      <MainPageHeader text="الرؤية - الرسالة - الاهداف" />
      <PageContentContainer>
        <PageSectionsList sections={pageData.sections} />
      </PageContentContainer>
    </section>
  );
}
