import { PageSection } from "@/app/lib/definitions";
import ContentWrapper from "../pages-components/content-wrapper";
import ContentHeader from "../pages-components/content-header";
import ContentContainer from "../pages-components/content-container";
import ListItems from "../list-items/list-items";

export default function PageSectionsList({
  sections,
}: {
  sections: PageSection[];
}) {
  const renderedPageData = sections.map(
    ({ sectionName, sectionContent }, index) => (
      <div key={index}>
        <ContentWrapper>
          {sectionName && <ContentHeader text={sectionName} />}
          <ContentContainer>
            {sectionContent.length > 1 && (
              <ListItems listItems={sectionContent} />
            )}
            {sectionContent.length === 1 && <p>{sectionContent[0]}</p>}
          </ContentContainer>
        </ContentWrapper>
      </div>
    )
  );

  return <>{renderedPageData}</>;
}
