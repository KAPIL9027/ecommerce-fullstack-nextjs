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
  let textColor = bg === "black" ? "text-white" : "text-black";

  return (
    <button
      className={`w-full bg-${bg} ${textColor} text-base rounded-3xl flex items-center justify-center px-4 py-2 
      ${border ? "border border-[#CACACB]" : ""}
      `}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default Button;
