import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import memberImage from "@/../../public/dr-images/dr-ahmed-abu-al-futouh.jpg";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import MemberName from "@/app/ui/shared-ui/pages-components/member-name";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import DutiesOfDepartmentHead from "@/app/ui/academic-life/duties-of-department-head";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="قسم نظم معلومات إدارة الأعمال" />
      <PageContentContainer>
        <MemberPhoto
          imageSrc={memberImage}
          alt="رئيس قسم نظم معلومات إدارة الأعمال"
        />
        <MemberName memberName="أ.د / أحمد أبو الفتوح صالح" />
        <ContentWrapper className="mt-5">
          <ContentHeader text="مهام رئيس قسم نظم معلومات إدارة الأعمال" />
          <ContentContainer>
            <DutiesOfDepartmentHead />
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
