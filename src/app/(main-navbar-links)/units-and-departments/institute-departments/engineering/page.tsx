import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="الإدارة الهندسية" />
      <div className=" px-2 sm:px-0">
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="مهام مدير الشئون الهندسية" />
            <ContentContainer>
              {/* list-disc pr-4 */}
              <ul className="list-disc pr-4">
                <li>تطبيق معايير ومتطلبات الجودة.</li>
                <li>
                  الاشراف على الحالة الفنية للمبانى والمرافق اثناء العمل وبعد
                  انتهائة.
                </li>
                <li>اعداد ومتابعة تنفيذ خطة الصيانة السنوية بعد اعتمادها.</li>
                <li>عمل كافة المقايسات الخاصة باحتياجات اعمال الصيانة.</li>
                <li>متابعة تنفيذ عقود الصيانة الموقعه مع الشركات المتخصصة.</li>
                <li>الاحتفاظ بالرسم الهندسى للمقرات واستخدامها عند الحاجه.</li>
                <li>
                  الاشراف على المراجعة الدائمة لوسائل الامان والامن الصناعى
                  وطفايات الحرائق وخراطيم المياه واغلاق المداخل والمخارج بصفة
                  دورية واعداد التقارير الدورية عن نشاط الادارة الهندسية.
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
