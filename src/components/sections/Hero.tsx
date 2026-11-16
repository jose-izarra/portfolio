import HeroAnimation from "@/components/sections/HeroAnimation";
import Headline from "../Headline";

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <header className={`flex h-screen w-full items-center justify-center`}>
        <div className="mx-auto flex items-center justify-center">
          <Headline level={1} className="z-10 text-center text-7xl">
            Jose Izarra
            <span className="text-light/65 inline-block pl-5 text-base">
              - Software Developer and Creator
            </span>
          </Headline>
          <HeroAnimation />
        </div>
      </header>
    </div>
  );
}
