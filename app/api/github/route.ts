import axios from "axios";
import { CommitResponse } from "./types";

if (!process.env.PAT_1) {
  throw new Error("No GitHub PAT found");
}

export async function GET() {
  return axios
    .get("https://api.github.com/search/commits?q=author:jose-izarra&sort=author-date&order=desc", {
      headers: {
        Accept: "application/vnd.github.cloak-preview+json",
        Authorization: `token ${process.env.PAT_1}`,
        "X-GitHub-Api-Version": "2022-11-28",
      },
    })
    .then((res) => {
      const data: CommitResponse = res.data;
      const totalCommits = data.total_count;
      const commits = data.items;

      const latest = commits[0];
      const recent = {
        name: latest.repository.name,
        url: latest.html_url,
        isPrivate: latest.repository.private,
      };

      return Response.json({ commits: totalCommits, recent: recent });
    })
    .catch((err) => {
      console.error(err);
      return Response.json({ error: "Error", recent: { url: null } });
    });
}
