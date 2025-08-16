import { ReactNode } from "react";

export type Logo = {
  img: ReactNode;
  altText: string;
  redirectTo: string;
};
export type NavItem = {
  text: string;
  redirectTo: string;
};
export type TopBarData = {
  logo: Logo;
  navItems: NavItem[];
};

export type MainHeaderData = {
  mainLogo: Logo;
  navItems: CategoryNavItem[];
  icons: Logo[];
};
export type SearchDataProps = {
  img: ReactNode;
  altText: string;
  redirectTo: string;
};
export type CategoryNavItem = {
  text: string;
  redirectTo: string;
  subcategory: {
    text: string;
    redirectTo: string;
    subcategories: [
      {
        text: string;
        redirectTo: string;
      },
      {
        text: string;
        redirectTo: string;
      }
    ];
  };
};
export interface CategoryMenuProps {
  navItems: CategoryNavItem[];
}
export type HeaderPropsType = {
  topHeaderData: TopBarData;
  categoryHeaderData: MainHeaderData;
  saleData?: {
    mainText: string;
    linkText: string;
    linkUrl: string;
  };
};

export type SearchModalProps = {
  isOpen: boolean;
  search: string;
  setSearch: any;
  logoImg: ReactNode;
  popularSearches: string[];
};
