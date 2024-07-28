import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة الأمن",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="إدارة الأمن" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="مهام مدير إدارة الأمن" />
          <ContentContainer>
            {/* list-disc pr-4 */}
            <ul className="list-disc pr-4">
              <li>
                وضع الخطط الكفيلة بتوفير الأمن والحماية للمعهد بموظفيه وطلابه
                والزوار.
              </li>
              <li>
                العمل على وضع الخطط للعناية بالزوار وخلق الانطباع الجيد عن
                المعهد.
              </li>
              <li>
                الدفاع عن المعهد وموظفيه وطلابه وزواره في حال حصول تهجم على أي
                منهم.
              </li>
              <li>الإشراف على كافة موظفي الأمن.</li>
              <li>وضع جدول الدوام والورديات لموظفي الأمن.</li>
              <li>
                وضع دليل الأنظمة والإجراءات لموظفي الأمن للتعامل مع الحالات
                الأمنية المختلفة.
              </li>
              <li>
                تدريب الموظفين كيفية التعامل في حال وجود حريق، أو حالات الكوارث
                الطبيعية، والإخلاء.
              </li>
              <li>التأكد من وجود وسائل الأمن والسلامة في المؤسسة.</li>
              <li>
                تنسيب موظفي الأمن للاشتراك بالدورات التدريبية الخاصة بالدفاع
                المدني والتعامل مع الحالات الأمنية.
              </li>
              <li>التعاون مع أجهزة الدولة في حال وقوع أي مشكلة في المؤسسة.</li>
              <li>الرقابة على موظفي القسم والتحقق من كفائتهم في العمل.</li>
              <li>العمل على حل أي مشكلة قد تظهر مع فريق العمل بشكل ودي.</li>
              <li>إعداد التقارير الدورية بسير العمل للإدارة.</li>
              <li>
                إعداد كشف باحتياجات الوحدة من الأجهزة وغيرها اللازمة من أجل
                سلامة الموظفين والزوار.
              </li>
              <li>أي مهام أخرى يكلف بها من قبل الإدارة ضمن نطاق العمل.</li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
