import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import imageSrc from "@/../../public/dr-images/dr-ahmed-abu-al-futouh.jpg";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import { Metadata } from "next";
import { getPageByName } from "@/app/lib/data";
import { InstituteManagementPagesData } from "@/app/lib/definitions";

export const metadata: Metadata = {
  title: "عميد المعهد",
};

export default async function Page() {
  const pageData: InstituteManagementPagesData = await getPageByName(
    "institute-dean"
  );

  return (
    <section>
      <MainPageHeader text="عميد المعهد" />
      <PageContentContainer>
        <div>
          <MemberPhoto imageSrc={imageSrc} alt="عميد المعهد" />
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
