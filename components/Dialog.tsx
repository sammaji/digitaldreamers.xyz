"use client";

import React, { useState } from "react";

import ImgForm from "@/assets/images/form.jpg";
import Button from "./Button";
import { MdClose, MdCurtainsClosed } from "react-icons/md";
import { TypographyH1, TypographyH2 } from "./Typography";

export default function Dialog() {
  const [dialogState, setDialogState] = useState(false);
  return (
    <>
      <Button
        onClick={() => {
          setDialogState((prev) => !prev);
        }}
      >
        Get Started
      </Button>
      <dialog
        open={dialogState}
        id="main-dialog"
        className="h-[100%] w-[100%] z-50 bg-transparent overflow-hidden absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]"
      >
        <div className="h-[90%] w-[90%] grid grid-cols-2 grid-rows-1 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white rounded-2xl">
          <div
            className="p-24 w-[100%] h-[100%] bg-no-repeat bg-cover bg-center rounded-l-2xl flex items-center justify-center"
            style={{ backgroundImage: `url(${ImgForm.src})` }}
          >
            <TypographyH1 className="text-white w-fit">
              {`We will make your dream a reality.`}
            </TypographyH1>
          </div>
          <div className="w-[100%] h-[100%] p-[24px] rounded-2xl">
            <div className="w-[100%] flex items-center justify-end">
              <button
                className="relative top-0 right-0"
                onClick={() => {
                  setDialogState((prev) => !prev);
                }}
              >
                <MdClose size={24} />
              </button>
            </div>
            <div className="h-[100%] overflow-auto py-[24px] px-[36px]">
              <div className="w-[100%] flex flex-col gap-4">
                <TypographyH2>Tell us about your project.</TypographyH2>
                <div>
                  <label>Your name</label>
                  <input
                    type="text"
                    className="w-[100%] h-[48px] border-[2px] rounded-sm p-[16px]"
                  />
                </div>

                <div>
                  <label>Your email</label>
                  <input
                    type="email"
                    className="w-[100%] h-[48px] border-[2px] rounded-sm p-[16px]"
                  />
                </div>

                <div>
                  <label>Describe you project</label>
                  <textarea className="w-[100%] border-[2px] rounded-sm p-[16px]" />
                </div>
                <button />
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
