import {
  AcademicLeadersInfo,
  InstituteFloorsStructure,
  NavbarLinks,
} from "./definitions";

import {
  drMansourImageSrc,
  drAbdelwahabImageSrc,
  drHazemImageSrc,
  mrEhabImageSrc,
  drAlbrashyImageSrc,
  drIsalmImageSrc,
  drAbdesalam,
  personImage,
} from "@/app/assets/dr-images";

import {
  // Floor 1
  floorOneImage,
  amphitheaterOneMainImage,
  amphitheaterOneDoorImage,

  // Floor 2
  floorTwoImage,
  amphitheaterTwoMainImage,
  amphitheaterTwoDoorImage,

  // Floor 3
  floorThreeImage,
  amphitheaterThreeDoorImage,
  amphitheaterThreeMainImage,

  // Floor 4
  floorFourImage,
  amphitheaterFourDoorImage,
  amphitheaterFourMainImage,

  // Floor 5
  floorFiveImage,
  amphitheaterFiveDoorImage,
  amphitheaterFiveMainImage,

  // Floor 6
  floorSixImage,
  amphitheaterSixADoorImage,
  amphitheaterSixAMainImage,
  amphitheaterSixBDoorImage,
  amphitheaterSixBMainImage,
} from "@/app/assets/institute-floors-amphitheater-images";

export const navbarLinks: NavbarLinks = [
  {
    name: "عن المعهد",
    href: "/about-us",
    nestedLinks: [
      {
        name: "إدارة المعهد",
        href: "",
        nestedLinks: [
          {
            name: "رئيس مجلس الإدارة",
            href: "/about-us/institute-management/chairman-of-board-of-directors",
          },
          {
            name: "عميد المعهد",
            href: "/about-us/institute-management/institute-dean",
          },
        ],
      },

      { name: "نشاة المعهد", href: "/about-us/establishment-of-the-Institute" },
      {
        name: "الرؤية - الرسالة - الاهداف",
        href: "/about-us/vision-mission-goals",
      },
      {
        name: "القيادات الاكاديمية والادارية",
        href: "/about-us/academic-and-administrative-leaders",
      },
      {
        name: "الهيكل التنظيمي",
        href: "/about-us/organizational-chart",
      },
      {
        name: "اللائحة",
        href: "/about-us/institute-regulations",
      },
    ],
  },
  {
    name: "خدمات الطلاب",
    href: "/student-services",
    nestedLinks: [
      {
        name: "الجداول الدراسية",
        href: "/student-services/class-schedules",
      },
      {
        name: "المقررات الدراسية",
        href: "/student-services/courses",
      },
      {
        name: "الجداول الإمتحانات",
        href: "/student-services/exam-schedules",
      },
      {
        name: "بحث عن مدرج او سكشن",
        href: "/student-services/search-for-amphitheater-or-section",
      },
      { name: "شكاوى الطلاب", href: "/student-services/complaints" },
      { name: "بوابة الطالب", href: "https://dhic.ddns.net/ch/signin.php" },
      {
        name: "معرفة النتيجة",
        href: "https://dhic.ddns.net/ch/student_info.php",
      },
      { name: "تحميل الكتب", href: "https://dhic.ddns.net/ch/mycourses.php" },
    ],
  },
  {
    name: "الحياه الاكاديمية",
    href: "/academic-life",
    nestedLinks: [
      {
        name: "قسم نظم المعلومات الإدارية",
        href: "/academic-life/department-of-management-information-systems",
      },
      {
        name: "قسم المحاسبة ",
        href: "/academic-life/department-of-accounting",
      },
      { name: "علوم أساسيه", href: "/academic-life/basic-sciences" },
    ],
  },
  {
    name: "وحدات و إدارات",
    href: "/units-and-departments",
    nestedLinks: [
      {
        name: "وحدات المعهد",
        href: "",
        nestedLinks: [
          {
            name: "وحدة تكنولوجيا المعلومات",
            href: "/units-and-departments/institute-units/information-technology",
          },
          {
            name: "وحدة ضمان الجودة",
            href: "/units-and-departments/institute-units/quality-assurance",
          },
          {
            name: "وحدة التدريب",
            href: "/units-and-departments/institute-units/training",
          },
        ],
      },
      {
        name: "إدارات المعهد",
        href: "",
        nestedLinks: [
          {
            name: "إدارة شئون التعليم والطلاب",
            href: "/units-and-departments/institute-departments/education-and-student-affairs",
          },
          {
            name: "إدارة شئون الخريجين",
            href: "/units-and-departments/institute-departments/alumni-affairs",
          },
          {
            name: "إدارة شئون العاملين",
            href: "/units-and-departments/institute-departments/personnel-affairs",
          },
          {
            name: "الإدارة المالية",
            href: "/units-and-departments/institute-departments/financial",
          },
          {
            name: "الإدارة الهندسية",
            href: "/units-and-departments/institute-departments/engineering",
          },
          {
            name: "إدارة المشتريات والمخازن",
            href: "/units-and-departments/institute-departments/purchasing-and-warehouse",
          },
          {
            name: "إدارة رعاية الشباب",
            href: "/units-and-departments/institute-departments/youth-care",
          },
          {
            name: "العيادة الطبية",
            href: "/units-and-departments/institute-departments/medical-clinic",
          },
          {
            name: "المكتبة",
            href: "/units-and-departments/institute-departments/library",
          },
          {
            name: "إدارة الأمن",
            href: "/units-and-departments/institute-departments/security",
          },
        ],
      },
    ],
  },
  {
    name: "قطاعات المعهد",
    href: "/institute-sectors",
    nestedLinks: [
      {
        name: "قطاع شئون الطلاب",
        href: "",
        nestedLinks: [
          {
            name: "قواعد هامه للطلاب",
            href: "/institute-sectors/student-affairs/important-rules-for-students",
          },
        ],
      },
      {
        name: "قطاع شئون الخريجين",
        href: "",
        nestedLinks: [
          {
            name: "لجنة متابعة الخريجين",
            href: "/institute-sectors/graduate-affairs/follow-up-committee",
          },
          {
            name: "رابطة الخريجين",
            href: "https://www.facebook.com/groups/641981626325885/?ref=share&mibextid=F3zKvj",
          },
        ],
      },
    ],
  },
  {
    name: "البحث العلمي",
    href: "",
    nestedLinks: [
      { name: "المجلة العلمية", href: "https://djicsi.journals.ekb.eg/" },
      {
        name: "قاعدة بيانات البحث العلمي",
        href: "/pdf/scientific-research.pdf",
      },
    ],
  },
  {
    name: "بوابة أعضاء هيئة التدريس",
    href: "https://dhic.ddns.net/ch/signin.php",
    nestedLinks: [],
  },
  { name: "تواصل معنا", href: "/contact-us", nestedLinks: [] },
];

