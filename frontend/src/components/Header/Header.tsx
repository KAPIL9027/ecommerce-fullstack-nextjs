import { HeaderPropsType } from "@/types";
import React from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";
import SaleBanner from "./SaleBanner";

const Header = ({
  topHeaderData,
  categoryHeaderData,
  saleData,
}: HeaderPropsType) => {
  return (
    <div>
      <TopBar {...topHeaderData} />
      <MainHeader {...categoryHeaderData} />
      {saleData && <SaleBanner {...saleData} />}
    </div>
  );
};

export default Header;
