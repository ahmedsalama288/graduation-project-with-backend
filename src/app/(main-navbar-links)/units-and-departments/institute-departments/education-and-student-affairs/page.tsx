import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="إدارة شئون التعليم والطلاب" />
      <div className=" px-2 sm:px-0">
        <PageContentContainer>
          <ContentWrapper className=" mt-0">
            <ContentHeader text="مهام مدير شئون الطلاب" />
            <ContentContainer>
              <ul className=" list-disc pr-4">
                <li>
                  عمل شاغل هذه الوظيفة تحت التوجيه العام لوكيل المعهد لشئون
                  التعليم والطلاب فنيا ولأمين المعهد إداريا.
                </li>
                <li>
                  وضع الخطط والبرامج التنفيذية لشئون التسجيل والدراسة
                  والامتحانات والخريجين ومتابعة تنفيذها.
                </li>
                <li>
                  الاشراف علي قيد الطلاب الجدد وفقا للإخطارات الواردة من مكتب
                  التنسيق ونتائج الامتحانات بالمعهد.
                </li>
                <li>
                  مراقبة تنفيذ اللوائح والقوانين وتفسير ما قد يحتاج الي تفسير.
                </li>
                <li>
                  الاشراف علي اجراءات الكشف الطبي للطلبة الجدد والتجنيد وسداد
                  الرسوم والتأشير بها في السجلات.
                </li>
                <li>
                  الاشتراك في وضع خطة التدريب الصيفي للطلاب سواء داخل المعهد أو
                  خارجه.
                </li>
                <li>
                  إعداد كافة المعلومات والبيانات الإحصائية الخاصة بالطلاب
                  وإبلاغها لشئون التعليم بالمعهد.
                </li>
                <li>
                  تدبير الامكانات البشرية (ملاحظين ومراقبين) لامتحانات المعهد.
                </li>
                <li>
                  تنمية علاقات طيبة مع ادارات شئون الطلاب بالمعاهد الأخرى.
                </li>
                <li>
                  القيام بما يسند إليه من أعمال مع رفع تقارير عن سير العمل لوكيل
                  المعهد لشئون الطلاب.
                </li>
                <li>
                  إستقبال الطلاب الجدد بالفرقة الاولى واستكمال أوراقهم بعد
                  موافقة مكتب التنسيق وقبول ترشيح الطلاب المحولين .
                </li>
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </PageContentContainer>
      </div>
    </section>
  );
}
