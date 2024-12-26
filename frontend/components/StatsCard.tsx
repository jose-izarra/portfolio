
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}

interface Stats {
    commits: number;
    favLang: string;
    recent: { name: string, url: string };
    editor: string;
}

export default function StatsCard({ sm, md, lg }: Props) {
    const [ stats, setStats  ] = useState<Stats>({
        commits: 0,
        favLang: "TypeScript",
        recent: { name: "", url: "" },
        editor: "VSCode"
    });

    const classname = cn("w-[350px] rounded-lg border border-darker-primary-color flex flex-col p-3 ", {
        "sm:w-[300px] h-[200px]": sm,
        "md:w-[350px] h-[300px]": md,
        "": lg
    })

    useEffect(() => {
        axios.get("https://api.github.com/search/commits?q=author:jose-izarra", {
            headers: {
                "Accept": "application/vnd.github.cloak-preview+json",
                "Authorization": `token ${process.env.PAT_1}`,
                "X-GitHub-Api-Version": "2022-11-28"
            }
        })
        .then((res) => {
            const totalCommits = res.data.total_count;
            const recent = { name: res.data.items[0].repository.name, url: res.data.items[0].html_url };

            setStats({
                ...stats,
                commits: totalCommits,
                recent: recent
            })

        })
        .catch((err) => {
            console.log(err);
        })

    }, [])


    return (
        <div className={classname}>
            <div className="grid grid-cols-3 gap-x-3 items-center px-5 pt-3 shrink-0">
                <div className="">
                    <a target="_blank" href="https://github.com/jose-izarra">
                        <img
                            src="https://github.com/jose-izarra.png"
                            className="w-14 h-14 rounded-full"
                            alt="Jose Izarra"
                        />
                    </a>
                </div>

                <div className="flex gap-x-4 items-center col-span-2 w-full">
                    <h2 className="text-2xl font-semibold shrink-0"><a target="_blank" href="https://github.com/jose-izarra">jose-izarra</a></h2>
                    <p className="text-2xl">🎯</p>
                </div>

            </div>
            <div className="flex flex-col justify-center gap-y-3 px-4 h-full">
                <div className="flex justify-between">
                    <p className="text-base text-darker-primary-color font-semibold">Commits (2024):</p>
                    <p className="text-lg font-semibold">{stats.commits}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-base text-darker-primary-color font-semibold">Most Used Language:</p>
                    <p className="text-base">{stats.favLang}</p>
                </div>
                <div className="flex justify-between">
                    <p className="text-base text-darker-primary-color font-semibold">Most Recent Commit To:</p>
                    <p className="text-base "><a href={stats.recent.url} target="_blank" >{stats.recent.name}</a></p>
                </div>
                <div className="flex justify-between">
                    <p className="text-base text-darker-primary-color font-semibold">Code Editor:</p>
                    <p className="text-base">{stats.editor}</p>
                </div>
            </div>
        </div>
    )
}
