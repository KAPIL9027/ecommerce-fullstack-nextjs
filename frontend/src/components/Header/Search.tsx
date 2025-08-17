"use client";
import React, { ChangeEvent, InputEvent, useState } from "react";
import SearchIcon from "../icons/SearchIcon";

const Search = () => {
  const [search, setSearch] = useState<string>("");
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  return (
    <div
      className={`xl:flex xl:items-center xl:bg-[#f5f5f5] xl:pr-1 xl:rounded-2xl w-full h-full xl:hover:bg-gray-200`}
    >
      <span className="hover:bg-gray-300 rounded-[50%] flex items-center justify-center p-[6px]">
        <SearchIcon />
      </span>
      <input
        type="text"
        placeholder="Search"
        className="hidden xl:block xl:w-full font-bold outline-none border-none"
        value={search}
        onChange={onChangeHandler}
      />
    </div>
  );
};

export default Search;
