"use client";
import { CategoryMenuProps, CategoryNavItem } from "@/types";
import Link from "next/link";
import React from "react";
import HamburgerIcon from "../../components/icons/HamburgerIcon";

const CategoryMenu = ({
  navItems,
  subCategories,
  setSubCategories,
  setAnimateCategoryMenu,
  setOpenCategoryMenu,
  isMobile,
}: CategoryMenuProps) => {
  const openModal = (navItem: CategoryNavItem) => {
    setSubCategories(navItem.subcategories);
    setOpenCategoryMenu(true);
    setTimeout(() => {
      setAnimateCategoryMenu(true);
    }, 200);
  };
  return isMobile ? (
    <div>
      <HamburgerIcon />
    </div>
  ) : (
    <ul className="flex w-full gap-6">
      {navItems.map((navItem, idx) => {
        return (
          <li
            key={`navItem-${navItem.text}-${idx}`}
            className="font-semibold text-[16px] text-[#111111] p-1 hover:border-b-2 cursor-pointer"
            onMouseEnter={(e: React.MouseEvent<HTMLLIElement>) => {
              if (subCategories && subCategories.length > 0) {
                setSubCategories([]);
                setAnimateCategoryMenu(false);
                setTimeout(() => {
                  setOpenCategoryMenu(false);
                  openModal(navItem);
                }, 200);
              } else {
                openModal(navItem);
              }
            }}
          >
            <Link href={navItem.redirectTo}>{navItem.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryMenu;
