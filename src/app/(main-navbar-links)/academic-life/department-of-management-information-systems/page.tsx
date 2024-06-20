import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import memberImage from "@/../../public/dr-images/dr-ahmed-abu-al-futouh.jpg";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import { fetchDepartmentData } from "@/app/lib/data";
import UlList from "@/app/ui/shared-ui/ul-list";

export default async function Page() {
  const departmentData = await fetchDepartmentData(
    "department-of-management-information-systems/get"
  );
  const dutiesOfDepartmentHead = Object.values(departmentData.dutiesAndMission);

  return (
    <section>
      <MainPageHeader text="قسم نظم المعلومات الإدارية" />
      <PageContentContainer>
        <MemberPhoto
          imageSrc={departmentData.imageSrc}
          alt="رئيس قسم نظم المعلومات الإدارية"
        />
        <MemberName memberName={departmentData.profName} />
        <ContentWrapper className="mt-5">
          <ContentHeader text="مهام رئيس القسم نظم المعلومات الإدارية" />
          <ContentContainer>
            <UlList list={dutiesOfDepartmentHead} />
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
