import Image from "next/image";
import Headline from "../Headline";
import Skills from "../Skills";

const STATS_URL =
  "https://github-readme-stats-git-master-jose-izarras-projects.vercel.app/api/top-langs/?username=jose-izarra&theme=dracula&hide_border=true&include_all_commits=true&count_private=true&layout=compact";
export default function TechStack() {
  return (
    <section className="mx-auto flex max-w-7xl flex-col items-center gap-y-24 px-4">
      <div className="space-y-6 text-center">
        <Headline level={1}>Technologies</Headline>
        <p className="text-light/65 font-lora mx-auto max-w-2xl text-lg italic">
          A collection of languages, tools, and frameworks I have worked with more than twice and
          feel comfortable using.
        </p>
      </div>

      <div className="flex w-full flex-col items-center">
        <Skills className="w-full max-w-5xl px-4" />
      </div>

      <div className="border-light/5 mt-4 flex w-full flex-col items-center gap-8 border-t pt-12">
        <div className="flex flex-col items-center">
          <Headline level={2} className="text-light/60 mb-2 text-xl">
            According to GitHub
          </Headline>
        </div>

        <div className="group relative rounded-xl">
          <div className="from-primary-500 absolute -inset-2 rounded-xl bg-linear-to-r to-purple-600 opacity-20 blur-lg transition duration-700 group-hover:opacity-40"></div>
          <div className="bg-background relative overflow-hidden rounded-xl p-1">
            <Image
              src={STATS_URL}
              alt="Top Languages"
              className="h-auto w-full max-w-100 object-contain"
              width={400}
              height={400}
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
