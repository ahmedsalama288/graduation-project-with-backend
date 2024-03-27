import MainPageHeader from "../ui/shared-ui/pages-components/main-page-header";
import CommonQuestionsSection from "../ui/main-page/common-questions-section/common-questions-section";
import InstituteInfoContainer from "../ui/main-page/institute-info-section/institute-info-container";
import LandingImage from "../ui/main-page/landing-image";
import BriefAboutUs from "../ui/main-page/brief-about-us";

export default function Home() {
  return (
    <section className=" bg-slate-100">
      <MainPageHeader text="الصفحة الرئيسية" />
      <article className="w-full mx-auto relative z-0 ">
        <LandingImage />
      </article>
      <BriefAboutUs />
      <InstituteInfoContainer />
      <CommonQuestionsSection />
    </section>
  );
}
