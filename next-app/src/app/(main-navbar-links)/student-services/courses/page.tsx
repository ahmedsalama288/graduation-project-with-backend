import { getPageByName } from "@/app/lib/data";
import { StudentCoursePageData } from "@/app/lib/definitions";
import DownloadPdf from "@/app/ui/shared-ui/download-pdf-component/download-pdf";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "المقررات الدراسية",
};

export default async function Page() {
  const pageData: StudentCoursePageData = await getPageByName("courses");

  return (
    <section>
      <MainPageHeader text="المقررات الدراسية" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentContainer>
            <p>كل معلومات عن المقررات الدراسية في الاحه التابعة لك.</p>
          </ContentContainer>
        </ContentWrapper>

        <ContentWrapper>
          <div className=" p-4 min-h-[400px] flex justify-center items-center">
            <ul className=" flex flex-col gap-5 md:flex-row flex-wrap justify-around items-center w-full">
              {pageData.studentCourses.map(
                ({ coursesPlanName, coursesPlanPdfSrc }) => (
                  <DownloadPdf
                    key={coursesPlanName}
                    pdfHref={coursesPlanPdfSrc}
                    pdfName={coursesPlanName}
                  />
                )
              )}
            </ul>
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
