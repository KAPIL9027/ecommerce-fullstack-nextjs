"use client";
import {
  CategoryNavItem,
  ChildSubcategory,
  CurrentCategoryLevel,
  Logo,
  MainHeaderData,
  SearchType,
  SubCategoryType,
} from "@/types";
import Link from "next/link";
import React, { ReactNode, useEffect, useState } from "react";
import CategoryMenu from "./CategoryMenu";
import Search from "./Search";
import SearchModal from "./SearchModal";
import CategoryMenuModal from "./CategoryMenuModal";
import HamburgerMenuModal from "./HamburgerMenuModal";
import RightArrow from "../../components/icons/RightArrow";
import HeaderIcon from "../../components/icons/HeaderIcon";
import Button from "../../components/atoms/Button";
import HelpIcon from "../../components/icons/HelpIcon";
import CartIcon from "../../components/icons/CartIcon";
import OrdersIcon from "../../components/icons/OrdersIcon";
import StoreIcon from "../../components/icons/StoreIcon";
import HamburgerIcon from "../../components/icons/HamburgerIcon";

const popularSearches = [
  "on court styles",
  "road racing",
  "air jordan 1",
  "air force 1",
  "shoes",
  "sneakers men",
  "jordan",
  "running shoes",
];

let hamburgerIcons: { text: string; redirectTo: string; icon: ReactNode }[] = [
  {
    text: "Help",
    redirectTo: "/help",
    icon: <HelpIcon />,
  },
  {
    text: "Bag",
    redirectTo: "/cart",
    icon: <CartIcon />,
  },
  {
    text: "Orders",
    redirectTo: "/orders",
    icon: <OrdersIcon />,
  },
  {
    text: "Find a Store",
    redirectTo: "/store",
    icon: <StoreIcon />,
  },
];

const shouldShowIcon = (icon: Logo, isMobile: boolean): boolean => {
  const altText = icon.altText;
  switch (altText) {
    case "profile-icon":
    case "hamburger-icon":
      if (isMobile) {
        return true;
      } else {
        return false;
      }
    case "wishlist-icon":
      if (isMobile) {
        return false;
      } else {
        return true;
      }
    default:
      return true;
  }
};
export const slide = (position: string) => {
  let hamburgerContent = document.getElementById("hamburger-content");
  hamburgerContent!.style.transition = "";
  hamburgerContent!.style.transform =
    position === "left" ? "translateX(-105%)" : "translateX(105%)";
  setTimeout(() => {
    hamburgerContent!.style.transform = "";
    hamburgerContent!.style.transition = "transform 200ms ease-in-out";
  }, 200);
};
const haveChildren: (
  navItem: CategoryNavItem | SubCategoryType | ChildSubcategory
) => boolean = (
  navItem: CategoryNavItem | SubCategoryType | ChildSubcategory
) => {
  let items: (CategoryNavItem | SubCategoryType | ChildSubcategory)[] = [];
  if ("subcategories" in navItem) {
    items = navItem.subcategories;
  } else if ("childSubcategories" in navItem) {
    items = navItem.childSubcategories;
  }
  return items.length > 0;
};

