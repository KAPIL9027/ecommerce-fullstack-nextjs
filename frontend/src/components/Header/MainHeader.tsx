"use client";
import { MainHeaderData } from "@/types";
import Link from "next/link";
import React, { useState } from "react";
import CategoryMenu from "./CategoryMenu";
import Search from "./Search";
import SearchModal from "./SearchModal";

const popularSearches = [
  "on court styles",
  "road racing",
  "air jordan 1",
  "air force 1",
  "shoes",
  "sneakers men",
  "jordan",
  "running shoes",
];
const MainHeader = ({ mainLogo, navItems, icons }: MainHeaderData) => {
  const [isOpen, setIsOpen] = useState<boolean>();
  return (
    <div className="w-full h-16 flex justify-between items-center bg-white text-black text-sm font-medium px-10">
      {isOpen && (
        <SearchModal
          popularSearches={popularSearches}
          LogoImg={mainLogo.img}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
        />
      )}
      <Link href={mainLogo.redirectTo}>{mainLogo.img}</Link>
      <div>
        <CategoryMenu navItems={navItems} />
      </div>
      <ul className="flex gap-4 items-center mr-5">
        {icons.map((icon, idx) => {
          return (
            <li key={`navItem-${icon.altText}-${idx}`}>
              {idx === 0 ? (
                <div
                  onClick={(e: React.MouseEvent<HTMLDivElement>) => {
                    setIsOpen(true);
                  }}
                  className="xl:w-[168px] xl:h-9"
                >
                  {<Search />}
                </div>
              ) : (
                <span>{icon.img}</span>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainHeader;
