import { getPageByName } from "@/app/lib/data";
import { StudentSchedulePageData } from "@/app/lib/definitions";
import DownloadPdf from "@/app/ui/shared-ui/download-pdf-component/download-pdf";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الجداول الدراسية",
};

export default async function Page() {
  const pageData: StudentSchedulePageData = await getPageByName(
    "class-schedules"
  );

  return (
    <section>
      <MainPageHeader text="الجداول الدراسية" />
      <PageContentContainer>
        <ContentWrapper>
          <div className=" p-4 min-h-[400px] flex justify-center items-center">
            <ul className=" flex flex-col gap-5 md:flex-row flex-wrap justify-around items-center w-full">
              {pageData.studentClassSchedules.map(
                ({ scheduleName, pdfSrc }) => (
                  <DownloadPdf key={scheduleName} pdfHref={pdfSrc} pdfName={scheduleName} />
                )
              )}
            </ul>
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
