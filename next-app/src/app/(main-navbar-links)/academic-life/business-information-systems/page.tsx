import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import memberImage from "@/../../public/dr-images/dr-ahmed-abu-al-futouh.jpg";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import { Metadata } from "next";
import { getPageByName } from "@/app/lib/data";
import { AcademicLifePagesData } from "@/app/lib/definitions";
import PageSections from "@/app/ui/academic-life/page-sections";

export const metadata: Metadata = {
  title: "قسم نظم معلومات الأعمال",
};

export default async function Page() {
  const pageData: AcademicLifePagesData = await getPageByName(
    "business-information-systems"
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
