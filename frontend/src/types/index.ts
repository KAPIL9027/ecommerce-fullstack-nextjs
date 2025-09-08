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
  subCategories: SubCategoryType[];
  setSubCategories: React.Dispatch<React.SetStateAction<SubCategoryType[]>>;
  setOpenCategoryMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setAnimateCategoryMenu: React.Dispatch<React.SetStateAction<boolean>>;
  isMobile: boolean;
}
export type HeaderPropsType = {
  topHeaderData: TopBarData;
  categoryHeaderData: MainHeaderData;
  saleData?: {
    title: string;
    subtext: string;
    redirectTo: string;
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

export type HamburgerMenuModalProps = {
  navItems: CategoryNavItem[];
  setOpenHamburgerMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setAnimateCategoryMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setCurrentCategoryLevel: React.Dispatch<
    React.SetStateAction<CurrentCategoryLevel[]>
  >;
  currentCategoryLevel: CurrentCategoryLevel[];
  animateCategoryMenu: boolean;
  swipeLeft: boolean;
  swipeRight: boolean;
  setSwipeLeft: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
};

export type CurrentCategoryLevel = {
  level: string;
  data: SubCategoryType | CategoryNavItem | ChildSubcategory;
};

export type SaleBannerType = {
  title: string;
  subtext: string;
  redirectTo: string;
};
