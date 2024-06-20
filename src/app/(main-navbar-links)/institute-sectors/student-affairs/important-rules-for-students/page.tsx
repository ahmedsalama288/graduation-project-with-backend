import { fetchImportantRulesForStudentsPageData } from "@/app/lib/data";
import DownloadPdf from "@/app/ui/shared-ui/download-pdf-component/download-pdf";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default async function Page() {
  const studentsRulesPdfFiles = await fetchImportantRulesForStudentsPageData();

  return (
    <section>
      <MainPageHeader text="قواعد هامه للطلاب" />
      <PageContentContainer>
        <ContentWrapper>
          <ul className=" flex flex-col gap-5 px-[1px] py-4 min-h-[400px] sm:p-2 md:flex-row flex-wrap justify-around items-center">
            <DownloadPdf
              pdfHref={studentsRulesPdfFiles.studentGuidePdf}
              pdfName="دليل الطالب"
            />
            <DownloadPdf
              pdfHref={studentsRulesPdfFiles.academicAdvisingPdf}
              pdfName="الإرشاد الأكاديمي"
            />
            <DownloadPdf
              pdfHref={studentsRulesPdfFiles.scientificLeadershipGuidePdf}
              pdfName="دليل ريادة علمية"
            />
          </ul>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
