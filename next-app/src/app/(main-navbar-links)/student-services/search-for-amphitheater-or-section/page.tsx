import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import SearchForAmphitheaterOrSection from "@/app/ui/search-for-amphitheater-or-section/search-for-amphitheater-or-section";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "الهيكل الداخلي للمبني",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="الهيكل الداخلي للمبني" />
      <SearchForAmphitheaterOrSection />
    </section>
  );
}
