import MainPageHeader from "../ui/shared-ui/pages-components/main-page-header";
import CommonQuestionsSection from "../ui/main-page/common-questions-section/common-questions-section";
import InstituteInfoContainer from "../ui/main-page/institute-info-section/institute-info-container";
import LandingImage from "../ui/main-page/landing-image";
import BriefAboutUs from "../ui/main-page/brief-about-us";
import AnimatedSection from "../ui/shared-ui/pages-components/animated-section";

export default function Home() {
  return (
    <section className=" bg-slate-100">
      <MainPageHeader text="الصفحة الرئيسية" />
      <AnimatedSection duration="duration-500">
        <article className="w-full mx-auto relative z-0 ">
          <LandingImage />
        </article>
      </AnimatedSection>
      <AnimatedSection>
        <BriefAboutUs />
      </AnimatedSection>

      <AnimatedSection>
        <InstituteInfoContainer />
      </AnimatedSection>

      <AnimatedSection>
        <CommonQuestionsSection />
      </AnimatedSection>
    </section>
  );
}
