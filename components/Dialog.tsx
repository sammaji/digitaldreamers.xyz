"use client";

import React, { useEffect, useRef, useState } from "react";
import { init, send, EmailJSResponseStatus } from "@emailjs/browser";

import ImgForm from "@/assets/images/form.jpg";
import Button from "./Button";
import { MdCheck, MdClose } from "react-icons/md";
import { TypographyH1, TypographyH2 } from "./Typography";

import { ImSpinner2 } from "react-icons/im";

export default function Dialog() {
  const [dialogState, setDialogState] = useState(false);
  const [isMessageDisplaying, setIsMessageDisplaying] = useState(false);
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [isEmailNotSent, setIsEmailNotSent] = useState(false);

  const nameRef = useRef<HTMLInputElement>(null!);
  const emailRef = useRef<HTMLInputElement>(null!);
  const messageRef = useRef<HTMLTextAreaElement>(null!);

  useEffect(() => {
    init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const sendEmail = () => {
    setIsMessageDisplaying(true);

    // reset state
    setIsEmailSent(false);
    setIsEmailNotSent(false);

    if (
      nameRef.current.value &&
      emailRef.current.value &&
      messageRef.current.value
    ) {
      send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "",
        {
          from_name: nameRef.current.value,
          from_email: emailRef.current.value,
          message: messageRef.current.value,
        }
      )
        .then(
          () => {
            setIsEmailSent(true);
            setIsEmailNotSent(false);
          },
          () => {
            setIsEmailSent(false);
            setIsEmailNotSent(true);
          }
        )
        .catch(() => {
          setIsEmailSent(false);
          setIsEmailNotSent(true);
        });
    }
  };

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
                    ref={nameRef}
                    type="text"
                    className="w-[100%] h-[48px] border-[2px] rounded-sm p-[16px]"
                  />
                </div>

                <div>
                  <label>Your email</label>
                  <input
                    ref={emailRef}
                    type="email"
                    className="w-[100%] h-[48px] border-[2px] rounded-sm p-[16px]"
                  />
                </div>

                <div>
                  <label>Describe you project</label>
                  <textarea
                    ref={messageRef}
                    className="w-[100%] border-[2px] rounded-sm p-[16px]"
                  />
                </div>
                <div
                  className={`${
                    isMessageDisplaying ? "" : "hidden"
                  } flex items-center justify-start gap-2`}
                >
                  {isMessageDisplaying && !isEmailSent && !isEmailNotSent ? (
                    <ImSpinner2 className="animate-spin" />
                  ) : null}
                  {isMessageDisplaying && !isEmailSent && !isEmailNotSent
                    ? "Sending..."
                    : ""}
                  {isMessageDisplaying && isEmailSent ? (
                    <>
                      <MdCheck color="#03C04A" />
                      <p className="text-green-600">
                        {"Send. We will reach out to you soon :)"}
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                  {isMessageDisplaying && isEmailNotSent ? (
                    <>
                      <MdClose color="red" />
                      <p className="text-red-600">
                        {"Some error happened T-T"}
                      </p>
                    </>
                  ) : (
                    ""
                  )}
                </div>
                <Button
                  className="bg-blue-500 text-white p-4"
                  onClick={sendEmail}
                >
                  Submit
                </Button>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </>
  );
}
