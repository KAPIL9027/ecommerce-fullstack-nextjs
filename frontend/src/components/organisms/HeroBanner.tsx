import Link from "next/link";
import React, { useEffect } from "react";

const HeroBanner = ({
  src,
  type,
  text,
  cta,
}: {
  src: string;
  type: string;
  text: string;
  cta: { text: string; redirectTo: string }[];
}) => {
  useEffect(() => {
    let mainText = document.getElementById("main-text");
    mainText!.innerHTML = text;
  }, []);
  return (
    <div>
      <div className="w-full h-[60vh]">
        {type === "video"} ? <video src={src} /> : <img src={src} />
      </div>
      <div className="flex flex-col gap-2 p-2">
        <p id="main-text"></p>
        <div className="flex flex-row gap-1">
          {cta.map((link, index) => {
            return (
              <Link key={`cta-${index}`} href={link.redirectTo}>
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
