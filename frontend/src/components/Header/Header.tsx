import { HeaderPropsType } from "@/types";
import React from "react";
import TopBar from "./TopBar";
import MainHeader from "./MainHeader";

const Header = ({
  topHeaderData,
  categoryHeaderData,
  saleData,
}: HeaderPropsType) => {
  return (
    <div>
      <TopBar {...topHeaderData} />
      <MainHeader {...categoryHeaderData} />
    </div>
  );
};

export default Header;
