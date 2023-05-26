import Button from "@/components/Button";
import { TypographyH1, TypographyP } from "@/components/Typography";

import ImgLanding from "@/assets/images/landing_2.png";
import ImgWebsite from "@/assets/images/website_2.png";
import ImgMobile from "@/assets/images/mobile_2.png";
import BlueCircle from "@/components/BlueCircle";

export default function page() {
  return (
    <>
      {/* PAGE ONE */}
      <div className="h-[100vh] w-[100vw]">
        <div className="absolute h-[100vh] w-[100vw] overflow-hidden grid grid-rows-1 grid-cols-2">
          <div className="h-[56px] w-[100vw] flex items-center px-16 gap-8 col-span-2">
            <a className="text-sm font-medium leading-none">Services</a>
            <a className="text-sm font-medium leading-none">Contact</a>
          </div>
          <div className="h-[100vh] w-[50vw] max-md:w-[75vw] max-sm:w-[100vw] flex flex-col px-16 justify-center">
            <TypographyH1>
              Digital Dreamers <br />
            </TypographyH1>
            <TypographyP className="pb-8">
              We create your brand with extreme innovation and eye-catchy creativity. Our service ranges from Website Creation, Mobile App Development to Social Media Management, Content Creation and Business Strategy Analytics.
            </TypographyP>
            <Button>Get Started</Button>
          </div>

          <div className="img-landing h-[100vh] w-[50vw] max-md:w-[75vw] max-sm:w-[100vw] flex flex-col justify-center">
            <img src={ImgLanding.src} className=" max-sm:hidden"/>
          </div>

          <BlueCircle />
        </div>
      </div>

      {/* PAGE TWO */}
      <div className="h-[100vh] w-[100vw] bg-white">
        <div className="grid grid-cols-[2fr_1fr] max-sm:grid-cols-1 max-sm:grid-rows-[1fr_auto] h-fit gap-16 p-24">
          <div>
            <TypographyH1 className="text-black">Mobile Apps</TypographyH1>
            <TypographyP className="text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              neque praesentium ex, temporibus est nihil officia? A quod
              doloribus debitis, voluptatem, veritatis eaque reprehenderit
              corrupti maxime ea tempore quam perferendis!
            </TypographyP>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={ImgMobile.src}
              className="h-[400px] mobile-img rounded-lg"
            />
          </div>
        </div>
      </div>

      {/* PAGE THREE */}
      <div className="min-h-[100vh] h-auto w-[100vw]">
        <div className="p-24">
          <TypographyH1>Websites</TypographyH1>
          <TypographyP className="pb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            fugit officiis cumque, doloremque repellendus nostrum! Impedit velit
            exercitationem, beatae debitis quae inventore at in voluptates neque
            accusantium consequuntur ab numquam. Lorem ipsum dolor sit, amet
            consectetur adipisicing elit. Suscipit accusantium dignissimos eum
            ratione illum laudantium odit corrupti, ex ducimus fuga vel iste
            maxime eveniet dolore optio facilis, voluptas, assumenda impedit.
          </TypographyP>

          <img src={ImgWebsite.src} className="rounded-xl" />
        </div>
      </div>
    </>
  );
}
