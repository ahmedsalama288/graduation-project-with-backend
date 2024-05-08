import DownloadPdf from "@/app/ui/shared-ui/download-pdf-component/download-pdf";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="المقررات الدراسية" />
      <PageContentContainer>
        <ContentWrapper className=" mb-4">
          <ContentContainer>
            <p>كل معلومات عن المقررات الدراسية في الاحه التابعة لك.</p>
          </ContentContainer>
        </ContentWrapper>

        <ContentWrapper>
          <div className=" p-4 min-h-[400px] flex justify-center items-center">
            <ul className=" flex flex-col gap-5 md:flex-row flex-wrap justify-around items-center w-full">
              <DownloadPdf
                pdfHref="/pdf/new-internal-regulation.pdf"
                pdfName="اللائحة الجديدة"
              />
              <DownloadPdf
                pdfHref="/pdf/internal-regulation.pdf"
                pdfName="اللائحة القديمة"
              />
            </ul>
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
