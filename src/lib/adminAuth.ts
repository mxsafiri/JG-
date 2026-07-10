import { createHmac, timingSafeEqual } from "crypto";
import { cookies } from "next/headers";

// Cookie-based session for the /admin portal.
// Required env: ADMIN_PASSWORD (shared with Jackson Group's editors).

const PASSWORD = process.env.ADMIN_PASSWORD ?? "";
export const authConfigured = PASSWORD.length > 0;

const COOKIE = "jg_admin";

function token(): string {
  return createHmac("sha256", PASSWORD).update("jg-admin-portal").digest("hex");
}

export function checkPassword(input: string): boolean {
  if (!authConfigured) return false;
  const a = Buffer.from(input);
  const b = Buffer.from(PASSWORD);
  return a.length === b.length && timingSafeEqual(a, b);
}

export async function setSession(): Promise<void> {
  (await cookies()).set(COOKIE, token(), {
    httpOnly: true,
    secure: true,
    sameSite: "strict",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
}

export async function isAuthed(): Promise<boolean> {
  if (!authConfigured) return false;
  const c = (await cookies()).get(COOKIE)?.value ?? "";
  const expected = token();
  return (
    c.length === expected.length &&
    timingSafeEqual(Buffer.from(c), Buffer.from(expected))
  );
}
