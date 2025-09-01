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
import RightArrow from "../icons/RightArrow";
import HeaderIcon from "../icons/HeaderIcon";
import Button from "../atoms/Button";
import HelpIcon from "../icons/HelpIcon";
import CartIcon from "../icons/CartIcon";
import OrdersIcon from "../icons/OrdersIcon";
import StoreIcon from "../icons/StoreIcon";
import HamburgerIcon from "../icons/HamburgerIcon";

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
    setCurrentCategoryLevel([...currentCategoryLevel, newCategoryLevel]);
  };
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="relative z-1 w-full h-16 flex justify-between items-center bg-white text-black text-sm font-medium px-10">
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
        <div className="z-10 fixed top-0 right-0">
          <HamburgerMenuModal
            navItems={navItems}
            setOpenHamburgerMenu={setOpenHamburgerMenu}
            animateCategoryMenu={animateCategoryMenu}
            setAnimateCategoryMenu={setAnimateCategoryMenu}
            currentCategoryLevel={currentCategoryLevel}
            setCurrentCategoryLevel={setCurrentCategoryLevel}
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
              />
            )}
          </HamburgerMenuModal>
        </div>
      )}
      <ul className="flex gap-4 items-center mr-5">
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
                  <span>{icon.img}</span>
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
  navItem: CategoryNavItem;
  type: string;
}) => {
  return (
    <div
      className={`flex flex-row items-center justify-between ${
        type === "parent" ? "text-2xl" : "text-base"
      } ${type === "parent" ? "text-black" : "text-gray-500"}`}
    >
      <p>{navItem.text}</p>
      <div>{<RightArrow />}</div>
    </div>
  );
};

const NavIcon = ({ icon, text }: { icon: ReactNode; text: string }) => {
  return (
    <div className="flex flex-row gap-2 items-center font-semibold text-base">
      <div>{icon}</div>
      <p>{text}</p>
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
      <div className="flex items-center gap-3">
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
            />
          );
        })}
      </ul>
    </div>
  );
};

const ChildCategoryView = ({
  data,
}: {
  data: SubCategoryType | CategoryNavItem;
}) => {
  let type = "subcategories" in data ? 'subcategories' : 'childSubcategories'; 
  return (
    <div>
      <p>{data.text}</p>
      <ul>
        {
          (data[type]).map((navItem: (SubCategoryType | ChildSubcategory)=> {

          }))
        }
      </ul>
    </div>
  );
};

export default MainHeader;
