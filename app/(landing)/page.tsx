import {
  TypographyH1,
  TypographyH2,
  TypographyH3,
  TypographyList,
  TypographyP,
} from "@/components/Typography";

import ImgWebsite from "@/assets/images/website.webp";
import ImgMobile from "@/assets/images/mobile.webp";
import BlueCircle from "@/components/BlueCircle";
import Image from "next/image";
import Dialog from "@/components/Dialog";
import Cursor from "@/components/Cursor";
import OgImage from "@/public/logo_digital_dreamers.png";

export default function page() {
  return (
    <>
      <Cursor />
      <div className="h-[100vh] w-[100vw]" id="page-one">
        <div className="absolute h-[100vh] w-[100vw] overflow-hidden grid grid-rows-[56px_1fr] grid-cols-2 max-md:grid-cols-1">
          <div className="absolute h-[100vh] w-[100vw] bg-image-2 opacity-20"></div>
          <div className="h-[100%] w-[100%] flex items-center px-16 max-sm:px-8 gap-8 max-sm:gap-4 z-10">
            <a href="#page-two" className="text-sm font-medium leading-none">
              Services
            </a>
            <a
              href="mailto:samyabratamaji334@gmail.com/?subject=Query"
              className="text-sm font-medium leading-none"
            >
              Contact
            </a>
          </div>
          <div className="h-[100vh] w-[50vw] max-md:hidden flex flex-col row-span-2 justify-center bg-image"></div>
          <div className="h-[100%] w-[100%] max-md:w-[75vw] max-sm:w-[100vw] flex flex-col px-16 max-sm:px-8 max-sm:py-16 justify-center z-10">
            <TypographyH1>Digital Dreamers</TypographyH1>
            <TypographyP className="pb-8">
              We are dedicated to helping businesses succeed in the digital
              world. Our team of experts specializes in web development, mobile
              development, copywriting, and social media marketing.
            </TypographyP>
            <Dialog />
          </div>
          <BlueCircle />
        </div>
      </div>

      {/* PAGE TWO */}
      <div className="min-h-[100vh] w-[100vw] bg-white" id="page-two">
        <div className="grid grid-cols-[2fr_1fr] max-sm:grid-cols-1 max-sm:grid-rows-[1fr_auto] h-fit gap-8 p-24 max-sm:px-8 max-sm:py-16">
          <div>
            <TypographyH1 className="text-black">Mobile Apps</TypographyH1>
            <TypographyP className="text-black">
              Unlock the full potential of mobile technology with our
              cutting-edge mobile development solutions. Whether you need a
              sleek <b>Android app</b> or a powerful <b>Hybrid solution</b>, we
              blend innovation, functionality, and seamless design to create
              mobile experiences that leave a lasting impression.
            </TypographyP>

            <TypographyList
              className="text-black"
              data={[
                "Native Android Applications",
                "Hybrid Applications (Android + iOS)",
                "Desktop Applications",
              ]}
            />
          </div>

          <div className="flex items-center justify-center">
            <Image
              alt="ui design of mobile stock trading application"
              src={ImgMobile.src}
              width={ImgMobile.width}
              height={ImgMobile.height}
            />
          </div>
        </div>
      </div>

      {/* PAGE THREE */}
      <div className="min-h-[100vh] h-auto w-[100vw]">
        <div className="p-24 max-sm:px-8 max-sm:py-16">
          <TypographyH1>Websites</TypographyH1>
          <TypographyP className="pb-8">
            We blend creativity, functionality, and user-centric design to
            deliver stunning websites that elevate your brand. From intuitive
            user interfaces to seamless e-commerce integration, our expert team
            creates immersive online experiences that captivate audiences and
            drive tangible results. Partner with us to unlock your online
            potential and leave a lasting impression in the digital realm.
          </TypographyP>

          <Image
            alt="ui design of chat-gpt inspired ai chatbot interface"
            src={ImgWebsite.src}
            width={ImgWebsite.width}
            height={ImgWebsite.height}
          />
        </div>
      </div>

      <div className="min-h-[60vh] h-[100%] w-[100vw] bg-slate-900">
        <div className="md:p-24 max-sm:px-8 max-sm:py-16 md:grid md:grid-cols-4 md:gap-16 flex flex-col items-center gap-8 text-center">
          <div>
            <Image
              src={OgImage.src}
              height={500}
              width={500}
              alt="logo of digital dreamers agency with text"
            ></Image>
          </div>
          <div>
            <TypographyH2>Digital Dreamers</TypographyH2>
            <TypographyP>Build your digital presence with us.</TypographyP>
          </div>
          <div className="flex flex-col gap-4">
            <TypographyH3>Services</TypographyH3>
            <ul className="flex flex-col gap-2">
              <li>Websites</li>
              <li>Mobile Apps</li>
              <li>Digital Marketing</li>
              <li>Copywriting</li>
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <TypographyH3>Contact Us</TypographyH3>
            <ul className="flex flex-col gap-2">
              <li>Support</li>
              <li>Mobile Apps</li>
              <li>Custom Software</li>
              <li>Technical Writing</li>
              <li>Copywriting</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
