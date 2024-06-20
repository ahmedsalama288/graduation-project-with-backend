import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import { fetchDepartmentData } from "@/app/lib/data";
import UlList from "@/app/ui/shared-ui/ul-list";

export default async function Page() {
  const departmentData = await fetchDepartmentData(
    "department-of-accounting/get"
  );
  const dutiesOfDepartmentHead = Object.values(departmentData.dutiesAndMission);

  return (
    <section>
      <MainPageHeader text="قسم المحاسبه" />
      <PageContentContainer>
        <MemberPhoto
          imageSrc={departmentData.imageSrc}
          alt="رئيس قسم المحاسبة"
        />
        <MemberName memberName={departmentData.profName} />
        <ContentWrapper className="mt-5">
          <ContentHeader text="مهام رئيس القسم العلوم المحاسبية" />
          <ContentContainer>
            <UlList list={dutiesOfDepartmentHead} />
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
