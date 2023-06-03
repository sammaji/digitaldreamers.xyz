import React, { ReactNode } from "react";

export default function Button({ children, onClick }: { children: ReactNode, onClick: any }) {
  return (
    <button onClick={onClick} className="border-[1px] border-[rgb(225,225,255)]/50 px-4 py-4 rounded-sm max-w-[300px] hover:bg-white hover:text-black">
      {children}
    </button>
  );
}
