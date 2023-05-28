"use client";
import dynamic from "next/dynamic";
const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

import Button from "@/components/Button";
import {
  TypographyH1,
  TypographyList,
  TypographyP,
} from "@/components/Typography";

import ImgWebsite from "@/assets/images/website.png";
import ImgMobile from "@/assets/images/mobile.png";
import BlueCircle from "@/components/BlueCircle";
import Image from "next/image";

export default function page() {
  return (
    <>
      <AnimatedCursor
        innerSize={16}
        innerScale={0}
        innerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
        outerStyle={{
          backgroundColor: "#fff",
          mixBlendMode: "exclusion",
        }}
        trailingSpeed={16}
        clickables={["a", "button", "div.bg-image", "h1", "img"]}
      />
      {/* PAGE ONE */}
      <div className="h-[100vh] w-[100vw]" id="page-one">
        <div className="absolute h-[100vh] w-[100vw] overflow-hidden grid grid-rows-[56px_1fr] grid-cols-2 max-md:grid-cols-1">
          <div className="absolute h-[100vh] w-[100vw] bg-image-2 opacity-20"></div>
          <div className="h-[100%] w-[100%] flex items-center px-16 max-sm:px-8 gap-8 max-sm:gap-4 z-10">
            <a href="#page-two" className="text-sm font-medium leading-none">
              Services
            </a>
            <a href="#" className="text-sm font-medium leading-none">
              Contact
            </a>
          </div>
          <div className="h-[100vh] w-[50vw] max-md:hidden flex flex-col row-span-2 justify-center bg-image">
            {/* <img src={ImgLanding.src} className=" max-sm:hidden" /> */}
          </div>
          <div className="h-[100%] w-[100%] max-md:w-[75vw] max-sm:w-[100vw] flex flex-col px-16 max-sm:px-8 max-sm:py-16 justify-center z-10">
            <TypographyH1>
              {/* Build Your Brand <br /> With Us */}
              Lorem Ipsum
            </TypographyH1>
            <TypographyP className="pb-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </TypographyP>
            <Button>Get Started</Button>
          </div>
          <BlueCircle />
        </div>
      </div>

      {/* PAGE TWO */}
      <div className="min-h-[100vh] w-[100vw] bg-white" id="page-two">
        <div className="grid grid-cols-[2fr_1fr] max-sm:grid-cols-1 max-sm:grid-rows-[1fr_auto] h-fit gap-8 p-24 max-sm:px-8 max-sm:py-16">
          <div>
            <TypographyH1 className="text-black">Mobile Apps</TypographyH1>
            {/* <TypographyP className="text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              neque praesentium ex, temporibus est nihil officia? A quod
              doloribus debitis, voluptatem, veritatis eaque reprehenderit
              corrupti maxime ea tempore quam perferendis!
            </TypographyP> */}

            <TypographyP className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
              nisi ut aliquip ex ea commodo consequat.
            </TypographyP>

            {/* <TypographyLead/> */}
            {/* <div>
              <MdCheck color="#03C04A"/><TypographyP className="text-black">Native Android Applications</TypographyP>
              <MdCheck color="#03C04A"/><TypographyP className="text-black">{`Hybrid Applications (Android + iOS)`}</TypographyP>
              <MdCheck color="#03C04A"/><TypographyP className="text-black">Desktop Applications</TypographyP>
            </div> */}

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
            {/* <img
              src={ImgMobile.src}
              className="h-[400px] mobile-img rounded-lg max-sm:hidden"
            /> */}

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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </TypographyP>

          <img
            src={ImgWebsite.src}
            className="rounded-xl"
            style={{ border: "2px rgba(225,225,225, 0.24) solid" }}
          />
        </div>
      </div>
    </>
  );
}
