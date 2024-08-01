import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import memberImage from "@/../../public/dr-images/dr-isalm.jpeg";
import { Metadata } from "next";
import { AcademicLifePagesData } from "@/app/lib/definitions";
import { getPageByName } from "@/app/lib/data";
import PageSections from "@/app/ui/academic-life/page-sections";

export const metadata: Metadata = {
  title: "قسم المحاسبه",
};

export default async function Page() {
  const pageData: AcademicLifePagesData = await getPageByName(
    "department-of-accounting"
  );

  return (
    <section>
      <MainPageHeader text={pageData.departmentName} />
      <PageContentContainer>
        <div>
          <MemberPhoto
            imageSrc={
              pageData.departmentHeadImageSrc
                ? pageData.departmentHeadImageSrc
                : memberImage
            }
            alt={pageData.departmentHeadName}
          />
          <MemberName memberName={pageData.departmentHeadName} />
        </div>
        <PageSections sections={pageData.sections} />
      </PageContentContainer>
    </section>
  );
}
