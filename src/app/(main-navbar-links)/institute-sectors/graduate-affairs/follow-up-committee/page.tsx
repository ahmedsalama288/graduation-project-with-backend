import { fetchGraduateFollowUpPageData } from "@/app/lib/data";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import MemberPhoto from "@/app/ui/shared-ui/pages-components/member-photo";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default async function Page() {
  const graduateFollowUpMembers = await fetchGraduateFollowUpPageData();

  return (
    <section>
      <MainPageHeader text="لجنة متابعة الخريجين" />
      <PageContentContainer>
        <div
          className=" 
                grid
                grid-cols-1 grid-rows-6
                md:grid-rows-2 md:grid-cols-2
                lg:grid-rows-2 lg:grid-cols-3
                justify-items-center gap-6
              "
        >
          {graduateFollowUpMembers.map(
            ({
              id,
              name: memberName,
              image: memberImageSrc,
              title: memberRole,
            }) => (
              <ContentWrapper className=" w-full drop-shadow-md " key={id}>
                <div className=" flex flex-col justify-center items-center gap-4 pt-4">
                  <MemberPhoto imageSrc={memberImageSrc} alt={memberName} />
                  <ContentHeader
                    className="w-[350px] max-w-full text-center"
                    text={memberName}
                  />
                  <ContentContainer>
                    <div className=" w-[350px] max-w-full text-base text-center">
                      <p>{memberRole}</p>
                    </div>
                  </ContentContainer>
                </div>
              </ContentWrapper>
            )
          )}
        </div>
        <ContentWrapper className=" mt-5">
          <ContentHeader text="مهام لجنة متابعة الخريجين" />
          <ContentContainer>
            <ul className=" flex flex-col gap-3 mt-4 list-disc pr-4">
              <li> عمل قاعدة بيانات ورابطة للخريجين.</li>
              <li>التواصل الدائم مع شئون الخريجين بالمعهد.</li>
              <li>وضع برامج لرفع كفاءة الخريجين.</li>
              <li>اسهام الخريجين فى تطوير وارتقاء المعهد.</li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
