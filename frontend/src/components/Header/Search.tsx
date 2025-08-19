"use client";
import React, { ChangeEvent, InputEvent, useState } from "react";
import SearchIcon from "../icons/SearchIcon";
import { SearchModalProps, SearchProps, SearchType } from "@/types";

const Search = ({ type }: SearchProps) => {
  const [search, setSearch] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div
      className={`${
        type === SearchType.MODAL
          ? "flex items-center bg-[#f5f5f5] pr-1 rounded-2xl hover:bg-gray-200"
          : "xl:flex xl:items-center xl:bg-[#f5f5f5] xl:pr-1 xl:rounded-2xl xl:hover:bg-gray-200"
      } w-full h-full`}
    >
      <span className="hover:bg-gray-300 rounded-[50%] flex items-center justify-center p-[6px]">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search"
        className={`${
          type === SearchType.MODAL ? "w-full" : "hidden xl:block xl:w-full"
        } font-bold outline-none border-none`}
        value={search}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
