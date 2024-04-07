import {
  AcademicLeadersInfo,
  InstituteFloorsStructure,
  NavbarLinks,
} from "./definitions";

import drMansourImageSrc from "@/../../public/dr-images/dr-mansour.jpeg";
import drAbdelwahabImageSrc from "@/../../public/dr-images/dr-abdelwahab.jpeg";
import drHazemImageSrc from "@/../../public/dr-images/dr-hazem.jpeg";
import mrEhabImageSrc from "@/../../public/dr-images/mr-ehab.jpg";
import drAlbrashyImageSrc from "@/../../public/dr-images/dr-albrashy.jpg";
import drIsalmImageSrc from "@/../../public/dr-images/dr-isalm.jpeg";
import drAbdesalam from "@/../../public/dr-images/dr-abdesalam.jpg";
import personImage from "@/../../public/dr-images/person.jpg";

import amphitheaterImage from "@/../../public/institute-floors-images/amphitheaters/amphitheater-image.webp";
import amphitheaterTwoImage from "@/../../public/institute-floors-images/floor-2/مدرج-2-من-الداخل.webp";
import amphitheaterTwoDoorImage from "@/../../public/institute-floors-images/floor-2/باب-مدرج-2.webp";
import floorOneImage from "@/../../public/institute-floors-images/floor-1/الطابق-الاول.webp";

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
        href: "/pdf/internal-regulation.pdf",
        downloadAblePDFLink: true,
        pdfname: "internal-regulation.pdf",
      },
    ],
  },
  {
    name: "خدمات الطلاب",
    href: "/student-services",
    nestedLinks: [
      {
        name: "الجداول الدراسية",
        href: "",
        nestedLinks: [
          {
            name: "الفرقة الاولي",
            href: "/student-services/class-schedules/year-one",
          },
          {
            name: "الفرقة الثانية",
            href: "/student-services/class-schedules/year-two",
          },
          {
            name: "الفرقة الثالثة",
            href: "/student-services/class-schedules/year-three",
          },
          {
            name: "الفرقة الرابعة",
            href: "/student-services/class-schedules/year-four",
          },
        ],
      },
      {
        name: "المقررات الدراسية",
        href: "",
        nestedLinks: [
          { name: "الفرقة الاولي", href: "/student-services/courses/year-one" },
          {
            name: "الفرقة الثانية",
            href: "/student-services/courses/year-two",
          },
          {
            name: "الفرقة الثالثة",
            href: "/student-services/courses/year-three",
          },
          {
            name: "الفرقة الرابعة",
            href: "/student-services/courses/year-four",
          },
        ],
      },
      {
        name: "جداول الامتحانات",
        href: "",
        nestedLinks: [
          {
            name: "الفرقة الاولي",
            href: "/student-services/exam-schedules/year-one",
          },
          {
            name: "الفرقة الثانية",
            href: "/student-services/exam-schedules/year-two",
          },
          {
            name: "الفرقة الثالثة",
            href: "/student-services/exam-schedules/year-three",
          },
          {
            name: "الفرقة الرابعة",
            href: "/student-services/exam-schedules/year-four",
          },
        ],
      },
      {
        name: "بحث عن مدرج او سكشن",
        href: "/student-services/search-for-amphitheater-or-section",
      },

      { name: "شكاوى الطلاب", href: "/student-services/complaints" },
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
        downloadAblePDFLink: true,
        pdfname: "scientific-research.pdf",
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
    name: "الطابق الاول",
    floorImage: floorOneImage,
    sections: [103, 104],
    amphitheaterList: [
      {
        name: "المدرج 1",
        mainImage: amphitheaterImage,
        doorImage: amphitheaterImage,
      },
    ],
  },
  {
    name: "الطابق الثاني",
    floorImage: floorOneImage,
    sections: [203, 204, 206, 208],
    amphitheaterList: [
      {
        name: "المدرج 2",
        mainImage: amphitheaterTwoImage,
        doorImage: amphitheaterTwoDoorImage,
      },
    ],
  },
  {
    name: "الطابق الثالث",
    floorImage: floorOneImage,
    sections: [303, 304, 306, 308],
    amphitheaterList: [
      {
        name: "المدرج 3",
        mainImage: amphitheaterImage,
        doorImage: amphitheaterImage,
      },
    ],
  },
  {
    name: "الطابق الرابع",
    floorImage: floorOneImage,
    sections: [404, 404, 406, 408],
    amphitheaterList: [
      {
        name: "المدرج 4",
        mainImage: amphitheaterImage,
        doorImage: amphitheaterImage,
      },
    ],
  },
  {
    name: "الطابق الخامس",
    floorImage: floorOneImage,
    sections: [505, 504, 506, 508],
    amphitheaterList: [
      {
        name: "المدرج 5",
        mainImage: amphitheaterImage,
        doorImage: amphitheaterImage,
      },
    ],
  },
  {
    name: "الطابق السادس",
    floorImage: floorOneImage,
    sections: [],
    amphitheaterList: [
      {
        name: "المدرج 6أ",
        mainImage: amphitheaterImage,
        doorImage: amphitheaterImage,
      },
      {
        name: "المدرج 6ب",
        mainImage: amphitheaterImage,
        doorImage: amphitheaterImage,
      },
    ],
  },
];
