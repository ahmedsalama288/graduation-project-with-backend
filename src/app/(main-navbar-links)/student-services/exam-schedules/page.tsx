import { fetchExamSchedules } from "@/app/lib/data";
import DownloadPdf from "@/app/ui/shared-ui/download-pdf-component/download-pdf";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default async function Page() {
  const examSchedules = await fetchExamSchedules();

  return (
    <section>
      <MainPageHeader text="جداول الإمتحانات" />
      <PageContentContainer>
        <ContentWrapper>
          <div className=" p-4 min-h-[400px] flex justify-center items-center">
            <ul className=" flex flex-col gap-5 md:flex-row flex-wrap justify-around items-center w-full">
              <DownloadPdf
                pdfHref={examSchedules.firstPdfSchedule}
                pdfName="جدول الفرقة الأولى"
              />
              <DownloadPdf
                pdfHref={examSchedules.secondPdfSchedule}
                pdfName="جدول الفرقة الثانية"
              />
              <DownloadPdf
                pdfHref={examSchedules.theadPdfSchedule}
                pdfName="جدول الفرقة الثالثة"
              />
              <DownloadPdf
                pdfHref={examSchedules.fourthPdfSchedule}
                pdfName="جدول الفرقة الرابعة"
              />
            </ul>
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
