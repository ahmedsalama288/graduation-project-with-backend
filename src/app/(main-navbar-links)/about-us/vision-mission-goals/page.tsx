import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="الرؤية - الرسالة - الاهداف" />
      <PageContentContainer>
        <div>
          <ContentWrapper>
            <ContentHeader text="روية المعهد" />
            <ContentContainer>
              <div>
                <p>
                  أن يكون معهدا رائدا محليا واقليميا له برامج تعليمية متميزة من
                  خلال الشراكات البحثية والخدمة المجتمعية ونسعى ليكون معهدنا
                  منارة للتميز في مجال علوم المحاسبة ونظم المعلومات الإدارية،
                  ونُقدم برامج تعليمية متقدمة تُواكب أحدث التطورات العالمية،
                  ونُعدّ طلابنا ليصبحوا خبراء في هذا المجال، ونُساهم في تنمية
                  الاقتصاد الوطني ودعم مسيرة التحول الرقمي في مصر.{" "}
                </p>
              </div>
            </ContentContainer>
          </ContentWrapper>
        </div>

        <div>
          <ContentWrapper className="mt-5">
            <ContentHeader text="رسالة المعهد" />
            <ContentContainer>
              <div>
                <p>
                  يلتزم معهد الدلتا العالي لنظم المعلومات الادارية والمحاسبية
                  بأعداد خريج متميز يواكب ديناميكية سوق العمل من خلال توفر بيئة
                  تعليمية جاذبه، وانتاج أبحاث علمية تساهم في حل مشاكل المجتمع
                  وتنمية البيئة محليه مع الالتزام بأخلاقيات المهنة.{" "}
                </p>
                <p>
                  وأيضا نؤمن في معهدنا بأهمية نظم المعلومات الإدارية والمحاسبية
                  في تحقيق النجاح والتميز للمنظمات في مختلف المجالات.{" "}
                </p>
              </div>
            </ContentContainer>
          </ContentWrapper>
        </div>

        <div>
          <ContentWrapper className="mt-5">
            <ContentHeader text="نسعى من خلال برامجنا التعليمية المتقدمة إلى إعداد طلاب متميزين قادرين على" />
            <ContentContainer>
              <ul className=" list-disc pr-5">
                <li>فهم وتحليل احتياجات المنظمات من المعلومات. </li>
                <li>
                  تصميم وتطوير وتنفيذ نظم المعلومات الإدارية والمحاسبية بكفاءة
                  وفعالية.{" "}
                </li>
                <li>
                  استخدام تقنيات المعلومات الحديثة لتحسين الأداء الإداري والمالي
                  للمنظمات.{" "}
                </li>
                <li>
                  اتخاذ القرارات الإدارية السليمة بناءً على المعلومات الدقيقة.
                </li>
                <li>المساهمة في تحقيق التنمية المستدامة للمنظمات والمجتمع. </li>
              </ul>
            </ContentContainer>
          </ContentWrapper>
        </div>

        <div>
          <ContentWrapper className="mt-5">
            <ContentContainer>
              <p>
                ونلتزم بتقديم برامج تعليمية عالية الجودة تُلبي احتياجات سوق
                العمل، وتُواكب أحدث التطورات العالمية في مجال نظم المعلومات
                الإدارية والمحاسبية وندعم طلابنا من خلال بيئة تعليمية تفاعلية
                تُشجع على الابتكار والإبداع، ونُقدم لهم فرصًا للتدريب العملي
                واكتساب الخبرات العملية وأيضا نُؤمن بأهمية الشراكة مع المؤسسات
                الرائدة في مجال نظم المعلومات الإدارية والمحاسبية، ونُسعى إلى
                تبادل الخبرات والمعرفة مع هذه المؤسسات لتطوير برامجنا التعليمية
                وتحسينها ونسعى أيضا من خلال رسالتنا إلى أن نكون مركزًا للتميز في
                مجال نظم المعلومات الإدارية والمحاسبية، وأن نُساهم في بناء
                مستقبل أفضل للمنظمات والمجتمع.
              </p>
            </ContentContainer>
          </ContentWrapper>
        </div>
      </PageContentContainer>
    </section>
  );
}
