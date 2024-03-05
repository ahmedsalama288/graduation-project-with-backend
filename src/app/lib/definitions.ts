export type NavbarNestedLinks = {
  name?: string;
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
