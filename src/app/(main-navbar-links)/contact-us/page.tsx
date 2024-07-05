import dynamic from "next/dynamic";

const InstituteMap = dynamic(
  () => import("@/app/ui/contact-us/institute-map"),
  {
    loading: () => (
      <div className=" flex justify-center items-center w-full h-[400px] ">
        <div
          className="
          m-12 inline-block h-12 w-12 animate-spin
          rounded-full border-4 border-solid border-current
          border-e-transparent align-[-0.125em] text-surface
          motion-reduce:animate-[spin_1.5s_linear_infinite]
          dark:text-white"
          role="status"
        >
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      </div>
    ),
    ssr: false,
  }
);

import ContactUsSection from "@/app/ui/contact-us/contact-us-section";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "تواصل معنا",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="تواصل معنا" />
      <PageContentContainer>
        <ContentWrapper>
          <ContactUsSection />
        </ContentWrapper>

        <ContentWrapper className=" mt-5">
          <InstituteMap />
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
