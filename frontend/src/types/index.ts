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

export type ChildSubcategory = {
  text: string;
  redirectTo: string;
};

export type SubCategoryType = {
  text: string;
  redirectTo: string;
  childSubcategories: ChildSubcategory[];
};
export type CategoryModalProps = {
  subcategories: SubCategoryType[];
  animateCategoryMenu: boolean;
};
export type CategoryNavItem = {
  text: string;
  redirectTo: string;
  subcategories: SubCategoryType[];
};
export interface CategoryMenuProps {
  navItems: CategoryNavItem[];
  setSubCategories: React.Dispatch<React.SetStateAction<SubCategoryType[]>>;
  setOpenCategoryMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setAnimateCategoryMenu: React.Dispatch<React.SetStateAction<boolean>>;
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

export type SearchProps = {
  type: SearchType;
};

export type SearchModalProps = {
  isOpen: boolean | undefined;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  setShow: React.Dispatch<React.SetStateAction<boolean | undefined>>;
  LogoImg: ReactNode;
  popularSearches: string[];
};

export enum SearchType {
  MODAL,
  NAVBAR,
}
