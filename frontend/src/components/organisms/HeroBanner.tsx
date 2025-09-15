"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { getResponsiveImg } from "../../../utils";

const HeroBanner = ({
  assets,
  type,
  text,
  cta,
}: {
  assets: { type: string; src: string }[];
  type: string;
  text: string;
  cta: { text: string; redirectTo: string }[];
}) => {
  let src = type === "video" ? assets[0].src : "";
  let mobileImgSrc = getResponsiveImg("mobile", assets);
  let desktopImgSrc = getResponsiveImg("desktop", assets);

  useEffect(() => {
    let mainText = document.getElementById(`main-text-${cta[0].text}`);
    mainText!.innerHTML = text;
    let header = document.getElementsByTagName("h3");
    let paragraph = document.getElementsByTagName("p");
    header[0].style = "width: 100%; font-size: 60px; font-weight: 900;";
    paragraph[0].style = "width: 100%; font-size: 32px; font-weight: 500";
  }, []);
  return (
    <div>
      <div className="w-screen">
        {type === "video" ? (
          <video src={src} autoPlay={true} className="w-full object-cover" />
        ) : (
          <picture>
            <source media="(max-width: 800px)" srcSet={mobileImgSrc} />
            <source media="(min-width: 801px)" srcSet={desktopImgSrc} />
            <img
              src={desktopImgSrc}
              alt="Responsive Banner Image"
              className="w-full"
            />
          </picture>
        )}
      </div>
      <div className="flex flex-col gap-4 p-4 w-full justify-center items-center">
        <div id={`main-text-${cta[0].text}`}></div>
        <div className="flex flex-row gap-1">
          {cta.map((link, index) => {
            return (
              <Link
                className="bg-black text-white p-2 rounded-3xl"
                key={`cta-${index}`}
                href={link.redirectTo}
              >
                {link.text}
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
