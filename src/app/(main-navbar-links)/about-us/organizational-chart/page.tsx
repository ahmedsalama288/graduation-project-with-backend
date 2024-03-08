import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import organizationalChartImage from "@/../../public/about-us/organizational-chart/organizational-chart.jpeg";
import Image from "next/image";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="الهيكل التنظيمي" />
      <PageContentContainer className=" flex justify-center items-center">
        <ContentWrapper className="mt-0 w-fit lg:h-[600px] flex justify-center items-center">
            <Image
              width={10000}
              height={10000}
              priority={false}
              className="rounded-sm sm:rounded-md w-auto h-full "
              src={organizationalChartImage}
              alt="الهيكل التنظيمي للمعهد"
            />
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
