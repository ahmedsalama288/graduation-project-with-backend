var mainPage = {
    name: "main-page",
    briefAboutUsSection: {
        paragraph: "يهدف معهد الدلتا العالي إلى إتاحة الفرصة للطلاب للحصول على نوعية ممتازة وجادة ومتطورة من دراسات علوم الحاسبات وتكنولوجيا إدارة المعلومات على أيدي نخبة متميزة من أعضاء هيئة التدريس من الجامعات المصرية وعلى أحدث الأجهزة التعليمية المتطورة.",
        instituteGoals: [
            "المساهمة في إعداد وتنمية الكوادر الفنية المتخصصة في فروع الدراسة بالمعهد.",
            "تنمية القدرات والمهارات للقيادات المتخصصة فى الممارسة العلمية والعملية.",
            "تنمية البحث العلمي والعمل على إتاحة الفرص وحل المشكلات.",
        ],
    },
    studentsNumbersSection: {
        currentStudents: 5769,
        graduatedStudents: 10609,
    },
    commonQuestionsSection: [
        {
            questionName: "ما الدرجة العلمية التي يمنحها المعهد؟",
            questionAnswer: [
                "يمنح المعهد بكالوريوس في نظم المعلومات الإدارية (شعبة نظم).",
                "يمنح بكالوريوس في المحاسبة والمراجعة (شعبة المحاسبة).",
                "معتمد من المجلس الأعلى للجامعات ووزارة التعليم العالي ومنها تقدر تسجل في نقابة التجاريين.",
            ],
        },
        {
            questionName: "شروط القبول بالمعهد؟",
            questionAnswer: [
                "قبول الطالب الحاصلين على الثانوية العامة بشعبتيها الأدبية والعلمية.",
                "قبول الطالب الحاصلين على الشهادات المعادلة لثانوية العامة عربي وأجنبي.",
                "قبول الطالب الحاصلين على الثانوية التجارية نظام 3و5 سنوات.",
                "قبول الطالب الحاصلين على الثانوية الفنية للإدارة والخدمات.",
            ],
        },
        {
            questionName: "ما هو الحد الأدنى للقبول في المعهد؟",
            questionAnswer: [
                "الشعبة العلمية: 52.68%",
                "الشعبة الأدبية: 54.26%",
                "ثانوي صناعي 3 سنوات: 83.85%",
                "ثانوي صناعي 5 سنوات: 60%",
                "ثانوي تجاري 3 سنوات: 72.93%",
                "ثانوي تجاري 5 سنوات: 72.20%",
            ],
        },
        {
            questionName: "ما هي الأوراق المطلوبة للتقديم في المعهد؟",
            questionAnswer: [
                "أصل المؤهل.",
                "بطاقة الترشيح.",
                "أصل شهادة الميلاد.",
                "صورة البطاقة الشخصية.",
                "بطاقة 2 جند (للذكور فقط).",
                "بطاقة 6 جند (للذكور فقط).",
                "عدد 6 صور شخصيه (4 * 6).",
            ],
        },
    ],
};
console.log(JSON.stringify(mainPage));