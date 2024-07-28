import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "نشأة المعهد",
};

export default function Page() {
  return (
    <section>
      <MainPageHeader text="نشأة المعهد" />
      <PageContentContainer>
        <div>
          <ContentWrapper>
            <ContentHeader text="نشأة المعهد" />
            <ContentContainer>
              <p>
                تأسس معهد الدلتا العالي لنظم المعلومات الإدارية والمحاسبية
                بالمنصورة عام 2000 بموجب القرار الوزاري رقم 1200 الصادر بتاريخ
                11 يونيو 2000 وكان الهدف من إنشاء المعهد هو تلبية احتياجات سوق
                العمل المتزايدة من الكوادر المتخصصة في مجال نظم المعلومات
                الإدارية والمحاسبية.
              </p>
            </ContentContainer>
          </ContentWrapper>
        </div>

        <div>
          <ContentWrapper className="mt-5">
            <ContentHeader text="بدأ المعهد الدراسة في العام الدراسي 2000/2001 بقسمين هما" />
            <ContentContainer>
              <ul className=" list-disc pr-4">
                <li>برنامج البكالوريوس في نظم المعلومات الإدارية.</li>
                <li>برنامج البكالوريوس في المحاسبة.</li>
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </div>

        <div>
          <ContentWrapper className="mt-5">
            <ContentContainer>
              <ul className=" list-disc pr-4">
                <li>
                  يُعدّ معهد الدلتا العالي لنظم المعلومات الإدارية والمحاسبية
                  بالمنصورة من أهم المعاهد المتخصصة في هذا المجال في مصر ويقدم
                  ايضا المعهد برامج تعليمية عالية الجودة تُلبي احتياجات سوق
                  العمل، ويُشرف على التدريس فيه أعضاء هيئة تدريس ذوي خبرة واسعة
                  في مجال نظم المعلومات الإدارية والمحاسبية.{" "}
                </li>
                <li>
                  يتخرج من المعهد سنويًا دفعة جديدة من الخريجين الذين يُصبحون
                  على الفور مطلوبين في سوق العمل ويُساهم أيضا المعهد بشكل كبير
                  في تنمية الاقتصاد الوطني ودعم مسيرة التحول الرقمي في مصر.
                </li>
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </div>
      </PageContentContainer>
    </section>
  );
}
