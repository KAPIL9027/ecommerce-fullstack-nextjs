import React from "react";
import CloseIcon from "../icons/CloseIcon";
import { CategoryNavItem, HamburgerMenuModalProps } from "@/types";
import LeftArrow from "../icons/LeftArrow";

const HamburgerMenuModal = ({
  navItems,
  setOpenHamburgerMenu,
  setAnimateCategoryMenu,
  animateCategoryMenu,
  children,
  currentCategoryLevel,
  setCurrentCategoryLevel,
}: HamburgerMenuModalProps) => {
  let prevPage =
    currentCategoryLevel.length > 0 &&
    currentCategoryLevel[currentCategoryLevel.length - 1].level === "parent"
      ? "All"
      : currentCategoryLevel[currentCategoryLevel.length - 1].data.text;
  return (
    <div className="w-[60vw] sm:w-[45vw] flex flex-col h-screen bg-white text-black px-4 py-6 overflow-scroll">
      <div className="w-full flex justify-between mb-4">
        {currentCategoryLevel.length > 0 && (
          <div
            className="flex items-center gap-3"
            onClick={() => {
              let updatedArray = [...currentCategoryLevel];
              if (updatedArray.length > 0) updatedArray.pop();
              setCurrentCategoryLevel(updatedArray);
            }}
          >
            <div>
              <LeftArrow />
            </div>
            <p className="text-[16px] font-semibold">{}</p>
          </div>
        )}
        <div
          onClick={() => {
            setOpenHamburgerMenu(false);
          }}
        >
          <CloseIcon />
        </div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HamburgerMenuModal;
