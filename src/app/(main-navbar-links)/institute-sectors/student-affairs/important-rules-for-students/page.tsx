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
          <div className=" p-4">
            <ul className=" flex flex-col gap-5 md:flex-row flex-wrap justify-around items-center">
              <li className="flex flex-col justify-center items-center p-4 h-[170px] w-[170px] border border-inherit border-solid rounded-full">
                <a
                  className=" flex flex-col gap-2 justify-center items-center"
                  href="/pdf/important-rules-for-students/student-guide.pdf"
                  download="student-guide.pdf"
                >
                  <DocumentArrowDownIcon className=" h-10 w-10" />
                  <span className=" font-bold">دليل الطالب</span>
                </a>
              </li>

              <li className="flex flex-col justify-center items-center p-4 h-[170px] w-[170px] border border-inherit border-solid rounded-full">
                <a
                  className=" flex flex-col gap-2 justify-center items-center"
                  href="/pdf/important-rules-for-students/academic-advising.pdf"
                  download="academic-advising.pdf"
                >
                  <DocumentArrowDownIcon className=" h-10 w-10" />
                  <span className=" font-bold">الإرشاد الأكاديمي</span>
                </a>
              </li>

              <li className="flex flex-col justify-center items-center p-4 h-[170px] w-[170px] border border-inherit border-solid rounded-full">
                <a
                  className=" flex flex-col gap-2 justify-center items-center"
                  href="/pdf/important-rules-for-students/scientific-leadership-guide.pdf"
                  download="scientific-leadership-guide.pdf"
                >
                  <DocumentArrowDownIcon className=" h-10 w-10" />
                  <span className=" font-bold">دليل ريادة علمية</span>
                </a>
              </li>
            </ul>
          </div>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
