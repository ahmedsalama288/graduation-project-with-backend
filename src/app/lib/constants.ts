import { NavbarLinks } from "./definitions";

export const navbarLinks: NavbarLinks = [
  {
    name: "عن المعهد",
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
        href: "/about-us/regulations",
      },
    ],
  },
  {
    name: "خدمات الطلاب",
    nestedLinks: [
      {
        name: "الجداول الدراسية",
        href: "",
        nestedLinks: [
          {
            name: "الفرقة الاول",
            href: "/student-services/class-schedules/year-one",
          },
          {
            name: "الفرقة الثاني",
            href: "/student-services/class-schedules/year-two",
          },
          {
            name: "الفرقة الثالث",
            href: "/student-services/class-schedules/year-three",
          },
          {
            name: "الفرقة الرابع",
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
          { name: "الفرقة الاولي", href: "/student-services/exam-schedules/year-one" },
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

      { name: "شكاوى الطلاب", href: "/student-services/complaints" },
      {
        name: "معرفة النتيجة",
        href: "https://dhic.ddns.net/ch/student_info.php",
      },
      { name: "تحميل الكتب", href: "https://dhic.ddns.net/ch/mycourses.php" },
    ],
  },
  { name: "وحدات و إدارات", nestedLinks: [] },

  {
    name: "الحياه الاكاديمية",
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
    name: "قطاعات المعهد",
    nestedLinks: [
      { name: "", href: "" },
      { name: "", href: "" },
      { name: "", href: "" },
      { name: "", href: "" },
      { name: "", href: "" },
      { name: "", href: "" },
    ],
  },
  { name: "البحث العلمي", nestedLinks: [] },
  { name: "الوسائط المتعددة", nestedLinks: [] },
  { name: "تواصل معنا", nestedLinks: [] },
];
