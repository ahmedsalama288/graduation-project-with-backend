import AnimatedSection from "../../shared-ui/pages-components/animated-section";
import ContentHeader from "../../shared-ui/pages-components/content-header";
import ContentWrapper from "../../shared-ui/pages-components/content-wrapper";
import PageContentContainer from "../../shared-ui/pages-components/page-content-container";
import QuestionsList from "./questions-list";
import { CommonQuestionsSection as CommonQuestionsList } from "@/app/lib/definitions";

interface Props {
  commonQuestionsList: CommonQuestionsList[];
}

export default function CommonQuestionsSection({ commonQuestionsList }: Props) {
  return (
    <section>
      <AnimatedSection>
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="الأسئلة الشائعة" />
          </ContentWrapper>
          <QuestionsList commonQuestionsList={commonQuestionsList} />
        </PageContentContainer>
      </AnimatedSection>
    </section>
  );
}
