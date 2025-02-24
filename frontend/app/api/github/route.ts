
import axios from "axios";

if (!process.env.PAT_1) {
    throw new Error("No GitHub PAT found");
}

export async function GET() {
    return axios.get("https://api.github.com/search/commits?q=author:jose-izarra", {
        headers: {
            "Accept": "application/vnd.github.cloak-preview+json",
            "Authorization": `token ${process.env.PAT_1}`,
            "X-GitHub-Api-Version": "2022-11-28"
        }
    })
    .then((res) => {
        const totalCommits = res.data.total_count;
        const commits = res.data.items;

        const sorted_data = commits.sort((a: any, b: any) => {
            // console.log(a.commit.author.date);
            const dateA = new Date(a.commit.author.date);
            const dateB = new Date(b.commit.author.date);
            return dateA.getTime() - dateB.getTime();
        })

        const latest = sorted_data[0];
        const recent = { name: latest.repository.name, url: latest.html_url, isPrivate:  latest.repository.private};

        return Response.json({ commits: totalCommits, recent: recent });
    })
    .catch((err) => {
        console.error(err);
        return Response.json({ error: "Error", recent: { url: null}});
    })


}
