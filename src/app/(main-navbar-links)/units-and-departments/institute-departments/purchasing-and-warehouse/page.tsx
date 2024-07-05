import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "إدارة المشتريات والمخازن",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="إدارة المشتريات والمخازن" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="مهام مدير قسم المشتريات والمخازن" />
          <ContentContainer>
            {/* list-disc pr-4 */}
            <ul className="list-disc pr-4">
              <li>
                المشاركة فى التخطيط و إعداد البرامج التنفيذية لإدارة المشتريات
                والمخازن.
              </li>
              <li>
                تنفيذ الخطط و البرامج التنفيذية الخاصة بإدارة المشتريات
                والمخازن.
              </li>
              <li>
                إقتراح الإجراءات التحسينية و العلاجية و الوقائية التى من شأنها
                تحسين أداء العمل بإدارته.
              </li>
              <li>
                المشاركة فى إعداد الميزانية المناسبة لإدارة المشتريات والمخازن
                فى حدود إمكانيات المعهد بناءاً على دراسات.
              </li>
              <li> مسئول عن تحديد الحدود المخزنية للأصناف وتكويد الأصناف.</li>
              <li>مسئول عن إصدار طلبات الشراء.</li>
              <li> المشاركة فى إعداد الإجراءات الخاصة بالمخازن.</li>
              <li>
                مسئول عن إمساك السجلات المخزنية ومتابعة أعمال التخزين وإصدار
                القرارات بكيفية التخزين.
              </li>
              <li>
                إصدار القرارات المناسبة فى حدود سلطاته و التى قد تكون سبباً فى
                تحسين الأداء المخزني.
              </li>
              <li>
                إجراء جرد دوري للمخازن كل ثلاث شهور ورفع نسخ منه لأمين المعهد.
              </li>
              <li>ما يكلف به من اعمال اخرى فى نطاق اختصاصاته.</li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
