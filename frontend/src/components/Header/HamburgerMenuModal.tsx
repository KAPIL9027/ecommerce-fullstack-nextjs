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
  return (
    <div className="w-[60vw] sm:w-[45vw] flex flex-col h-screen bg-white text-black px-4 py-6 overflow-scroll">
      <div
        className="w-full flex justify-between mb-4"
        onClick={() => {
          setOpenHamburgerMenu(false);
        }}
      >
        <div className="flex items-center gap-3">
          <div>
            <LeftArrow />
          </div>
          <p className="text-[16px] font-semibold">New & Featured</p>
        </div>
        <CloseIcon />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HamburgerMenuModal;
