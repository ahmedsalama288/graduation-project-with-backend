import MainPageHeader from "@/app/ui/main-page/main-page-header";
import Image from "next/image";
import imageSrc from "@/../../public/about-us/institute-management-images/chairman-of-board-of-directors.jpeg";
import MemberPhoto from "@/app/ui/about-us/institute-management/member-photo";
import MemberName from "@/app/ui/about-us/institute-management/member-name";
import MemberWord from "@/app/ui/about-us/institute-management/member-word";

export default function Page() {
  return (
    <section>
      <MainPageHeader text="رئيس مجلس الإدارة" />
      <div className="p-2">
        <div className=" container mx-auto p-4 sm:p-8 bg-slate-400 mt-8 rounded-lg">
          <MemberPhoto imageSrc={imageSrc} alt="رئيس مجلس الإدارة" />
          <MemberName memberName="كلمة السيد الدكتور محمد ربيع ناصر" />
          <MemberWord
            memberWord="
                  لقد وفقنا الله الي تأسيس جمعية أكاديمية الدلتا للعلوم بهدف أثر
                  للنهضة الفكرية والثقافية في إقليم الدلتا وكان معهد الدلتا
                  العالي لنظم المعلومات الإدارية والمحاسبية بمدينة المنصورة
                  باكورة مساهماتنا التعليمية لنقدم نموذجا رائدا ومتميزا للتعليم
                  العالي الخاص الذي يضع نصب عينيه التميز التعليمي والثقافي وغرس
                  روح الفريق والمواطنة لتخريج شباب مسلحين علميا ومهن ي وأخلاقيا
                  للمشاركة الفعالة في بناء الوطن ومجلس الادارة منذ نشأته ودوما
                  نحرص على توفر كافة الميزانيات لخلق بيئة تعليم متميزة مدعمة
                  بأحدث تقنيات وأساليب للتعليم والتدريب من قاعات دراسية ومرافق
                  وبنية معلوماتية مميزة من شبكات الحاسب والإنترنت والمعامل كما
                  اولينا الانشطة الطالبية والمشاركات الفاعلة على مستوي المجتمع
                  المحلي اولوية كبرة وحرصنا على عمل شراكات محلية ودوليا لفتح
                  أفاق جديدة لتطوير التعليم ومسارات لطالبنا وخريجينا للعمل وصقل
                  مهاراتهم وندعم ونرعي تنظيم الندوات والمؤتمرات ودعمها ماليا وها
                  هو الحلم يتحقق ونجد معاهد الدلتا العليا في مقدمة المعاهد
                  المتميزة بالتعليم العالي ونسعد ونحن نري ونقابل خريجينا وهم
                  يشغلون مناصب مرموقة في العديد من المؤسسات محليا واقليميا
                  ودوليا ونسأل الله أن يعين مجلس الادارة الي المزيد والمزيد من
                  الدعم للوصول الي المكانة المرموقة الي يستحقها معهد الدلتا
                  العالي لنظم المعلومات الإدارية والمحاسبية."
          />
        </div>
      </div>
    </section>
  );
}
