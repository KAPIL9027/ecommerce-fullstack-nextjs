import { NavItem, TopBarData } from "@/types";
import Link from "next/link";
import React from "react";

const TopBar = ({ logo, navItems }: TopBarData) => {
  return (
    <div className="bg-[#F5F5F5] w-full justify-between items-center px-10 h-9 hidden large:flex">
      <Link className="text-black" href={logo.redirectTo}>
        <div className="ml-2 w-6 h-6">
          <span>{logo.img}</span>
        </div>
      </Link>
      <ul className="w-3xs flex justify-between items-center text-black font-bold">
        {navItems.map((navItem: NavItem, idx: number) => {
          return (
            <div
              className="flex gap-2 items-center"
              key={`divider-${navItem.text}-${idx}`}
            >
              <li key={`${navItem.text}-${idx}`}>
                <Link href={navItem.redirectTo}>
                  <p className="text-xs">{navItem.text}</p>
                </Link>
              </li>
              {idx !== navItems.length - 1 && <span>{" | "}</span>}
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default TopBar;
