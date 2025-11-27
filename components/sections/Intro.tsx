import Headline from "../Headline";

export default function Intro() {
  return (
    <section className="flex flex-col items-center min-h-[40vh] gap-y-6 max-w-7xl mx-auto">
      <Headline level={1} className="lg:mb-6">
        What I Do
      </Headline>
      <div className="w-full sm:w-[90%] lg:w-9/12 flex gap-y-2 lg:gap-y-12 justify-center">
        <div className="md:hidden mx-5">
          <p>
            I&apos;m Jose Izarra, a software developer passionate about creating
            projects no one has ever done before. I do full stack, random
            projects I find interesting and study for uni at the moment.{" "}
            Currently pursuing a Computer Science degree and working at a
            startup. Developing software for over 4 years now.
          </p>
        </div>

        <div className="hidden md:flex gap-y-6  w-full justify-evenly">
          <div className="flex flex-col gap-y-28">
            <div className="w-[356px] self-center hidden md:block ">
              <p className=" font-medium">
                I&apos;m Jose Izarra, a software developer passionate about
                creating projects no one has ever done before
              </p>
            </div>
            <div className="w-[356px] justify-center hidden md:flex ">
              <p className="">
                Currently pursuing a Computer Science degree and working at a
                startup
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:mt-28 gap-y-28">
            <div className="w-[356px] hidden md:block ">
              <p className="font-light">
                I do full stack, random projects I find interesting and study
                for uni at the moment
              </p>
            </div>

            <div className="w-[356px] hidden md:flex ">
              <p className="">Developing software for over 4 years now</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
