import AnimatedSection from "../../shared-ui/pages-components/animated-section";
import ContentHeader from "../../shared-ui/pages-components/content-header";
import ContentWrapper from "../../shared-ui/pages-components/content-wrapper";
import PageContentContainer from "../../shared-ui/pages-components/page-content-container";
import QuestionsList from "./questions-list";

interface props {
  commonQuestions: any[];
}

export default function CommonQuestionsSection({ commonQuestions }: props) {
  return (
    <section>
      <AnimatedSection>
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="الأسئلة الشائعة" />
          </ContentWrapper>
          <QuestionsList commonQuestions={commonQuestions}/>
        </PageContentContainer>
      </AnimatedSection>
    </section>
  );
}
