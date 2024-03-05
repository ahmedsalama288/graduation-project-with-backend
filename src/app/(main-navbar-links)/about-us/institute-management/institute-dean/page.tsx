import MainPageHeader from "@/app/ui/shared-ui/pages-components/main-page-header";
import imageSrc from "@/../../public/about-us/institute-management-images/institute-dean.jpg";
import MemberPhoto from "@/app/ui/about-us/institute-management/member-photo";
import MemberName from "@/app/ui/about-us/institute-management/member-name";
import PageContentContainer from "@/app/ui/shared-ui/pages-components/page-content-container";
import ContentContainer from "@/app/ui/shared-ui/pages-components/content-container";
import ContentWrapper from "@/app/ui/shared-ui/pages-components/content-wrapper";
import ContentHeader from "@/app/ui/shared-ui/pages-components/content-header";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="عميد المعهد" />
      <div className="p-2">
        <PageContentContainer>
          <MemberPhoto imageSrc={imageSrc} alt="رئيس مجلس الإدارة" />
          <MemberName memberName="كلمة السيد الدكتور أحمد أبو الفتوح" />
          <ContentWrapper>
            <ContentHeader text="أبنائي الطلاب" />
            <ContentContainer>
              <p>
                لقد وفقنا الله الي تأسيس جمعية أكاديمية الدلتا للعلوم بهدف أثر
                للنهضة الفكرية والثقافية في إقليم الدلتا وكان معهد الدلتا العالي
                لنظم المعلومات الإدارية والمحاسبية بمدينة المنصورة باكورة
                مساهماتنا التعليمية لنقدم نموذجا رائدا ومتميزا للتعليم العالي
                الخاص الذي يضع نصب عينيه التميز التعليمي والثقافي وغرس روح
                الفريق والمواطنة لتخريج شباب مسلحين علميا ومهن ي وأخلاقيا
                للمشاركة الفعالة في بناء الوطن ومجلس الادارة منذ نشأته ودوما
                نحرص على توفر كافة الميزانيات لخلق بيئة تعليم متميزة مدعمة بأحدث
                تقنيات وأساليب للتعليم والتدريب من قاعات دراسية ومرافق وبنية
                معلوماتية مميزة من شبكات الحاسب والإنترنت والمعامل كما اولينا
                الانشطة الطالبية والمشاركات الفاعلة على مستوي المجتمع المحلي
                اولوية كبرة وحرصنا على عمل شراكات محلية ودوليا لفتح أفاق جديدة
                لتطوير التعليم ومسارات لطالبنا وخريجينا للعمل وصقل مهاراتهم
                وندعم ونرعي تنظيم الندوات والمؤتمرات ودعمها ماليا وها هو الحلم
                يتحقق ونجد معاهد الدلتا العليا في مقدمة المعاهد المتميزة
                بالتعليم العالي ونسعد ونحن نري ونقابل خريجينا وهم يشغلون مناصب
                مرموقة في العديد من المؤسسات محليا واقليميا ودوليا ونسأل الله أن
                يعين مجلس الادارة الي المزيد والمزيد من الدعم للوصول الي المكانة
                المرموقة الي يستحقها معهد الدلتا العالي لنظم المعلومات الإدارية
                والمحاسبية.
              </p>
            </ContentContainer>
          </ContentWrapper>
        </PageContentContainer>
      </div>
    </section>
  );
}
