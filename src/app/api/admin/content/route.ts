import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/adminAuth";
import { readFile, writeFile, githubConfigured } from "@/lib/github";

const PATH = "content/cases.json";

export async function GET() {
  if (!(await isAuthed())) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  if (!githubConfigured) return NextResponse.json({ error: "Set GITHUB_TOKEN" }, { status: 503 });
  try {
    const { content, sha } = await readFile(PATH);
    return NextResponse.json({ cases: JSON.parse(content), sha });
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 502 });
  }
}

export async function PUT(req: Request) {
  if (!(await isAuthed())) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  if (!githubConfigured) return NextResponse.json({ error: "Set GITHUB_TOKEN" }, { status: 503 });

  const { cases, sha } = await req.json();
  if (!Array.isArray(cases) || cases.some((c) => !c?.slug || !c?.client || !c?.summary)) {
    return NextResponse.json(
      { error: "Every case needs at least a slug, client name, and story" },
      { status: 400 },
    );
  }

  const body = JSON.stringify(cases, null, 2) + "\n";
  try {
    await writeFile(
      PATH,
      Buffer.from(body).toString("base64"),
      "Update case studies via admin portal",
      sha,
    );
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
