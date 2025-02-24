import HeroAnimation from "./HeroAnimation";

export default function Hero() {

    return (
        <>
            <header className={`h-[110vh] overflow-hidden flex items-center justify-center w-full `}>
                <div className="flex mx-auto justify-center items-center z-10 ">
                    <h1 className={`text-[5rem] text-center z-10 `}>Jose Izarra
                        <span className={`pl-5 inline-block text-secondary-color text-base`}>- Software Developer and Creator</span>
                    </h1>
                    <HeroAnimation />
                </div>
            </header>
        </>
    );
}