export const ignoredLinks: string[] = [
  "/about-us",
  "/student-services",
  "/academic-life",
  "/units-and-departments",
  "/institute-sectors",
];

export const dutiesOfDepartmentHead = [
  "مناقشة العميد التقسيمات الخاصة بالجداول والامتحانات وما يترتب عليها من تجهيزات.",
  "اكساب الخبرة لجميع الاعضاء من خلال اللقاءات الدورية.",
  "الاشراف على تنفيذ القرارات التنفيذية والتأكد من سلامة اجراءات التنفيذ.",
  "اعداد خطة سنوية باحتياجات القسم من السادة أعضاء هيئة التدريس والهيئة المعاونة.",
  "تلقى مقترحات القسم فى شأن جودة التعليم ودراستها .",
  "اقتراح تعيين المدرسين المساعدين والمعيدين.",
  "اقتراح تعيين المدرسين المساعدين والمعيدين.",
  "اقتراح تعيين اعضاء هيئة التدريس وندبهم.",
];

export const academicLeadersInfo: AcademicLeadersInfo = [
  {
    memberImageSrc: drMansourImageSrc,
    memberImageAlt: "أ.م.د/منصور شطا",
    memberName: "أ.م.د / منصور شطا",
    memberRole: "وكيل البحث العلمي",
  },
  {
    memberImageSrc: drAbdelwahabImageSrc,
    memberImageAlt: "أ.م.د/عبدالوهاب الراعي",
    memberName: "أ.م.د / عبدالوهاب الراعي",
    memberRole: "وكيل شئون البيئة وخدمة المجتمع",
  },
  {
    memberImageSrc: drIsalmImageSrc,
    memberImageAlt: "أ.م.د/محمد الشربيني إسلام",
    memberName: "أ.م.د / محمد الشربيني إسلام",
    memberRole: "رئيس قسم المحاسبة",
  },
  {
    memberImageSrc: drHazemImageSrc,
    memberImageAlt: "أ.د/حازم عطوه",
    memberName: "أ.د / حازم عطوه",
    memberRole: "وكيل شئون التعليم والطلاب",
  },
  {
    memberImageSrc: mrEhabImageSrc,
    memberImageAlt: "أ/إيهاب ناصر",
    memberName: "أ / إيهاب ناصر",
    memberRole: "الأمين العام",
  },

  {
    memberImageSrc: drAlbrashyImageSrc,
    memberImageAlt: "د/أحمد البراشي",
    memberName: "د / أحمد البراشي",
    memberRole: "مدير وحدة ضمان الجودة",
  },
];

