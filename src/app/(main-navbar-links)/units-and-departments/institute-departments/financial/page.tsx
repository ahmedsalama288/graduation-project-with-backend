import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="الإدارة المالية" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="مهام ومسئوليات مدير الشئون المالية" />
          <ContentContainer>
            {/* list-disc pr-4 */}
            <ul className=" list-disc pr-4">
              <li>
                الاشراف على العاملين بالوحدات التابعة له والتنسيق بين اعمالهم
                وتوجيههم.
              </li>
              <li>متابعة تطبيق القوانين والتعليمات التى تحكم العمل.</li>
              <li>
                الاشراف على اعمال التسجيل والوثائق ومتابعة اعمال القيد للمعاملات
                المالية.
              </li>
              <li>
                وضع السياسات التي تنظم العمل ووضع خطط وبرامج العمل لتحقيق
                الاهداف المقرره.
              </li>
              <li>
                ضمان سلامة انجاز مهام الحسابات الماليه وأحكام سلامة الانفاق
                وتحصيل الاموال بحيث يسهل عملية اتخاذ القرارات.
              </li>
              <li>
                استخراج الحسابات بشكل دقيق واعداد التقارير الماليه الصحيحه
                لترشيد قرارات مجلس الاداره.
              </li>
              <li>
                اعداد التقارير الدورية عن نشاط الشئون المالية بالمعهد وعرضها على
                المسئولين.
              </li>
              <li>
                تقييم العاملين بالادارة ورفع توصيات بما يجب اتخاذه من اجراءات
                تطويرية او عقابية.
              </li>
              <li>ما يكلف به من اعمال اخرى فى نطاق اختصاصاته.</li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
