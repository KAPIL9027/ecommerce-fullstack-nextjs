"use client";
import { CategoryMenuProps } from "@/types";
import Link from "next/link";
import React from "react";

const CategoryMenu = ({
  navItems,
  setSubCategories,
  setAnimateCategoryMenu,
  setOpenCategoryMenu,
}: CategoryMenuProps) => {
  return (
    <ul className="flex w-full gap-6">
      {navItems.map((navItem, idx) => {
        return (
          <li
            key={`navItem-${navItem.text}-${idx}`}
            className="font-semibold text-[16px] text-[#111111] p-1 hover:border-b-2 cursor-pointer"
            onMouseEnter={(e: React.MouseEvent<HTMLLIElement>) => {
              // do something
              setSubCategories(navItem.subcategories);
              setOpenCategoryMenu(true);
              setTimeout(() => {
                setAnimateCategoryMenu(true);
              }, 300);
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
