import { getPageByName } from "@/app/lib/data";
import { InstituteRegulationsPageData } from "@/app/lib/definitions";
import DownloadPdf from "@/app/ui/shared-ui/download-pdf-component/download-pdf";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "اللائحة",
};

export default async function Page() {
  const pageData: InstituteRegulationsPageData = await getPageByName(
    "institute-regulations"
  );

  const renderedRegulationsPdfFiles = pageData.regulationsPdfFiles.map(
    ({ pdfName, pdfSrc }) => (
      <DownloadPdf key={pdfName} pdfHref={pdfSrc} pdfName={pdfName} />
    )
  );

  return (
    <section>
      <MainPageHeader text="اللائحة" />
      <PageContentContainer>
        <ContentWrapper>
          <div className=" p-4 min-h-[400px] flex justify-center items-center">
            <ul className=" flex flex-col gap-5 md:flex-row flex-wrap justify-around items-center w-full">
              {renderedRegulationsPdfFiles}
            </ul>
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
