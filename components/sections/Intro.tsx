import Headline from "../Headline";

const introContent = {
  headline: "What I Do",
  mobile:
    "I'm Jose Izarra, a software developer passionate about creating projects no one has ever done before. I do full stack, random projects I find interesting and study for uni at the moment. Currently pursuing a Computer Science degree and working at a startup. Developing software for over 4 years now.",
  desktop: {
    leftTop:
      "I'm Jose Izarra, a software developer passionate about creating projects no one has ever done before",
    leftBottom:
      "Currently pursuing a Computer Science degree and working at a startup",
    rightTop:
      "I do full stack, random projects I find interesting and study for uni at the moment",
    rightBottom: "Developing software for over 4 years now",
  },
};

export default function Intro() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-y-6">
      <Headline level={1} className="lg:mb-6">
        {introContent.headline}
      </Headline>
      <div className="flex w-full justify-center gap-y-2 sm:w-[90%] lg:w-9/12 lg:gap-y-12">
        <div className="mx-5 text-center md:hidden ">
          <p >{introContent.mobile}</p>
        </div>

        <div className="hidden w-full justify-evenly gap-y-6 md:flex">
          <div className="flex flex-col gap-y-28">
            <div className="hidden w-[356px] self-center md:block">
              <p className="text-center font-medium">
                {introContent.desktop.leftTop}
              </p>
            </div>
            <div className="hidden w-[356px] justify-center md:flex">
              <p className="text-center">{introContent.desktop.leftBottom}</p>
            </div>
          </div>
          <div className="flex flex-col gap-y-28 lg:mt-28">
            <div className="hidden w-[356px] md:block">
              <p className="text-center font-light">
                {introContent.desktop.rightTop}
              </p>
            </div>

            <div className="hidden w-[356px] md:flex">
              <p className="text-center">{introContent.desktop.rightBottom}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
