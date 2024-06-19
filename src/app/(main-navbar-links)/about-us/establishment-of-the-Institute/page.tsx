import { fetchEstablishmentOfTheInstituteData } from "@/app/lib/data";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default async function Page() {
  const instituteEstablishmentData =
    await fetchEstablishmentOfTheInstituteData();

  const renderedInstituteEstablishmentInfo = instituteEstablishmentData.map(
    ({ id, title, description }) => {
      const descriptionArr = Object.values(description);

      return (
        <div key={id}>
          <ContentWrapper>
            {title && <ContentHeader text={title} />}
            <ContentContainer>
              {descriptionArr.length <= 1 && <p>{descriptionArr[0]}</p>}
              {descriptionArr.length > 1 && (
                <ul className="list-disc pr-4">
                  {descriptionArr.map((description, index) => (
                    <li key={index}>{description}</li>
                  ))}
                </ul>
              )}
            </ContentContainer>
          </ContentWrapper>
        </div>
      );
    }
  );

  return (
    <section>
      <MainPageHeader text="نشأة المعهد" />
      <PageContentContainer className=" flex flex-col gap-5">
        {renderedInstituteEstablishmentInfo}
      </PageContentContainer>
    </section>
  );
}
