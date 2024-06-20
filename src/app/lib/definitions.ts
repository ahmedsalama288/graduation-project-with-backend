import { StaticImageData } from "next/image";
import { string } from "zod";

export type NavbarNestedLinks = {
  name: string;
  href?: string;
  nestedLinks?: { name: string; href: string }[];
}[];

export type NavbarLinks = {
  name: string;
  href?: string;
  nestedLinks: NavbarNestedLinks;
}[];

export type InstituteStatusInfo = {
  statusName: string;
  statusNumber: number;
  icon: React.ReactNode;
  description: string;
};

export type AcademicLeadersInfo = {
  memberImageSrc: StaticImageData;
  memberImageAlt: string;
  memberName: string;
  memberRole: string;
}[];

export type Amphitheater = {
  name: string;
  description?: string;
  mainImage: StaticImageData | string;
  doorImage: StaticImageData | string;
}[];

export type InstituteFloorsStructure = {
  name: string;
  sections: (number | string)[];
  floorImage: StaticImageData | string;
  amphitheaterList: Amphitheater;
}[];

export type DashboardSidebarLinks = {
  sectionName: string;
  sectionHref?: string;
  sectionLinks?: {
    linkName: string;
    href: string;
  }[];
}[];

export interface MainPageData {
  title: string;
  ourGoals: {
    "1": string;
    "2": string;
    "3": string;
  };
  studentsNumber: number;
  graduatedStudents: number;
  commonQuestions: {
    id: number;
    question: string;
    answers: {
      "1": string;
      "2": string;
      "3": string;
      "4"?: string;
      "5"?: string;
      "6"?: string;
      "7"?: string;
    };
  }[];
}

export type EstablishmentOfTheInstituteData = {
  id: number;
  title?: string;
  description: {
    [key: string]: string;
  };
}[];

export type VisionMissionGoalsData = {
  id: number;
  title?: string;
  description: {
    [key: string]: string;
  };
}[];

export type AcademicLeadersData = {
  id: number;
  image: string;
  name: string;
  title: string;
}[];

export interface InstituteRegulationsData {
  newRegulation: string;
  oldRegulation: string;
}

export interface StudentClassSchedules {
  firstPdfSchedule: string;
  secondPdfSchedule: string;
  theadPdfSchedule: string;
  fourthPdfSchedule: string;
}

export interface StudentExamSchedules {
  firstPdfSchedule: string;
  secondPdfSchedule: string;
  theadPdfSchedule: string;
  fourthPdfSchedule: string;
}

export interface InstituteDepartmentData {
  id: number;
  profName: string;
  imageSrc: string;
  dutiesAndMission: { [key: string]: string };
}

export type UnitsAndDepartmentsData = {
  id: number;
  title: string;
  pageName: string;
  description: { [key: string]: string };
}[];

export interface StudentsRulesPdfFiles {
  studentGuidePdf: string;
  academicAdvisingPdf: string;
  scientificLeadershipGuidePdf: string;
}

export type GraduateFollowUpMembersData = {
  id: number;
  image: string;
  name: string;
  title: string;
}[];
