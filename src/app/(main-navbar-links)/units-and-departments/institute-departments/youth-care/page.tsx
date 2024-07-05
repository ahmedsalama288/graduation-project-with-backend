import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة رعاية الشباب",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="إدارة رعاية الشباب" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="مهام مدير ادارة رعاية الطلاب" />
          <ContentContainer>
            {/* list-disc pr-4 */}
            <ul className="list-disc pr-4">
              <li>تطبيق معايير ومتطلبات الجودة.</li>
              <li>وضع خطط الانشطة الطلابية .</li>
              <li>
                متابعة تنفيذ الانشطة الداخلية والخارجية الخاصة بوزارة التعليم
                العالى.
              </li>
              <li>
                متابعة اقامة انشطة داخلية وخارجية المنصوص عليها فى خطة الوزارة.
              </li>
              <li>رفع تقارير عن سير العمل لعميد المعهد.</li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
