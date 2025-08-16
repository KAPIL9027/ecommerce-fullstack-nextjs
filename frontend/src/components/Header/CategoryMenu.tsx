import { CategoryMenuProps } from "@/types";
import Link from "next/link";
import React from "react";

const CategoryMenu = ({ navItems }: CategoryMenuProps) => {
  return (
    <ul className="flex w-full gap-6">
      {navItems.map((navItem, idx) => {
        return (
          <li key={`navItem-${navItem.text}-${idx}`}>
            <Link href={navItem.redirectTo}>{navItem.text}</Link>
          </li>
        );
      })}
    </ul>
  );
};

export default CategoryMenu;
