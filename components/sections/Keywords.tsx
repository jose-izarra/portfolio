import { cn } from "@/lib/utils";

interface Keywords {
  i: number;
  props: string[];
}

export default function Keywords() {
  const keywords = [
    "growth",
    "mindset",
    "football",
    "dedication",
    "passion",
    "hardwork",
    "teamwork",
    "leadership",
    "innovation",
    "creativity",
    "problem-solving",
    "resilience",
  ];

  const splitKeywords = (keywords: string[]) => {
    const chunkSize = Math.ceil(keywords.length / 3);
    const chunks = [];
    for (let i = 0; i < keywords.length; i += chunkSize) {
      const chunk = keywords.slice(i, i + chunkSize);
      chunks.push(chunk.concat(chunk).concat(chunk));
    }
    return chunks;
  };

  const keywordChunks = splitKeywords(keywords);
  return (
    <section className="w-full min-h-32 flex flex-col items-center max-w-7xl mx-auto">
      <div className="w-[90%]  lg:w-2/3 flex flex-col h-full ">
        <div className="flex flex-col gap-y-10 justify-center items-center overflow-x-hidden w-full">
          {keywordChunks.map((chunk, i) => (
              <MovingWords key={i} props={chunk} i={i} />
            ))}
        </div>
      </div>
    </section>
  );
}

function MovingWords({ props, i }: Keywords) {
  return (
    <div
      className={cn(
        "w-full",
        i % 2 == 0 ? "animate-move-left" : "animate-move-right"
      )}
      data-delay={i}
    >
      <ul
        className={`flex gap-x-8 text-light/65 whitespace-nowrap relative  w-full`}
      >
        {props.map((keyword, index) => (
          <li key={index}>{keyword}</li>
        ))}
        {props.map((keyword, index) => (
          <li key={index} className="aria-hidden">
            {keyword}
          </li>
        ))}
      </ul>
    </div>
  );
}
