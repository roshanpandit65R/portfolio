import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import dynamic from "next/dynamic";
import RenderModel from "@/components/RenderModel";
import Staff from "@/components/models/Staff";
import AboutDetails from "@/components/about";

// Dynamically import HatModel (with SSR off)
const HatModel = dynamic(() => import("@/components/models/HatModel"), {
  ssr: false,
});

export const metadata = {
  title: "About",
};

export default function Home() {
  return (
    <>
      {/* Background Image */}
      <Image
        src={bg}
        priority
        sizes="100vw"
        alt="Next.js Portfolio website's about page background image"
        className="-z-50 fixed top-0 left-0 w-full h-full object-cover object-center opacity-50"
      />

      {/* Hat Model - Crown Style */}
      <div className="w-full h-[250px] sm:h-[300px] md:h-[350px] absolute top-[15%] left-0 z-20 flex justify-center items-end pointer-events-none">
        <div className="w-[120px] sm:w-[160px] md:w-[200px]">
          <RenderModel>
            <HatModel />
          </RenderModel>
        </div>
      </div>

      {/* Name and Tagline */}
      <div className="relative w-full h-[60vh] flex flex-col items-center justify-center mt-40 z-10">
        <div className="flex flex-col items-center text-center">
          <h1 className="font-bold text-5xl sm:text-6xl md:text-7xl text-accent">
            Roshan Pandit
          </h1>
          <p className="font-light text-foreground text-base sm:text-lg mt-2">
            Meet the wizard behind this portfolio
          </p>
        </div>
      </div>

      {/* Staff Model (Optional) */}
      <div className="flex items-center justify-center fixed top-[80%] left-1/2 -translate-x-1/2 lg:-left-24 -z-10 h-[300px] sm:h-[400px]">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>

      {/* About Content Section */}
      <AboutDetails />
    </>
  );
}
