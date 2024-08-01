import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import imageSrc from "@/../../public/dr-images/dr-muhammad-rabie-nasser.jpeg";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import { Metadata } from "next";
import { getPageByName } from "@/app/lib/data";
import { InstituteManagementPagesData } from "@/app/lib/definitions";

export const metadata: Metadata = {
  title: "رئيس مجلس الإدارة",
};

export default async function Page() {
  const pageData: InstituteManagementPagesData = await getPageByName(
    "chairman-of-board-of-directors"
  );

  return (
    <section>
      <MainPageHeader text="رئيس مجلس الإدارة" />
      <PageContentContainer>
        <div>
          <MemberPhoto imageSrc={imageSrc} alt="رئيس مجلس الإدارة" />
          <MemberName memberName={pageData.speechBy} />
        </div>

        <ContentWrapper>
          <ContentHeader text="أبنائي الطلاب" />
          <ContentContainer>
            <p>{pageData.speechParagraph}</p>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
