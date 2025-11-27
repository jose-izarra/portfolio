import Headline from "../Headline";

export default function Intro() {
  return (
    <section className="mx-auto flex min-h-[40vh] max-w-7xl flex-col items-center gap-y-6">
      <Headline level={1} className="lg:mb-6">
        What I Do
      </Headline>
      <div className="flex w-full justify-center gap-y-2 sm:w-[90%] lg:w-9/12 lg:gap-y-12">
        <div className="mx-5 md:hidden">
          <p>
            I&apos;m Jose Izarra, a software developer passionate about creating projects no one has
            ever done before. I do full stack, random projects I find interesting and study for uni
            at the moment. Currently pursuing a Computer Science degree and working at a startup.
            Developing software for over 4 years now.
          </p>
        </div>

        <div className="hidden w-full justify-evenly gap-y-6 md:flex">
          <div className="flex flex-col gap-y-28">
            <div className="hidden w-[356px] self-center md:block">
              <p className="text-center font-medium">
                I&apos;m Jose Izarra, a software developer passionate about creating projects no one
                has ever done before
              </p>
            </div>
            <div className="hidden w-[356px] justify-center md:flex">
              <p className="text-center">
                Currently pursuing a Computer Science degree and working at a startup
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-y-28 lg:mt-28">
            <div className="hidden w-[356px] md:block">
              <p className="text-center font-light">
                I do full stack, random projects I find interesting and study for uni at the moment
              </p>
            </div>

            <div className="hidden w-[356px] md:flex">
              <p className="text-center">Developing software for over 4 years now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
