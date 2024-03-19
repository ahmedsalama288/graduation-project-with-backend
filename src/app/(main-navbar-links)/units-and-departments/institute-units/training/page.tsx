import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="وحدة التدريب" />
      <div className=" px-2 sm:px-0">
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="مهام رئيس لجنة التدريب" />
            <ContentContainer>
              <ul className=" list-disc pr-4">
                <li>
                  تحديد الإحتياجات التدريبية للموارد البشرية بالمعهد عن طريق
                  استبيانات.
                </li>
                <li>
                  وضع خطط تدريب لكافة الموارد البشرية مرتبطة بالإحتياجات
                  التدريبية.
                </li>
                <li>
                  متابعة تنفيذ خطة التدريب وتوفير الدعم اللوجيستي لتنفيذ الدورات
                  داخل وخارج المعهد.
                </li>
                <li>تقييم التدريب وورش العمل بناء على نتائج الاستبيانات .</li>
                <li>وضع آلية لقياس أثر ومردود التدريب.</li>
                <li>
                  عمل بيانات احصائية وتقرير دوري عما تنفيذه من الخطط التدريبية.
                </li>
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </PageContentContainer>
      </div>
    </section>
  );
}
