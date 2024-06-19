import { fetchInstituteRegulationsFileLinks } from "@/app/lib/data";
import DownloadPdf from "@/app/ui/shared-ui/download-pdf-component/download-pdf";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default async function Page() {
  const instituteRegulationsFiles = await fetchInstituteRegulationsFileLinks();

  return (
    <section>
      <MainPageHeader text="اللائحة" />
      <PageContentContainer>
        <ContentWrapper>
          <div className=" p-4 min-h-[400px] flex justify-center items-center">
            <ul className=" flex flex-col gap-5 md:flex-row flex-wrap justify-around items-center w-full">
              <DownloadPdf
                pdfHref={instituteRegulationsFiles.newRegulation}
                pdfName="اللائحة الجديدة"
              />
              <DownloadPdf
                pdfHref={instituteRegulationsFiles.oldRegulation}
                pdfName="اللائحة القديمة"
              />
            </ul>
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
