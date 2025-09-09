import React, { useState } from "react";
import CloseIcon from "../../components/icons/CloseIcon";
import { CategoryNavItem, HamburgerMenuModalProps } from "@/types";
import { slide } from "./MainHeader";
import LeftArrow from "../../components/icons/LeftArrow";

const HamburgerMenuModal = ({
  navItems,
  setOpenHamburgerMenu,
  setAnimateCategoryMenu,
  animateCategoryMenu,
  swipeLeft,
  swipeRight,
  setSwipeLeft,
  children,
  currentCategoryLevel,
  setCurrentCategoryLevel,
}: HamburgerMenuModalProps) => {
  let getPrevPage = () => {
    if (currentCategoryLevel.length > 0) {
      if (
        currentCategoryLevel[currentCategoryLevel.length - 1].level ===
        "children"
      ) {
        return "All";
      } else {
        return currentCategoryLevel[currentCategoryLevel.length - 1].data.text;
      }
    }
    return "";
  };
  let prevPage = getPrevPage();

  return (
    <div className="z-10 w-screen h-screen fixed top-0 left-0 bg-[#1111115C]">
      <div
        className={`fixed top-0 right-0 transition-all duration-300 transform ${
          animateCategoryMenu
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-100"
        } w-[75vw] sm:w-[45vw] flex flex-col h-screen bg-white text-black px-4 py-6 overflow-scroll`}
      >
        <div id="hamburger-content" className={"transform translate-x-0"}>
          <div className={`w-full flex mb-4 cursor-pointer`}>
            {currentCategoryLevel.length > 0 && (
              <div
                className="flex items-center gap-3"
                onClick={() => {
                  let updatedArray = [...currentCategoryLevel];
                  if (updatedArray.length > 0) updatedArray.pop();
                  setCurrentCategoryLevel(updatedArray);
                  slide("left");
                }}
              >
                <div>
                  <LeftArrow />
                </div>
                <p className="text-[16px] font-semibold">{prevPage}</p>
              </div>
            )}
            <div
              className="ml-auto cursor-pointer p-2 flex items-center justify-center rounded-3xl hover:bg-gray-200"
              onClick={() => {
                setAnimateCategoryMenu(false);
                setTimeout(() => {
                  setOpenHamburgerMenu(false);
                }, 300);
              }}
            >
              <CloseIcon />
            </div>
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

export default HamburgerMenuModal;
