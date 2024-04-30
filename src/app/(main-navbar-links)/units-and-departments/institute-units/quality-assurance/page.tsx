import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="وحدة ضمان الجودة" />
      <PageContentContainer>
        <ContentWrapper>
          <ContentHeader text="مهام وحدة ضمان الجودة" />
          <ContentContainer>
            <p>
              تعمل وحدة ضمان الجودة على تطوير إجراءات العمل وتقديم الدعم الفني
              لوحدات ضمان الجودة بالمعهد وفقاً لمعايير الهيئة القومية لضمان جودة
              التعليم والإعتماد ، وبما يحقق مستوى عالى من رضاء محتلف الأطراف ذات
              الصلة.
            </p>
          </ContentContainer>
        </ContentWrapper>

        <ContentWrapper className=" mt-5 sm:mt-6">
          <ContentHeader text="مهام مدير وحدة ضمان الجودة" />
          <ContentContainer>
            <ul className=" list-disc pr-4">
              <li>
                متابعة أداء العمل بالوحدة واتخاذ الإجراءات اللازمة لانتظامه
                وانضباطه مع وضع آليات للتقويم الداخلي والخارجي.
              </li>
              <li>
                الاجتماع دوريا بجميع أعضاء الوحدة (هيئة التدريس + الإداريين).
              </li>
              <li> الإشراف الفني والإداري علي العاملين بالوحدة.</li>
              <li>
                متابعة أداء العمل بالوحدة واتخاذ الإجراءات اللازمة لانتظامه .
              </li>
              <li>مراجعة التقارير الدورية لمنسقي ضمان الجودة بأقسام المعهد.</li>
              <li>
                تطبيق نظم ضمان الجودة والانشطة الاكاديمية والبحثية والخدمية وفق
                معايير الاعتماد.
              </li>
              <li>
                الاختصاصات الأخرى التي يفوضه فيها مجلس إدارة الوحدة أو رئيسه.
              </li>
            </ul>
          </ContentContainer>
        </ContentWrapper>
      </PageContentContainer>
    </section>
  );
}
