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
    <div className="w-[60vw] large:w-[40vw] flex flex-col h-screen bg-white text-black">
      <div
        className="w-full flex flex-row-reverse mb-4"
        onClick={() => {
          setOpenHamburgerMenu(false);
        }}
      >
        <div>
          <LeftArrow/>
          <p>New & Featured</p>
        </div>
        <CloseIcon />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default HamburgerMenuModal;
