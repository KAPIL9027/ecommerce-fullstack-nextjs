"use client";
import { CategoryMenuProps, SubCategoryType } from "@/types";
import Link from "next/link";
import React, { MouseEventHandler, useEffect, useState } from "react";
import CategoryMenuModal from "./CategoryMenuModal";

const CategoryMenu = ({ navItems }: CategoryMenuProps) => {
  const [subcategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [animate, setAnimate] = useState<boolean>(false);
  useEffect(() => {
    console.log("subcategories", subcategories);
  }, [subcategories]);
  return (
    <ul className="flex w-full gap-6">
      {navItems.map((navItem, idx) => {
        return (
          <li key={`navItem-${navItem.text}-${idx}`}>
            <Link
              href={navItem.redirectTo}
              className="font-medium text-[16px] text-[#111111] p-1 hover:border-b-2"
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                // do something
                setSubCategories(navItem.subcategories);
                setIsOpen(true);
                setTimeout(() => {
                  setAnimate(true);
                }, 300);
              }}
            >
              {navItem.text}
            </Link>
          </li>
        );
      })}
      {isOpen && (
        <div className="absolute bottom-0">
          <CategoryMenuModal subcategories={subcategories} />
        </div>
      )}
    </ul>
  );
};

export default CategoryMenu;
