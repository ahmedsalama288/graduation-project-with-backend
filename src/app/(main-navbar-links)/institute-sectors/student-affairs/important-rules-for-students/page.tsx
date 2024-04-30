import DownloadPdf from "@/app/ui/shared-ui/download-pdf-component/download-pdf";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { DocumentArrowDownIcon } from "@heroicons/react/24/outline";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="قواعد هامه للطلاب" />
      <PageContentContainer>
        <ContentWrapper>
            <ul className=" flex flex-col gap-5 p-[1px] sm:p-2 md:flex-row flex-wrap justify-around items-center">
              <DownloadPdf
                pdfHref="/pdf/important-rules-for-students/student-guide.pdf"
                pdfName="دليل الطالب"
              />
              <DownloadPdf
                pdfHref="/pdf/important-rules-for-students/academic-advising.pdf"
                pdfName="الإرشاد الأكاديمي"
              />
              <DownloadPdf
                pdfName="دليل ريادة علمية"
                pdfHref="/pdf/important-rules-for-students/scientific-leadership-guide.pdf"
              />
            </ul>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
