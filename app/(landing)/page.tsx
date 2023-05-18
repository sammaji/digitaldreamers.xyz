import Button from "@/components/Button";
import { TypographyH1, TypographyP } from "@/components/Typography";
import ImgWebsite from "@/components/assets/images/website.png"
import React from "react";

export default function page() {
  return (
    <>
      <div className="h-[100vh] w-[100vw]">
        <div className="absolute h-[100vh] w-[100vw] overflow-hidden">
          <div className="h-[100vh] w-[50vw] flex flex-col px-16 justify-center">
            <TypographyH1>
              Build Your Brand <br /> With Us
            </TypographyH1>
            <TypographyP className="pb-8">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic
              dolorum inventore, maiores, voluptates magni ipsa quia nihil omnis
              voluptatum doloribus veritatis rem harum expedita fugit quidem,
              culpa cum sapiente quod.
            </TypographyP>
            <Button>Get Started</Button>
          </div>
          <div className="absolute top-[100%] left-[100%] translate-y-[-60%] translate-x-[-75%] bg-blue-600 h-[100vh] w-[100vh] blur-[18vh] rounded-[100%]"></div>
          <div className="absolute bg-white top-[100%] left-[100%] translate-y-[-60%] translate-x-[-100%] h-[40vh] w-[40vh] blur-[16vh]"></div>
        </div>
      </div>

      <div className="h-[100vh] w-[100vw]">
        <div className="absolute h-[100vh] w-[100vw] overflow-hidden bg-white"></div>
      </div>

      <div className="min-h-[100vh] h-auto w-[100vw]">
          <div className="p-24">
            <TypographyH1>Websites</TypographyH1>
            <TypographyP className="pb-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
              fugit officiis cumque, doloremque repellendus nostrum! Impedit
              velit exercitationem, beatae debitis quae inventore at in
              voluptates neque accusantium consequuntur ab numquam. Lorem ipsum
              dolor sit, amet consectetur adipisicing elit. Suscipit accusantium
              dignissimos eum ratione illum laudantium odit corrupti, ex ducimus
              fuga vel iste maxime eveniet dolore optio facilis, voluptas,
              assumenda impedit.
            </TypographyP>

            <img src={ImgWebsite.src} />
        </div>
      </div>
    </>
  );
}
