import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "المكتبة",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="المكتبة" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="مهام مدير المكتبة" />
          <ContentContainer>
            {/* list-disc pr-4 */}
            <ul className="list-disc pr-4">
              <li>
                الاشتراك في وضع البرامج التنفيذية الخاصة بالمكتبة ومتابعة
                تنفيذها.
              </li>
              <li>تزويد المكتبة بالكتب والدوريات العلمية.</li>
              <li>
                الاشتراك في وضع النظم الادارية التى تكفل حسن ادارة العمل
                بالمكتبة.
              </li>
              <li>
                متابعة عملية الاعارة الداخلية والخارجية طبقا للوائح والقوانين.
              </li>
              <li>
                القيام بأعمال الفهرسة والتصنيف لمقتنيات المكتبة طبقا لقواعد
                الفهرسة الفنية المعمول بها.
              </li>
              <li>
                اعداد بطاقات الفهارس المختلفة طبقا لقواعد الفهرسة الفنية المعمول
                بها والإشراف على تنظيم وترتيب الكتب والمراجع.
              </li>
              <li>اعداد فهرس مطبوع بمحتويات المكتبة.</li>
              <li>المشاركة فى الفحص الفنى لواردات المكتبة من أجهزة ومراجع.</li>
              <li>
                الأشراف على تطبيق قواعد الإستعارة والأشراف على تطبيق المكتبة
                الألكتروني.
              </li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
