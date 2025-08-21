import { CategoryModalProps } from "@/types";
import Link from "next/link";
import React from "react";

const CategoryMenuModal = ({ subcategories }: CategoryModalProps) => {
  return (
    <div className="w-screen h-[40vh] flex flex-row gap-8 bg-white text-black">
      {subcategories.map((subcategory, idx1) => {
        return (
          <div
            key={`${subcategory.text}-${idx1}`}
            className="flex flex-col gap-4"
          >
            <h2>
              <Link href={subcategory.redirectTo}>{subcategory.text}</Link>
            </h2>
            {subcategory.childSubcategories && (
              <ul>
                {subcategory.childSubcategories.map(
                  (childSubCategory, idx2) => {
                    return (
                      <li key={`${childSubCategory.text}-${idx2}`}>
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
    </div>
  );
};

export default CategoryMenuModal;
