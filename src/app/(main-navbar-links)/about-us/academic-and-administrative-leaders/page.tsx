import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import { fetchAcademicLeadersData } from "@/app/lib/data";
import { cn } from "@/app/lib/utils";

export default async function Page() {
  const academicLeadersData = await fetchAcademicLeadersData();

  const renderedContent = academicLeadersData.map(
    async ({ id, image, name, title }, index) => {
      return (
        <ContentWrapper
          key={id}
          className={cn(
            "w-full drop-shadow-md",
            index === 0 && "md:col-span-2 lg:col-span-3"
          )}
        >
          <div className=" flex flex-col justify-center items-center gap-4 pt-4">
            <MemberPhoto imageSrc={image} alt="عميد المعهد" />
            <ContentHeader
              className=" w-[350px] max-w-full text-center"
              text={name}
            />
            <ContentContainer>
              <div className=" w-[350px] max-w-full text-base text-center md:py-[2px]">
                <p>{title}</p>
              </div>
            </ContentContainer>
          </div>
        </ContentWrapper>
      );
    }
  );

  return (
    <section>
      <MainPageHeader text="القيادات الأكاديمية والإدارية" />
      <PageContentContainer
        className=" 
                grid grid-cols-1 grid-rows-7
                md:grid-rows-4 md:grid-cols-2
                lg:grid-rows-3 lg:grid-cols-3
                justify-items-center gap-6"
      >
        {renderedContent}
      </PageContentContainer>
    </section>
  );
}
