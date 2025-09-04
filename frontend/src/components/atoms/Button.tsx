import React from "react";

const Button = ({
  text,
  bg,
  border,
  onClick,
}: {
  text: string;
  bg: string;
  border: boolean;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  let customCss: string = bg === "black" ? "bg-black text-white" : "text-black";

  return (
    <button
      className={`w-full ${customCss} hover:bg-gray-500 text-base rounded-3xl flex items-center justify-center px-4 py-2 cursor-pointer
      ${border ? "border border-[#CACACB]" : ""}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