const MainHeader = ({ mainLogo, navItems, icons }: MainHeaderData) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [show, setShow] = useState<boolean>();
  const [subcategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [isMobile, setIsMobile] = useState<boolean>(false);
  const [currentCategoryLevel, setCurrentCategoryLevel] = useState<
    CurrentCategoryLevel[]
  >([]);
  const [openCategoryMenu, setOpenCategoryMenu] = useState<boolean>(false);
  const [animateCategoryMenu, setAnimateCategoryMenu] =
    useState<boolean>(false);
  const [animateSubCategory, setAnimateSubCategory] = useState(true);
  const [swipeLeft, setSwipeLeft] = useState<boolean>(false);
  const [swipeRight, setSwipeRight] = useState<boolean>(false);
  const [openHamburgerMenu, setOpenHamburgerMenu] = useState<boolean>(false);

  const openHamburger = () => {
    setOpenHamburgerMenu(true);
    setTimeout(() => {
      setAnimateCategoryMenu(true);
    }, 300);
  };

  const handleOnClick = (e: React.MouseEvent<HTMLLIElement>) => {
    let type = e.currentTarget.dataset.iconType;
    switch (type) {
      case "hamburger-icon":
        openHamburger();
        break;
      case "wishlist-icon":
        // do wishlist stuff
        break;
      case "profile-icon":
        // open profile menu
        break;
      case "cart-icon":
      // open cart menu
      default:
        break;
    }
  };
  const handleNavItemClick = (newCategoryLevel: CurrentCategoryLevel) => {
    let navItem = newCategoryLevel.data;
    if (!haveChildren(navItem)) return;
    setCurrentCategoryLevel([...currentCategoryLevel, newCategoryLevel]);
    slide("right");
  };
  

  return (
    <div className="relative z-1 w-full h-16 flex justify-between items-center bg-white text-black text-sm font-medium pl-10 pr-9">
      {show && (
        <SearchModal
          popularSearches={popularSearches}
          LogoImg={mainLogo.img}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          setShow={setShow}
        />
      )}
      {openCategoryMenu && (
        <div
          className={`z-10 absolute top-[100%] h-[40%] left-0 w-full transform transition-all duration-200 ${
            animateCategoryMenu
              ? "opacity-100 translate-y-0"
              : "opacity-0 -translate-y-1"
          }`}
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            let y = e.clientY;
            if (y >= Math.floor(rect.bottom)) {
              setSubCategories([]);
              setAnimateCategoryMenu(false);
              setTimeout(() => {
                setOpenCategoryMenu(false);
              }, 200);
            }
          }}
        >
          <CategoryMenuModal
            subcategories={subcategories}
            animateCategoryMenu={animateCategoryMenu}
          />
        </div>
      )}
      <div className="w-[77px] h-[77px]">
        <Link href={mainLogo.redirectTo}>{mainLogo.img}</Link>
      </div>
      {!isMobile && (
        <div
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            const rect = e.currentTarget.getBoundingClientRect();
            let x = e.clientX;
            if (x <= Math.floor(rect.left) || x >= Math.floor(rect.right)) {
              setSubCategories([]);
              setAnimateCategoryMenu(false);
              setTimeout(() => {
                setOpenCategoryMenu(false);
              }, 200);
            }
          }}
        >
          <CategoryMenu
            navItems={navItems}
            subCategories={subcategories}
            setSubCategories={setSubCategories}
            setOpenCategoryMenu={setOpenCategoryMenu}
            setAnimateCategoryMenu={setAnimateCategoryMenu}
            isMobile={false}
          />
        </div>
      )}

      {isMobile && openHamburgerMenu && (
        <div className="">
          <HamburgerMenuModal
            navItems={navItems}
            setOpenHamburgerMenu={setOpenHamburgerMenu}
            animateCategoryMenu={animateCategoryMenu}
            setAnimateCategoryMenu={setAnimateCategoryMenu}
            currentCategoryLevel={currentCategoryLevel}
            setCurrentCategoryLevel={setCurrentCategoryLevel}
            swipeLeft={swipeLeft}
            swipeRight={swipeRight}
            setSwipeLeft={setSwipeLeft}
          >
            {currentCategoryLevel.length === 0 ? (
              <ParentCategoryView
                data={navItems}
                handleNavItemClick={handleNavItemClick}
              />
            ) : (
              <ChildCategoryView
                data={
                  currentCategoryLevel[currentCategoryLevel.length - 1].data
                }
                handleNavItemClick={handleNavItemClick}
              />
            )}
          </HamburgerMenuModal>
        </div>
      )}
      <ul className="flex gap-4 items-center">
        {icons
          .filter((icon, idx) => shouldShowIcon(icon, isMobile))
          .map((icon, idx) => {
            return (
              <li
                key={`navItem-${icon.altText}-${idx}`}
                data-icon-type={icon.altText}
                onClick={handleOnClick}
              >
                {icon.altText === "search-icon" ? (
                  <div
                    onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                      setShow(true);
                      setTimeout(() => setIsOpen(true), 10);
                    }}
                    className={`xl:w-[168px] xl:h-9 transform transition-all duration-200 ${
                      isOpen ? "-translate-x-20" : "translate-x-0"
                    }`}
                  >
                    {<Search type={SearchType.NAVBAR} />}
                  </div>
                ) : (
                  <NavIcon
                    icon={icon.img}
                    text={icon.altText}
                    type={"header"}
                  />
                )}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

const NavItem = ({
  navItem,
  type,
}: {
  navItem: CategoryNavItem | SubCategoryType | ChildSubcategory;
  type: string;
}) => {
  return (
    <div
      className={`flex flex-row group items-center justify-between cursor-pointer ${
        type === "parent" ? "text-2xl" : "text-base"
      }`}
    >
      <p
        className={`${
          type === "parent"
            ? "text-black group-hover:text-gray-500"
            : "text-gray-500"
        }`}
      >
        {navItem.text}
      </p>
      {haveChildren(navItem) && (
        <div className={"text-black group-hover:text-gray-500"}>
          {<RightArrow />}
        </div>
      )}
    </div>
  );
};

const NavIcon = ({
  icon,
  text,
  type,
}: {
  icon: ReactNode;
  text: string;
  type: string;
}) => {
  return (
    <div
      className={`${
        type === "header"
          ? "hover:bg-gray-300 hover:rounded-3xl hover:p-[6px]"
          : "flex flex-row gap-2 items-center font-semibold text-base"
      } cursor-pointer`}
    >
      <span>{icon}</span>
      {type === "hamburger" && <p>{text}</p>}
    </div>
  );
};
const ParentCategoryView = ({
  data,
  handleNavItemClick,
}: {
  data: CategoryNavItem[];
  handleNavItemClick: (newCurrentCategoryLevel: CurrentCategoryLevel) => void;
}) => {
  return (
    <div className="pt-8 flex flex-col gap-12">
      <div>
        {
          <ul className="flex flex-col gap-3 pl-4">
            {data.map((categoryNavItem: CategoryNavItem, idx: number) => {
              return (
                <div
                  key={`${categoryNavItem.text}-${idx}`}
                  onClick={() =>
                    handleNavItemClick({
                      level: "children",
                      data: categoryNavItem,
                    })
                  }
                >
                  {<NavItem navItem={categoryNavItem} type={"parent"} />}
                </div>
              );
            })}
          </ul>
        }
      </div>
      <div className="flex items-center gap-3 cursor-pointer">
        <span className="w-8 h-8">
          <HeaderIcon />
        </span>
        <p className="text-base font-semibold pl-2">Jordan</p>
      </div>
      <div>
        <div className="text-[#707072] text-xl pl-4">
          <p>
            Become a Nike Member for the best products, inspiration and stories
            in sport.{" "}
            <Link href="">
              <span className="font-semibold text-black">Learn more</span>
            </Link>
          </p>
          <div className="flex gap-2 mt-4">
            <div>
              <Button
                text={"Join Us"}
                bg={"black"}
                border={false}
                onClick={() => {}}
              />
            </div>
            <div>
              <Button
                text={"Sign In"}
                bg={"transparent"}
                border={true}
                onClick={() => {}}
              />
            </div>
          </div>
        </div>
      </div>

      <ul className="flex flex-col gap-4 pl-4 pt-8 pb-32">
        {hamburgerIcons.map((hamburgerIcon, idx) => {
          return (
            <NavIcon
              key={`icon-${idx}-${hamburgerIcon.text}`}
              icon={hamburgerIcon.icon}
              text={hamburgerIcon.text}
              type={"hamburger"}
            />
          );
        })}
      </ul>
    </div>
  );
};

const ChildCategoryView = ({
  data,
  handleNavItemClick,
}: {
  data: SubCategoryType | CategoryNavItem | ChildSubcategory;
  handleNavItemClick: (newCurrentCategoryLevel: CurrentCategoryLevel) => void;
}) => {
  let items: (SubCategoryType | ChildSubcategory)[] = [];
  if ("subcategories" in data) {
    items = data.subcategories;
  } else if ("childSubcategories" in data) {
    items = data.childSubcategories;
  }
  return (
    <div className="px-2 flex flex-col gap-5 pt-8">
      <p className="text-2xl font-semibold text-[#111111]">{data.text}</p>
      <ul className="flex flex-col gap-4">
        {items.map((navItem, idx) => {
          return (
            <div
              onClick={() => {
                handleNavItemClick({ level: "subchildren", data: navItem });
              }}
              key={`category-${navItem.text}-${idx}`}
            >
              <NavItem navItem={navItem} type="children" />
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default MainHeader;
