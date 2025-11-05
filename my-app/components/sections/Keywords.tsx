// import styles from "@/styles/Keywords.module.css";

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
    <section className="w-full min-h-32 flex flex-col items-center ">
      <div className="w-[90%]  lg:w-2/3 flex flex-col h-full ">
        {/* <h2 className="text-xl font-bold text-primary-text-color text-left">Keywords</h2> */}
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
      //   className={`${styles.keywords} ${
      //     i % 2 == 0 ? styles.left : styles.right
      //   } w-full relative`}
      data-delay={i}
    >
      <ul
        className={`flex gap-x-8 text-secondary-text-color whitespace-nowrap relative  w-full`}
      >
        {props.map((keyword, index) => (
          <li key={index} className="">
            {keyword}
          </li>
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
