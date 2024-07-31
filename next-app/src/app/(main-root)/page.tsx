import MainPageHeader from "../ui/shared-ui/pages-components/main-page-header";
import CommonQuestionsSection from "../ui/main-page/common-questions-section/common-questions-section";
import InstituteInfoContainer from "../ui/main-page/institute-info-section/institute-info-container";
import BriefAboutUs from "../ui/main-page/brief-about-us";
import SliderImages from "../ui/main-page/hero-images/slider-images";
import { apiUrl } from "../lib/constants";
import { getPageByName } from "../lib/data";
import { MainPageData } from "../lib/definitions";

export default async function Home() {
  const mainPageData: MainPageData = await getPageByName("main-page");

  const {
    briefAboutUsSection,
    studentsNumbersSection,
    commonQuestionsSection,
  } = mainPageData;

  return (
    <section className=" bg-slate-100">
      <MainPageHeader text="الصفحة الرئيسية" />
      <article className="w-full mx-auto relative z-0 ">
        <SliderImages />
      </article>
      <BriefAboutUs
        paragraph={briefAboutUsSection.paragraph}
        instituteGoals={briefAboutUsSection.instituteGoals}
      />
      <InstituteInfoContainer
        currentStudents={studentsNumbersSection.currentStudents}
        graduatedStudents={studentsNumbersSection.graduatedStudents}
      />
      <CommonQuestionsSection commonQuestionsList={commonQuestionsSection}/>
    </section>
  );
}
