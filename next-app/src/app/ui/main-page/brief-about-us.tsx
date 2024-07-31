import { BriefAboutUsSection } from "@/app/lib/definitions";
import AnimatedSection from "../shared-ui/pages-components/animated-section";
import ContentContainer from "../shared-ui/pages-components/content-container";
import ContentHeader from "../shared-ui/pages-components/content-header";
import ContentWrapper from "../shared-ui/pages-components/content-wrapper";
import PageContentContainer from "../shared-ui/pages-components/page-content-container";
import ListItems from "../shared-ui/list-items/list-items";

export default function BriefAboutUs({
  paragraph,
  instituteGoals,
}: BriefAboutUsSection) {
  return (
    <section>
      <AnimatedSection>
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="معهد الدلتا العالي" />
            <ContentContainer>
              <div>
                <p>{paragraph}</p>
              </div>
            </ContentContainer>

            <ContentContainer>
              <ListItems listItems={instituteGoals} />
            </ContentContainer>
          </ContentWrapper>
        </PageContentContainer>
      </AnimatedSection>
    </section>
  );
}
