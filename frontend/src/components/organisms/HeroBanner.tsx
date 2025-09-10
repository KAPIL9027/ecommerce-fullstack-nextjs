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
    let mainText = document.getElementById("main-text");
    mainText!.innerHTML = text;
  }, []);
  return (
    <div>
      <div className="w-screen h-[60vh]">
        {type === "video" ? (
          <video src={src} />
        ) : (
          <img
            className="w-full h-full"
            srcSet={`${mobileImgSrc} 480w, ${desktopImgSrc} 800w`}
            sizes="(max-width <= 600px) 480px, 800px"
            src={`${desktopImgSrc}`}
            alt="Hero Banner Image"
          />
        )}
      </div>
      <div className="flex flex-col gap-2 p-2">
        <p id="main-text"></p>
        <div className="flex flex-row gap-1">
          {cta.map((link, index) => {
            return (
              <Link
                className="flex flex-row "
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
