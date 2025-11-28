import MovingWords from "../MovingWords";

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
  "adaptability",
  "curiosity",
  "persistence",
];

const splitKeywords = (keywords: string[]) => {
  const chunkSize = Math.ceil(keywords.length / 3);
  const chunks = [];
  for (let i = 0; i < keywords.length; i += chunkSize) {
    const chunk = keywords.slice(i, i + chunkSize);
    chunks.push(chunk);
  }
  return chunks;
};

export default function Keywords() {
  const wordsArray = splitKeywords(keywords);
  return (
    <section className="mx-auto flex min-h-32 w-full max-w-7xl flex-col items-center">
      <div className="relative flex h-full w-9/10 flex-col lg:w-2/3">
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-linear-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-linear-to-l from-background to-transparent" />

        <div className="flex w-full flex-col items-center justify-center gap-y-8 overflow-x-hidden">
          {wordsArray.map((words, i) => (
            <MovingWords
              key={i}
              words={words}
              direction={i % 2 === 0 ? -1 : 1}
              speed={10 + i * 5}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
