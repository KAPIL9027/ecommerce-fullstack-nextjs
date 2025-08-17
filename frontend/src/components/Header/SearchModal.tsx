import { SearchModalProps } from "@/types";
import Search from "./Search";
import Link from "next/link";
import { useState } from "react";

const SearchModal = ({
  setIsOpen,
  isOpen,
  LogoImg,
  popularSearches,
}: SearchModalProps) => {
  const handleCancel = () => {};
  return (
    <div className="z-100 w-full h-[40vh] absolute left-0 top-0 py-2 px-4 flex-col bg-white text-black">
      <div className="flex justify-between items-center">
        <span className="w-[85px] h-[22px]">{LogoImg}</span>
        <div className="w-[60%] h-9">
          <Search />
        </div>
        <span className="font-bold" onClick={handleCancel}>
          Cancel
        </span>
      </div>
      <div className="flex justify-center items-center">
        <div className="flex flex-col gap-4 w-[57%]">
          <p className="text-sm text-[#707072]">Popular Search Terms</p>
          <ul className="flex gap-2 flex-wrap w-[80%]">
            {popularSearches.map((popularSearch: string) => {
              return (
                <li
                  className="font-bold px-3 py-2 rounded-4xl bg-gray-200"
                  key={popularSearch}
                >
                  {popularSearch}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
