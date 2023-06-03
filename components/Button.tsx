import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function Button({ children, ...props }: ButtonProps) {
  return (
    <button
      className="border-[1px] border-[rgb(225,225,255)]/50 px-4 py-4 rounded-sm max-w-[300px] hover:bg-white hover:text-black"
      {...props}
    >
      {children}
    </button>
  );
}
