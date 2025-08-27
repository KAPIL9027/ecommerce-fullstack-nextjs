"use client";
import { Logo, MainHeaderData, SearchType, SubCategoryType } from "@/types";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategoryMenu from "./CategoryMenu";
import Search from "./Search";
import SearchModal from "./SearchModal";
import CategoryMenuModal from "./CategoryMenuModal";

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
  const [openCategoryMenu, setOpenCategoryMenu] = useState<boolean>(false);
  const [animateCategoryMenu, setAnimateCategoryMenu] =
    useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="relative w-full h-16 flex justify-between items-center bg-white text-black text-sm font-medium px-10">
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
      <ul className="flex gap-4 items-center mr-5">
        {icons
          .filter((icon, idx) => shouldShowIcon(icon, isMobile))
          .map((icon, idx) => {
            return (
              <li key={`navItem-${icon.altText}-${idx}`}>
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

export default MainHeader;
