import React from "react";
import Link from "next/link";

function Button({ link, buttonText, style, className }) {
  if (style === "red") {
    return (
      <Link href={link}>
        <div
          className={
            "text-white text-xs flex items-center justify-center py-4 px-6 mt-2 mr-2 hover:bg-[#ff000080] transition-all w-max bg-red-700 cursor-pointer " +
            className
          }
        >
          {buttonText}
        </div>
      </Link>
    );
  }

  if (style === "outline") {
    return (
      <Link href={link}>
        <div
          className={
            "text-white text-xs flex items-center justify-center py-4 px-6 mt-2 mr-2 hover:bg-[#ffffff40] transition-all border-solid border-2 w-max border-white cursor-pointer " +
            className
          }
        >
          {buttonText}
        </div>
      </Link>
    );
  }
}

export default Button;
