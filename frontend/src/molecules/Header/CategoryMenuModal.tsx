import { CategoryModalProps } from "@/types";
import Link from "next/link";
import React from "react";

const CategoryMenuModal = ({
  subcategories,
  animateCategoryMenu,
}: CategoryModalProps) => {
  return (
    <div className={"h-[40vh] bg-white flex flex-col items-center py-6"}>
      <main className="w-[60%] flex flex-row justify-evenly items-center">
        {subcategories.map((subcategory, idx1) => {
          return (
            <div
              key={`${subcategory.text}-${idx1}`}
              className={`flex flex-col gap-2 transform transition-all duration-400 ${
                animateCategoryMenu
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 -translate-y-1"
              }`}
            >
              <h2 className="text-black hover:text-gray-400 text-sm font-semibold">
                <Link href={subcategory.redirectTo}>{subcategory.text}</Link>
              </h2>
              {subcategory.childSubcategories && (
                <ul>
                  {subcategory.childSubcategories.map(
                    (childSubCategory, idx2) => {
                      return (
                        <li
                          className="font-semibold text-xs text-gray-600 hover:text-black"
                          key={`${childSubCategory.text}-${idx2}`}
                        >
                          <Link href={childSubCategory.redirectTo}>
                            {childSubCategory.text}
                          </Link>
                        </li>
                      );
                    }
                  )}
                </ul>
              )}
            </div>
          );
        })}
      </main>
    </div>
  );
};

export default CategoryMenuModal;
