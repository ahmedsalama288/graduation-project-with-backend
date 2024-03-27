import AnimatedSection from "../shared-ui/pages-components/animated-section";
import ContentContainer from "../shared-ui/pages-components/content-container";
import ContentHeader from "../shared-ui/pages-components/content-header";
import ContentWrapper from "../shared-ui/pages-components/content-wrapper";
import PageContentContainer from "../shared-ui/pages-components/page-content-container";

export default function BriefAboutUs() {
  return (
    <section className=" px-2">
      <AnimatedSection>
        <PageContentContainer>
          <ContentWrapper>
            <ContentHeader text="معهد الدلتا العالي" />
            <ContentContainer>
              <div>
                <p>
                  يهدف معهد الدلتا العالي إلى إتاحة الفرصة للطلاب للحصول على
                  نوعية ممتازة وجادة ومتطورة من دراسات علوم الحاسبات وتكنولوجيا
                  إدارة المعلومات على أيدي نخبة متميزة من أعضاء هيئة التدريس من
                  الجامعات المصرية وعلى أحدث الأجهزة التعليمية المتطورة.
                </p>
              </div>
            </ContentContainer>

            <ContentContainer>
              <ul className=" list-disc pr-4">
                <li>
                  المساهمة في إعداد وتنمية الكوادر الفنية المتخصصة في فروع
                  الدراسة بالمعهد.
                </li>
                <li>
                  تنمية القدرات والمهارات للقيادات المتخصصة فى الممارسة العلمية
                  والعملية.
                </li>
                <li>تنمية البحث العلمي والعمل على إتاحة الفرص وحل المشكلات.</li>
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </PageContentContainer>
      </AnimatedSection>
    </section>
  );
}
