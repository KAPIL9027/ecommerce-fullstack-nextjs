import { CategoryMenuProps, SubCategoryType } from "@/types";
import Link from "next/link";
import React, { MouseEventHandler, useState } from "react";

const CategoryMenu = ({ navItems }: CategoryMenuProps) => {
  const [subcategories, setSubCategories] = useState<SubCategoryType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>();
  const [animate, setAnimate] = useState<boolean>();
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
                setIsOpen(true);
                setTimeout(()=>{
                  setAnimate(true)
                },300);
              }}
            >
              {navItem.text}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryMenu;
