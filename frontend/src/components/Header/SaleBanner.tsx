import { SaleBannerType } from "@/types";
import Link from "next/link";
import React from "react";

const SaleBanner = ({ title, subtext, redirectTo }: SaleBannerType) => {
  return (
    <div className="w-full bg-white text-black text-base flex flex-col items-center justify-center py-1">
      <p className="font-bold">{title}</p>
      <Link href={redirectTo!} className="text-xs underline">
        {subtext}
      </Link>
    </div>
  );
};

export default SaleBanner;