export const graduateFollowCommittee: AcademicLeadersInfo = [
  {
    memberImageSrc: drHazemImageSrc,
    memberImageAlt: "أ.د/حازم عطوه",
    memberName: "أ.د / حازم عطوه",
    memberRole: "رئيس لجنة متابعة الخريجين",
  },
  {
    memberImageSrc: drAbdesalam,
    memberImageAlt: "د/عبدالسلام عاصى",
    memberName: "د / عبدالسلام عاصى",
    memberRole: "عضو في لجنة متابعة الخريجين",
  },
  {
    memberImageSrc: drAlbrashyImageSrc,
    memberImageAlt: "د/أحمد البراشي",
    memberName: "د / أحمد البراشي",
    memberRole: "عضو في لجنة متابعة الخريجين",
  },
  {
    memberImageSrc: personImage,
    memberImageAlt: "أ/أحمد صالح",
    memberName: "أ / أحمد صالح",
    memberRole: "عضو في لجنة متابعة الخريجين",
  },
  {
    memberImageSrc: personImage,
    memberImageAlt: "أ/منى أحمد",
    memberName: "أ / منى أحمد",
    memberRole: "عضو في لجنة متابعة الخريجين",
  },
  {
    memberImageSrc: personImage,
    memberImageAlt: "أ/مكرم رضوان",
    memberName: "أ / مكرم رضوان",
    memberRole: "عضو في لجنة متابعة الخريجين",
  },
];

export const instituteFloorsStructure: InstituteFloorsStructure = [
  {
    name: "الدور الاول",
    floorImage: floorOneImage,
    sections: [
      101,
      "الخزينة",
      "شئون الطلاب",
      "مكتب عميد المعهد",
      "مكتب سكرتارية العميد",
      "مكتب رئيس الاكاديمية",
      "مكتب رئيس المجلس التنفيذي",
      "وحدة التدريب",
      "الاستعلامات",
    ],
    amphitheaterList: [
      {
        name: "المدرج 1",
        mainImage: amphitheaterOneMainImage,
        doorImage: amphitheaterOneDoorImage,
      },
    ],
  },
  {
    name: "الدور الثاني",
    floorImage: floorTwoImage,
    sections: [
      207,
      208,
      210,
      "إدارة رعاية الطلاب",
      "الشئون الإدارية والقانونية",
      "إدارة شؤون الخريجين",
      "مكتب الأمين العام",
      "شئون أعضاء هيئة التدريس",
      "المدير المالي",
      "الإدارة المالية",
      "مكتب أعضاء هيئة التدريس (د/ رانيا محمد عبد الغفار – د/ رحاب عادل العراقي)",
      "وكيل المعهد",
    ],
    amphitheaterList: [
      {
        name: "المدرج 2",
        mainImage: amphitheaterTwoMainImage,
        doorImage: amphitheaterTwoDoorImage,
      },
    ],
  },
  {
    name: "الدور الثالث",
    floorImage: floorThreeImage,
    sections: [
      302,
      304,
      307,
      308,
      "الكنترول المركزي",
      "مكتب إدارة تقنية المعلومات IT it",
      "شئون إدارية",
      "مكتب أعضاء هيئة التدريس (أ.م. د/ منصور شطا – د/ أحمد عيد)",
      "مكتب أعضاء هيئة التدريس (د/ محمود البهلول – د/ أحمد الإبراشي)",
      "مكتب أ أعضاء هيئة التدريس (أ.د/ عبد السلام عاصي)",
    ],
    amphitheaterList: [
      {
        name: "المدرج 3",
        mainImage: amphitheaterThreeMainImage,
        doorImage: amphitheaterThreeDoorImage,
      },
    ],
  },
  {
    name: "الدور الرابع",
    floorImage: floorFourImage,
    sections: [
      407,
      408,
      "وحدة ضمان الجودة",
      "المكتبة",
      "مكتب معاوني أعضاء هيئة التدريس",
      "مكتب أعضاء هيئة التدريس (د/ ايمان المشد)",
      "مكتب أعضاء هيئة التدريس (د/ مجدي شرارة – د/ ميسرة فاضل)",
    ],
    amphitheaterList: [
      {
        name: "المدرج 4",
        mainImage: amphitheaterFourMainImage,
        doorImage: amphitheaterFourDoorImage,
      },
    ],
  },
  {
    name: "الدور الخامس",
    floorImage: floorFiveImage,
    sections: [
      501,
      506,
      508,
      510,
      511,
      "مكتب معاوني أعضاء هيئة التدريس",
      "مكتب أعضاء هيئة التدريس (د/ ريهام أنسي – د/ رانيا المرسي)",
      "مكتب أعضاء هيئة التدريس (أ.م. د/ محمد اسلام – د/ أسعد السعدني)",
    ],
    amphitheaterList: [
      {
        name: "المدرج 5",
        mainImage: amphitheaterFiveMainImage,
        doorImage: amphitheaterFiveDoorImage,
      },
    ],
  },
  {
    name: "الدور السادس",
    floorImage: floorSixImage,
    sections: [],
    amphitheaterList: [
      {
        name: "المدرج 6أ",
        mainImage: amphitheaterSixAMainImage,
        doorImage: amphitheaterSixADoorImage,
      },
      {
        name: "المدرج 6ب",
        mainImage: amphitheaterSixBMainImage,
        doorImage: amphitheaterSixBDoorImage,
      },
    ],
  },
];
