import { StaticImageData } from "next/image";

export type NavbarNestedLinks = {
  name: string;
  href?: string;
  prefetch?: boolean;
  nestedLinks?: { name: string; href: string; }[];
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
