"use client";
import { MainHeaderData, SearchType, SubCategoryType } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
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
const MainHeader = ({ mainLogo, navItems, icons }: MainHeaderData) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  const [show, setShow] = useState<boolean>();
  const [subcategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [openCategoryMenu, setOpenCategoryMenu] = useState<boolean>(false);
  const [animateCategoryMenu, setAnimateCategoryMenu] =
    useState<boolean>(false);
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
          className="absolute top-[100%] left-0 w-full"
          onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
            setAnimateCategoryMenu(false);
            setTimeout(() => {
              setOpenCategoryMenu(false);
            }, 300);
          }}
        >
          <CategoryMenuModal
            subcategories={subcategories}
            animateCategoryMenu
          />
        </div>
      )}
      <div className="w-[77px] h-[77px]">
        <Link href={mainLogo.redirectTo}>{mainLogo.img}</Link>
      </div>
      <div
        onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
          const rect = e.currentTarget.getBoundingClientRect();
          const x = e.clientX;
          if (x <= rect.left || x >= rect.right) {
            setSubCategories([]);
            setAnimateCategoryMenu(false);
            setTimeout(() => {
              setOpenCategoryMenu(false);
            }, 300);
          }
        }}
      >
        <CategoryMenu
          navItems={navItems}
          setSubCategories={setSubCategories}
          setOpenCategoryMenu={setOpenCategoryMenu}
          setAnimateCategoryMenu={setAnimateCategoryMenu}
        />
      </div>
      <ul className="flex gap-4 items-center mr-5">
        {icons.map((icon, idx) => {
          return (
            <li key={`navItem-${icon.altText}-${idx}`}>
              {idx === 0 ? (
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
