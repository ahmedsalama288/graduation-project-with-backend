import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة شئون العاملين",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="إدارة شئون العاملين" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="مهام مدير ادارة شئون العاملين" />
          <ContentContainer>
            {/* list-disc pr-4 */}
            <ul className=" list-disc pr-4">
              <li>
                الاشراف على العاملين بالوحدات التابعة له والتنسيق بين اعمالهم
                وتوجيههم.
              </li>
              <li>متابعة تطبيق القوانين والتعليمات التى تحكم العمل.</li>
              <li>
                الاشراف على اعمال التسجيل والوثائق ومتابعة اعمال القيد والحفظ
                والوارد والصادر بها.
              </li>
              <li>
                الاشراف على اعمال شئون الافراد بالمعهد واعداد المذكرات
                والموضوعات المطلوب عرضها.
              </li>
              <li>
                الاشراف على اعمال الخدمات الداخلية ودفاتر الحضور والانصراف
                واعمال النسخ والطبع.
              </li>
              <li>
                اعداد التقارير الدورية عن نشاط الشئون الادارية بالمعهد وعرضها
                على المسئولين.
              </li>
              <li>
                تقييم العاملين بالادارة ورفع توصيات بما يجب اتخاذه من اجراءات
                تطويرية او عقابية.
              </li>
              <li>
                التنسيق مع ادارة التدريب فى تنفيذ برامج التطوير الخاصة
                بالمرؤوسيين.
              </li>
              <li>ما يكلف به من اعمال اخرى فى نطاق اختصاصاته.</li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
