import { NextResponse } from "next/server";
import { checkPassword, setSession, authConfigured } from "@/lib/adminAuth";

export async function POST(req: Request) {
  if (!authConfigured) {
    return NextResponse.json(
      { error: "Portal not configured: set ADMIN_PASSWORD" },
      { status: 503 },
    );
  }
  const { password } = await req.json().catch(() => ({ password: "" }));
  if (typeof password !== "string" || !checkPassword(password)) {
    return NextResponse.json({ error: "Wrong password" }, { status: 401 });
  }
  await setSession();
  return NextResponse.json({ ok: true });
}
