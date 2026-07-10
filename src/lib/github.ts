// Minimal GitHub Contents API helper for the /admin portal.
// Saves commit straight to the repo; Vercel redeploys automatically.
// Required env: GITHUB_TOKEN (fine-grained PAT, Contents read/write on the
// site repo). Optional: GITHUB_REPO (owner/name), GITHUB_BRANCH.

const REPO = process.env.GITHUB_REPO ?? "mxsafiri/JG-";
const BRANCH = process.env.GITHUB_BRANCH ?? "main";
const TOKEN = process.env.GITHUB_TOKEN ?? "";

export const githubConfigured = TOKEN.length > 0;

const API = `https://api.github.com/repos/${REPO}/contents`;

const headers = () => ({
  Authorization: `Bearer ${TOKEN}`,
  Accept: "application/vnd.github+json",
  "X-GitHub-Api-Version": "2022-11-28",
});

export async function readFile(path: string): Promise<{ content: string; sha: string }> {
  const res = await fetch(`${API}/${path}?ref=${BRANCH}`, {
    headers: headers(),
    cache: "no-store",
  });
  if (!res.ok) throw new Error(`GitHub read failed (${res.status})`);
  const data = await res.json();
  return {
    content: Buffer.from(data.content, "base64").toString("utf8"),
    sha: data.sha,
  };
}

export async function writeFile(
  path: string,
  contentBase64: string,
  message: string,
  sha?: string,
): Promise<void> {
  const res = await fetch(`${API}/${path}`, {
    method: "PUT",
    headers: { ...headers(), "Content-Type": "application/json" },
    body: JSON.stringify({
      message,
      content: contentBase64,
      branch: BRANCH,
      ...(sha ? { sha } : {}),
    }),
  });
  if (!res.ok) {
    const body = await res.text();
    throw new Error(`GitHub write failed (${res.status}): ${body.slice(0, 200)}`);
  }
}
