
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
        const recent = { name: res.data.items[0].repository.name, url: res.data.items[0].html_url };

        return Response.json({ commits: totalCommits, recent: recent });

    })
    .catch((err) => {
        return Response.json({ error: "Error" });
    })


}
