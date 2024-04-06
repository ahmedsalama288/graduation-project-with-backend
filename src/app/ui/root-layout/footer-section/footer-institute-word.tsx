import AnimatedSection from "../../shared-ui/pages-components/animated-section";

export default function FooterInstituteWord() {
  return (
    <div className="w-full lg:mt-0 lg:w-1/2">
      <AnimatedSection
        startPosition="-translate-x-14 opacity-0"
        endPosition="translate-x-0 opacity-100"
      >
        <div className="mb-7 font-semibold text-xl">
          <h3 className=" leading-[1.7]">معهد الدلتا العالي</h3>
        </div>
        <div className="w-full">
          <p className="rounded-lg p-4 bg-[#014e79] leading-[2] flex flex-col">
            <span>
              يهدف معهد الدلتا العالي لنظم المعلومات الإدارية والمحاسبية الي
              اعداد طالب متميز قادرين على مواكبة تحديات وصعوبات سوق العمل وذلك
              من خلال توفير أفضل السبل العلمية والتعليمية التي يتم تدريسها على
              ايدي نخبة من أعضاء هيئة التدريس المتميز وباستخدام أحدث الطرق
              التعلمية المتطورة.
            </span>
            <span>
              وتعمل أيضا على تنمية واعداد كوادر فنية متخصصة في فروع العلوم
              المحاسبية والمعلوماتية وتنمية البحث العلمي والعمل على اتاحة الفرص
              وحل المشكلات المتعلقة بالبيئة. وقد تم تأسيس المعهد بموجب القرار
              الوزاري رقم 1200 لسنة 2000.
            </span>
          </p>
        </div>
      </AnimatedSection>
    </div>
  );
}
