import dynamic from "next/dynamic";

import ContactUsSection from "@/app/ui/contact-us/contact-us-section";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";
import MapLoadingSpinner from "@/app/ui/shared-ui/loading-spinner/map-loading-spinner";
// import InstituteMap from "@/app/ui/contact-us/institute-map";

const InstituteMap = dynamic(
  () => import("@/app/ui/contact-us/institute-map"),
  { ssr: false, loading: () => <MapLoadingSpinner /> }
);

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
