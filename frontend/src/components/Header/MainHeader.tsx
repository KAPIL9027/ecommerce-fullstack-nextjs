import { MainHeaderData } from "@/types";
import Link from "next/link";
import React from "react";
import CategoryMenu from "./CategoryMenu";
import Search from "./Search";

const MainHeader = ({ mainLogo, navItems, icons }: MainHeaderData) => {
  return (
    <div className="w-full h-16 flex justify-between items-center bg-white text-black text-sm font-medium px-10">
      <Link href={mainLogo.redirectTo}>{mainLogo.img}</Link>
      <div>
        <CategoryMenu navItems={navItems} />
      </div>
      <ul className="flex gap-4 items-center mr-5">
        {icons.map((icon, idx) => {
          return (
            <li key={`navItem-${icon.altText}-${idx}`}>
              {idx === 0 ? <Search {...icon} /> : <span>{icon.img}</span>}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default MainHeader;
