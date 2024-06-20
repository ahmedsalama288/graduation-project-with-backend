import { fetchUnitsAndDepartmentsData } from "@/app/lib/data";
import ContentWrapper from "../shared-ui/pages-components/content-wrapper";
import ContentHeader from "../shared-ui/pages-components/content-header";
import ContentContainer from "../shared-ui/pages-components/content-container";
import UlList from "../shared-ui/ul-list";
import PageContentContainer from "../shared-ui/pages-components/page-content-container";

interface Props {
  pageName: string;
}

export default async function PageContent({ pageName }: Props) {
  const pageData = await fetchUnitsAndDepartmentsData(pageName);

  return (
    <PageContentContainer className=" flex flex-col gap-5">
      {pageData.map((pageInfo) => (
        <ContentWrapper key={pageInfo.id}>
          <ContentHeader text={pageInfo.title} />
          <ContentContainer>
            <UlList list={Object.values(pageInfo.description)} />
          </ContentContainer>
        </ContentWrapper>
      ))}
    </PageContentContainer>
  );
}
