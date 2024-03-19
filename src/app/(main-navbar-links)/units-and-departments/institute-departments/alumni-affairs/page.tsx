import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="إدارة شئون الخريجين" />
      <div className=" px-2 sm:px-0">
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="مهام مدير شئون الخريجين" />
            <ContentContainer>
              <ul className=" list-disc pr-4">
                <li>اعداد نموذج بيانات الخريج ( استمارات بيانات خريج ).</li>
                <li>
                  اعداد ملفات خاصة بالخريجين والاشراف على توزيع الاستبيانات
                  المتعلقة بالخريجين وتحليلها واعداد التقارير .
                </li>
                <li>
                  عمل قاعدة بيانات لمتابعه الخريجين ووضعها على البوابة
                  الالكترونية الخاصة بالمعهد.
                </li>
                <li>
                  عقد لقاءات مع طلاب الفرقة النهائية بالمعهد لتوضيح اهمية ربط
                  الخريجين بالمعهد بسوق العمل وتعريفهم بالجهوذ المبذولة فى
                  المعهد.
                </li>
                <li>الاتصال بأصحاب العمل ومدى توفيرهم وظائف لخريجى المعهد.</li>
                <li>
                  عقد ملتقى توظيف الخريجين الدورى الذى ينظمه المعهد مع اصحاب
                  الاعمال.
                </li>
                <li>تطبيق معايير ومتطلبات الجودة.</li>
                <li>
                  اتخاذ إجراءات اعتماد القرارات الخاصة بمنح الخريجين الدرجات
                  العلمية واجراءات اخلاء طرفهم وتسليم اوراقهم.
                </li>
                <li>
                  التعاون مع كافة الادارات والاقسام بالمعهد وخاصة ادارة شئون
                  التعليم والطلاب.
                </li>
                <li>الاشراف على اصدار شهادات التخرج للخريجين.</li>
                <li>متابعة الاتصال بالخريجين ومتابعتهم فى سوق العمل.</li>
                <li>اعداد تقارير دورية عن اداء العاملين بالادارة .</li>
                <li>
                  الاشراف على صفحات التواصل مع الخريجين على مواقع التواصل
                  الاجتماعى.
                </li>
                <li>اى مهام اخرى توكل اليه.</li>
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </PageContentContainer>
      </div>
    </section>
  );
}
