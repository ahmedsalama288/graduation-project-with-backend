import dynamic from "next/dynamic";

const InstituteMap = dynamic(
  () => import("@/app/ui/contact-us/institute-map"),
  {
    ssr: false,
  }
);

import ContactUsSection from "@/app/ui/contact-us/contact-us-section";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

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
