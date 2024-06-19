import AnimatedSection from "../shared-ui/pages-components/animated-section";
import ContentContainer from "../shared-ui/pages-components/content-container";
import ContentHeader from "../shared-ui/pages-components/content-header";
import ContentWrapper from "../shared-ui/pages-components/content-wrapper";
import PageContentContainer from "../shared-ui/pages-components/page-content-container";

interface Props {
  title: string;
  ourGoalsObj: any;
}

export default function BriefAboutUs({ title, ourGoalsObj }: Props) {
  const ourGoals: string[] = Object.values(ourGoalsObj);

  return (
    <section>
      <AnimatedSection>
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="معهد الدلتا العالي" />
            <ContentContainer>
              <div>
                <p>{title}</p>
              </div>
            </ContentContainer>

            <ContentContainer>
              <ul className=" list-disc pr-4">
                {ourGoals.map((goal, index) => (
                  <li key={index}>{goal}</li>
                ))}
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </PageContentContainer>
      </AnimatedSection>
    </section>
  );
}
