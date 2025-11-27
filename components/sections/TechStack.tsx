import Headline from "../Headline";
import Skills from "../Skills";

export default function TechStack() {
  return (
    <section className="flex flex-col items-center min-h-[40vh] gap-y-12 mt-12 ">
      <Headline level={1} className="lg:mb-6">
        How I Do
      </Headline>
      <div className="w-full sm:w-[90%] lg:w-11/12 flex flex-col items-center lg:flex-row lg:items-start justify-evenly gap-x-12 gap-y-12 ">
        <div className="lg:h-full w-full lg:w-[50%] flex flex-col sm:flex-row justify-evenly items-center lg:justify-center lg:flex-col h-full">
          <Headline level={2} className="mb-2 sm:w-1/3 lg:w-full">
            *According to{" "}
            <a className="" href="https://github.com/jose-izarra">
              GitHub
            </a>
          </Headline>
          <div className="w-2/3  lg:w-[356px] flex justify-center">
            <img
              src="https://github-readme-stats-git-master-jose-izarras-projects.vercel.app/api/top-langs/?username=jose-izarra&theme=dracula&hide_border=true&include_all_commits=true&count_private=true&layout=compact&exclude_repo=C_whale"
              alt="Top Languages"
              className="w-[356px] lg:w-full h-fit "
              width={356}
              height={356}
            />
          </div>
        </div>
        <div className="w-full lg:w-2/3 flex flex-col items-center sm:flex-row sm:items-center sm:justify-evenly lg:flex-col ">
          <Headline level={2} className="text-light/65 sm:w-1/3 lg:w-full">
            *According to me
          </Headline>
          <Skills />
        </div>
      </div>
    </section>
  );
}
