import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="العيادة الطبية" />
      <div className=" px-2 sm:px-0">
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="مهام مدير العيادة الطبية" />
            <ContentContainer>
              {/* list-disc pr-4 */}
              <ul className="list-disc pr-4">
                <li>
                  استقبال حالات الطوارئ من العاملين وهيئة التدريس وتقديم كل ما
                  هو متاح من كشف وفحص وعلاج.
                </li>
                <li>
                  استقبال الحالات المرضية من الطلبة المترددة يوميا وتقديم الكشف
                  والعلاج.
                </li>
                <li>
                  استقبال الحالات المزمنة مثل مرض السكر والحالات الخاصة والحالات
                  النفسية وتقديم الكشف والفحوص والعلاج بصفة دورية.
                </li>
                <li>خدمات الإشراف الطبي على لجان الامتحانات طوال العام.</li>
                <li>خدمات الكشف الطبي على الطلبة الجدد.</li>
                <li>تقديم الخدمة العلاجية طوال العام.</li>
                <li>
                  عمل إحصائيات سنوية بشان الطلبة والطالبات المترددين للعلاج
                  وتقدم للجهات المختصة.
                </li>
                <li>
                  الاشراف علي اتخاذ الاجراءات الوقائية بالنسبة للأمراض المعدية
                  التي تظهر بين الطلاب.
                </li>
                <li>
                  الكشف علي الطلاب قبل القيام بمعسكرات داخل وخارج المعهد او
                  الرحلات.
                </li>
                <li>
                  {" "}
                  اعتماد الاجازات المرضية اثناء العام الدراسي والامتحانات.
                </li>
                <li>عقد لجان خاصة اذا احتاج الامر بالنسبة للطلاب المصابة.</li>
                <li>تنمية علاقات طيبة مع المستشفيات الحكومية.</li>
                <li>
                  رفع تقارير عن سير العمل لوكيل المعهد لشئون التعليم والطلاب،
                  الإشراف علي المرؤوسين وتوجيههم وتحفيزهم وتنميتهم، التعاون مع
                  كافة الإدارات والأقسام بالمعهد
                </li>
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </PageContentContainer>
      </div>
    </section>
  );
}
