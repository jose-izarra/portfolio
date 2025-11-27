import HeroAnimation from "@/components/sections/HeroAnimation";
import Headline from "../Headline";

export default function Hero() {
  return (
    <>
      <header
        className={`h-screen overflow-hidden flex items-center justify-center w-full `}
      >
        <div className="flex mx-auto justify-center items-center">
          <Headline level={1} className="text-7xl text-center z-10">
            Jose Izarra
            <span className="pl-5 inline-block text-light/65 text-base">
              - Software Developer and Creator
            </span>
          </Headline>
          <HeroAnimation />
        </div>
      </header>
    </>
  );
}
