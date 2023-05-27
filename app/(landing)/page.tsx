import Button from "@/components/Button";
import {
  TypographyH1,
  TypographyList,
  TypographyP,
} from "@/components/Typography";

import ImgWebsite from "@/assets/images/website.png";
import ImgMobile from "@/assets/images/mobile.png";
import BlueCircle from "@/components/BlueCircle";

export default function page() {
  return (
    <>
      {/* PAGE ONE */}
      <div className="h-[100vh] w-[100vw]">
        <div className="absolute h-[100vh] w-[100vw] overflow-hidden grid grid-rows-[56px_1fr] grid-cols-2 max-md:grid-cols-1 bg-image-2">
          <div className="h-[100%] w-[100%] flex items-center px-16 gap-8">
            <a href="#" className="text-sm font-medium leading-none">
              Services
            </a>
            <a href="#" className="text-sm font-medium leading-none">
              Contact
            </a>
          </div>
          <div className="h-[100vh] w-[50vw] max-md:hidden flex flex-col row-span-2 justify-center bg-image">
            {/* <img src={ImgLanding.src} className=" max-sm:hidden" /> */}
          </div>

          <div className="h-[100%] w-[100%] max-md:w-[75vw] max-sm:w-[100vw] flex flex-col px-16 justify-center">
            <TypographyH1>
              {/* Build Your Brand <br /> With Us */}
              Digital Dreamers
            </TypographyH1>
            <TypographyP className="pb-8">
              We create your brand with extreme innovation and eye-catchy
              creativity. Our service ranges from Website Creation, Mobile App
              Development to Social Media Management, Content Creation and
              Business Strategy Analytics.
            </TypographyP>
            <Button>Get Started</Button>
          </div>

          <BlueCircle />
        </div>
      </div>

      {/* PAGE TWO */}
      <div className="h-[100vh] w-[100vw] bg-white">
        <div className="grid grid-cols-[2fr_1fr] max-sm:grid-cols-1 max-sm:grid-rows-[1fr_auto] h-fit gap-16 p-24">
          <div>
            <TypographyH1 className="text-black">Mobile Apps</TypographyH1>
            {/* <TypographyP className="text-black">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui
              neque praesentium ex, temporibus est nihil officia? A quod
              doloribus debitis, voluptatem, veritatis eaque reprehenderit
              corrupti maxime ea tempore quam perferendis!
            </TypographyP> */}

            <TypographyP className="text-black">
              Unlock the full potential of mobile technology with our
              cutting-edge mobile development solutions. Whether you need a
              sleek <b>Android app</b> or a powerful <b>Hybrid solution</b>, we
              blend innovation, functionality, and seamless design to create
              mobile experiences that leave a lasting impression.
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
            <img
              src={ImgMobile.src}
              className="h-[400px] mobile-img rounded-lg max-sm:hidden"
            />
          </div>
        </div>
      </div>

      {/* PAGE THREE */}
      <div className="min-h-[100vh] h-auto w-[100vw]">
        <div className="p-24">
          <TypographyH1>Websites</TypographyH1>
          <TypographyP className="pb-8">
            We blend creativity, functionality, and user-centric design to
            deliver stunning websites that elevate your brand. From intuitive
            user interfaces to seamless e-commerce integration, our expert team
            creates immersive online experiences that captivate audiences and
            drive tangible results. Partner with us to unlock your online
            potential and leave a lasting impression in the digital realm.
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
