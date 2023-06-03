"use client"

import React from "react";

export default function BlueCircle() {
  return (
    <>
      <div
        className={`absolute top-[0] left-[0] translate-y-[-60%] z-[0] translate-x-[-40%] bg-[#4535F8] h-[100vh] w-[100vh] blur-[24vh] rounded-[100%]`}
      ></div>
      <div
        className={`absolute bg-[#fff] top-[0%] left-[0%] z-[0] translate-y-[-80%] translate-x-[-80%] h-[40vh] w-[40vh] blur-[16vh]`}
      ></div>
    </>
  );
}
