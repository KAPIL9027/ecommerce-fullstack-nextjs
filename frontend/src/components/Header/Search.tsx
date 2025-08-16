import { SearchDataProps } from "@/types";
import React from "react";
import SearchIcon from "../icons/SearchIcon";

const Search = ({ img, redirectTo, altText }: SearchDataProps) => {
  return (
    <div className="xl:flex xl:items-center xl:bg-[#f5f5f5] xl:pr-1 xl:rounded-2xl xl:w-[168px] xl:h-9 xl:hover:bg-gray-200">
      <span className="hover:bg-gray-300 rounded-[50%] flex items-center justify-center p-[6px]">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="hidden xl:block xl:w-full font-bold outline-none border-none"
      />
    </div>
  );
};

const SearchModal = ({isOpen,search,setSearch,logImg,popularSearches}:SearchModalProps)=>{
  return (
    <></>
  )
}

export default Search;
