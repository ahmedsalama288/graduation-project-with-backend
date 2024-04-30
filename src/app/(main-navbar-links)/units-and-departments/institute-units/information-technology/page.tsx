import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="وحدة تكنولوجيا المعلومات" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="مهام مدير وحدة تكنولوجيا المعلومات" />
          <ContentContainer>
            <ul className=" list-disc pr-4">
              <li>الإشراف على البنية التحتية للشبكة والانظمة المتاحة.</li>
              <li>
                إدارة فرق من الفنيين ومهندسي النظام وغيرهم من موظفي تكنولوجيا
                المعلومات.
              </li>
              <li>
                متابعة مشاكل اجهزة الكمبيوتر و تقديم النصيحة بخصوص الحلول
                المناسبة.
              </li>
              <li>
                متابعة بيانات الموظفين والعملاء والاحتفاظ بالسجلات بشكل منظم.
              </li>
              <li>اختبار واصلاح المعدات والأجهزة التقنية.</li>
              <li>صيانة وتحسين شبكات المؤسسة المحلية والخوادم التابعة لها.</li>
              <li>الإشراف على عمليات النسخ الاحتياطي للبيانات وأمان النظام.</li>
              <li>
                إدارة عمليات التثبيت والترقيات وتكوينات الأجهزة والبرامج
                المستخدمة.
              </li>
              <li>تقييم أداء النظام والتوصية لإجراء التحسينات المطلوبة.</li>
              <li>
                تقديم الحلول والتوصيات لتجنب المشكلات التي تتعلق بالاجهزة وانظمة
                البيانات.
              </li>
              <li>
                التأكد من معالجة البيانات أو نقلها وفقًا للإرشادات القانونية
                وإرشادات المؤسسة.
              </li>
              <li>
                التحكم في التكاليف والميزانيات المتعلقة بأجهزة وأنظمة تكنولوجيا
                المعلومات.
              </li>
              <li>
                إدارة العقود مع الموردين مثل منصات التطوير وشركات الاتصالات
                وتراخيص البرامج والأنظمة.
              </li>
              <li>تطوير سياسات تكنولوجيا المعلومات والممارسات المتبعة.</li>
              <li>ما يكلف به من اعمال اخرى فى نطاق اختصاصاته.</li>
            </ul>
          </ContentContainer>
        </ContentWrapper>

        <ContentWrapper className=" mt-5 sm:mt-6">
          <ContentHeader text="مهام التعليم الإلكتروني" />
          <ContentContainer>
            <ul className=" list-disc pr-4">
              <li>
                انشاء بوابة جديدة للتعلم الألكتروني طبقا للمعايير الحديثة.
              </li>
              <li>
                تحويل جميع المقررات الى مقررات الكترونية طبقا لمواصفات الجودة.
              </li>
              <li>
                دعم وتشجيع أعضاء هيئة التدريس لتفعيل أنظمة التعليم الألكتروني .
              </li>
              <li>
                إعداد دورات لأعضاء هيئة التدريس والطالب في كيفية استخدام نظام
                التعلم الألكتروني.
              </li>
              <li>ماتكلف به من مهام أخرى فى نطاق إختصاص الإدارة.</li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
