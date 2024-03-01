export default function QuestionsList() {
  // p-4 sm:p-8
  return (
    <ul
      className=" 
     mt-6 
      rounded-lg flex flex-col justify-between gap-y-10 flex-wrap
    "
    >
      <li className=" bg-slate-400 p-3  sm:p-6 rounded-lg w-full max-w-full">
        <div className=" mb-4">
          <p className=" text-lg sm:text-xl font-semibold bg-slate-500 w-fit p-4 rounded-lg">
            ما الدرجة العلمية التي يمنحها المعهد؟
          </p>
        </div>
        <div className="  bg-slate-500 rounded-lg text-base sm:text-lg">
          <ul className="flex flex-col p-4 pr-8 gap-2 leading-[2] list-disc">
            <li>يمنح المعهد بكالوريوس في نظم المعلومات الإدارية (شعبة نظم).</li>
            <li>يمنح بكالوريوس في المحاسبة والمراجعة (شعبة المحاسبة).</li>
            <li>
              معتمد من المجلس الأعلى للجامعات ووزارة التعليم العالي ومنها تقدر
              تسجل في نقابة التجاريين.
            </li>
          </ul>
        </div>
      </li>

      <li className=" bg-slate-400 p-3   sm:p-6 rounded-lg  w-full max-w-full">
        <div className=" mb-4">
          <p className=" text-lg sm:text-xl font-semibold bg-slate-500 w-fit p-4 rounded-lg">
            شروط القبول بالمعهد؟
          </p>
        </div>
        <div className="  bg-slate-500 rounded-lg text-base sm:text-lg">
          <ul className="flex flex-col p-4 pr-8 gap-2 leading-[2] list-disc">
            <li>
              قبول الطالب الحاصلين على الثانوية العامة بشعبتيها الأدبية
              والعلمية.
            </li>
            <li>
              قبول الطالب الحاصلين على الشهادات المعادلة لثانوية العامة عربي
              وأجنبي.
            </li>
            <li>قبول الطالب الحاصلين على الثانوية التجارية نظام 3و5 سنوات.</li>
            <li>قبول الطالب الحاصلين على الثانوية الفنية للإدارة والخدمات.</li>
          </ul>
        </div>
      </li>

      <li className=" bg-slate-400 p-3  sm:p-6 rounded-lg w-full max-w-full">
        <div className=" mb-4">
          <p className=" text-lg sm:text-xl font-semibold bg-slate-500 w-fit p-4 rounded-lg">
            ما هو الحد الأدنى للقبول في المعهد؟
          </p>
        </div>
        <div className="  bg-slate-500 rounded-lg text-base sm:text-lg">
          <ul className="flex flex-col p-4 pr-8 gap-2 leading-[2] list-disc">
            <li>الشعبة العلمية: 52.68%</li>
            <li>الشعبة الأدبية: 54.26% </li>
            <li>ثانوي صناعي 3 سنوات: 83.85%</li>
            <li>ثانوي صناعي 5 سنوات: 60%</li>
            <li>ثانوي تجاري 3 سنوات: 72.93%</li>
            <li>ثانوي تجاري 5 سنوات: 72.20%</li>
          </ul>
        </div>
      </li>

      <li className=" bg-slate-400 p-3  sm:p-6 rounded-lg w-full max-w-full">
        <div className=" mb-4">
          <p className=" text-lg sm:text-xl font-semibold bg-slate-500 w-fit p-4 rounded-lg">
            ما هي الأوراق المطلوبة للتقديم في المعهد؟
          </p>
        </div>
        <div className="  bg-slate-500 rounded-lg text-base sm:text-lg">
          <ul className="flex flex-col p-4 pr-8 gap-2 leading-[2] list-disc">
            <li>أصل المؤهل.</li>
            <li>بطاقة الترشيح.</li>
            <li>أصل شهادة الميلاد.</li>
            <li>صورة البطاقة الشخصية.</li>
            <li>بطاقة 2 جند (للذكور فقط).</li>
            <li>بطاقة 6 جند (للذكور فقط).</li>
            <li>عدد 6 صور شخصيه (4 * 6).</li>
          </ul>
        </div>
      </li>
    </ul>
  );
}
