import React, { ReactNode } from "react";

const CardSwiper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-full overflow-x-scroll flex flex-row">{children}</div>
  );
};

export default CardSwiper;
