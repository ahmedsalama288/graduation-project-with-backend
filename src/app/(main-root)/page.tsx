import MainPageHeader from "../ui/shared-ui/pages-components/main-page-header";
import CommonQuestionsSection from "../ui/main-page/common-questions-section/common-questions-section";
import InstituteInfoContainer from "../ui/main-page/institute-info-section/institute-info-container";
import BriefAboutUs from "../ui/main-page/brief-about-us";
import SliderImages from "../ui/main-page/hero-images/slider-images";
import { fetchMainPageData } from "../lib/data";

export default async function Page() {
  const mainPageData = await fetchMainPageData();

  return (
    <section className=" bg-slate-100">
      <MainPageHeader text="الصفحة الرئيسية" />
      <article className="w-full mx-auto relative z-0 ">
        <SliderImages />
      </article>
      <BriefAboutUs
        title={mainPageData.title}
        ourGoalsObj={mainPageData.ourGoals}
      />
      <InstituteInfoContainer
        studentsNumber={mainPageData.studentsNumber}
        graduatedStudents={mainPageData.graduatedStudents}
      />
      <CommonQuestionsSection commonQuestions={mainPageData.commonQuestions} />
    </section>
  );
}
