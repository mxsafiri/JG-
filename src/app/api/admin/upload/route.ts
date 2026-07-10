import { NextResponse } from "next/server";
import { isAuthed } from "@/lib/adminAuth";
import { writeFile, githubConfigured } from "@/lib/github";

// Accepts a base64 image and commits it to public/media/.
// Keep uploads under ~3 MB (serverless request limit is 4.5 MB).

export async function POST(req: Request) {
  if (!(await isAuthed())) return NextResponse.json({ error: "Unauthorised" }, { status: 401 });
  if (!githubConfigured) return NextResponse.json({ error: "Set GITHUB_TOKEN" }, { status: 503 });

  const { name, dataBase64 } = await req.json();
  if (typeof name !== "string" || typeof dataBase64 !== "string" || !dataBase64) {
    return NextResponse.json({ error: "Missing file" }, { status: 400 });
  }
  if (dataBase64.length > 4_200_000) {
    return NextResponse.json({ error: "Image too large — keep it under 3 MB" }, { status: 413 });
  }

  const safe = name
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/, "")
    .replace(/[^a-z0-9-]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "image";
  const ext = /\.(png|webp)$/i.test(name) ? name.slice(name.lastIndexOf(".")).toLowerCase() : ".jpg";
  const path = `public/media/${safe}-${Math.random().toString(36).slice(2, 7)}${ext}`;

  try {
    await writeFile(path, dataBase64, `Upload ${safe}${ext} via admin portal`);
  } catch (e) {
    return NextResponse.json({ error: String(e) }, { status: 502 });
  }
  return NextResponse.json({ ok: true, path: path.replace("public", "") });
}
