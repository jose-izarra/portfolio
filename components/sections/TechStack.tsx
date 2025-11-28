import Image from "next/image";
import Headline from "../Headline";
import Skills from "../Skills";

const STATS_URL = "https://github-readme-stats-git-master-jose-izarras-projects.vercel.app/api/top-langs/?username=jose-izarra&theme=dracula&hide_border=true&include_all_commits=true&count_private=true&layout=compact";
export default function TechStack() {
  return (
    <section className="flex flex-col items-center  gap-y-24 max-w-7xl mx-auto px-4 py-20">
      <div className="text-center space-y-6">
        <Headline level={1}>
           Technologies
        </Headline>
        <p className="text-lg text-light/65 max-w-2xl font-lora italic mx-auto">
           A collection of languages, tools, and frameworks I have worked with and feel comfortable using.
        </p>
      </div>

      <div className="w-full flex flex-col items-center">
         <Skills className="w-full max-w-5xl px-4" />
      </div>

      <div className="w-full flex flex-col items-center gap-8 mt-4 pt-12 border-t border-light/5">
          <div className="flex flex-col items-center">
            <Headline level={2} className="mb-2 text-light/60 text-xl">
                According to GitHub
            </Headline>
          </div>

          <div className="relative group rounded-xl">
            <div className="absolute -inset-2 bg-linear-to-r from-primary-500 to-purple-600 rounded-xl blur-lg opacity-20 group-hover:opacity-40 transition duration-700"></div>
            <div className="relative bg-background p-1 rounded-xl overflow-hidden">
                <Image
                  src={STATS_URL}
                  alt="Top Languages"
                  className="w-full max-w-100 h-auto object-contain"
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
