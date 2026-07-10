"use client";

// Jackson Group's self-service editing portal (/admin).
// Log in with the shared password, edit case studies, press Publish —
// changes commit to GitHub and the site rebuilds automatically (~2 min).

import { useEffect, useState } from "react";
import type { CaseStudy } from "@/data/caseStudies";

const field =
  "w-full bg-white border border-ink/20 px-3 py-2.5 text-ink text-sm focus:outline-none focus:border-ember transition-colors";
const label = "block font-mono text-[11px] uppercase tracking-wide text-ash mb-1.5 mt-4";

export default function AdminPage() {
  const [stage, setStage] = useState<"login" | "loading" | "edit">("login");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [notice, setNotice] = useState("");
  const [cases, setCases] = useState<CaseStudy[]>([]);
  const [sha, setSha] = useState("");
  const [open, setOpen] = useState<number | null>(null);
  const [saving, setSaving] = useState(false);

  async function load() {
    setStage("loading");
    const res = await fetch("/api/admin/content");
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      setError(d.error ?? "Could not load content");
      setStage("login");
      return;
    }
    const d = await res.json();
    setCases(d.cases);
    setSha(d.sha);
    setStage("edit");
  }

  useEffect(() => {
    // If a session cookie already exists, skip the login screen
    fetch("/api/admin/content").then((r) => {
      if (r.ok) r.json().then((d) => { setCases(d.cases); setSha(d.sha); setStage("edit"); });
    });
  }, []);

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (!res.ok) {
      const d = await res.json().catch(() => ({}));
      setError(d.error ?? "Login failed");
      return;
    }
    await load();
  }

  function update(i: number, patch: Partial<CaseStudy>) {
    setCases((cs) => cs.map((c, j) => (j === i ? { ...c, ...patch } : c)));
  }

  function move(i: number, dir: -1 | 1) {
    setCases((cs) => {
      const next = [...cs];
      const j = i + dir;
      if (j < 0 || j >= next.length) return cs;
      [next[i], next[j]] = [next[j], next[i]];
      return next;
    });
    setOpen(null);
  }

  function addCase() {
    setCases((cs) => [
      ...cs,
      { slug: "", client: "", index: "", tags: [], region: "Tanzania", summary: "" },
    ]);
    setOpen(cases.length);
  }

  function removeCase(i: number) {
    if (!confirm(`Remove "${cases[i].client || "this case"}" from the site?`)) return;
    setCases((cs) => cs.filter((_, j) => j !== i));
    setOpen(null);
  }

  async function uploadImage(i: number, file: File) {
    if (file.size > 3 * 1024 * 1024) {
      setError("Image too large — keep it under 3 MB");
      return;
    }
    setNotice("Uploading image…");
    const buf = await file.arrayBuffer();
    const b64 = btoa(new Uint8Array(buf).reduce((s, b) => s + String.fromCharCode(b), ""));
    const res = await fetch("/api/admin/upload", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: file.name, dataBase64: b64 }),
    });
    const d = await res.json();
    if (!res.ok) { setError(d.error ?? "Upload failed"); setNotice(""); return; }
    update(i, { image: d.path });
    setNotice("Image uploaded — remember to press Publish");
  }

  async function publish() {
    setError("");
    setSaving(true);
    // Re-number by position so the order shown here is the order on the site
    const numbered = cases.map((c, i) => ({ ...c, index: String(i + 1).padStart(2, "0") }));
    const res = await fetch("/api/admin/content", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ cases: numbered, sha }),
    });
    const d = await res.json().catch(() => ({}));
    setSaving(false);
    if (!res.ok) { setError(d.error ?? "Publish failed"); return; }
    setNotice("Published ✓ — the site rebuilds and goes live in about 2 minutes.");
    await load();
  }

  if (stage !== "edit") {
    return (
      <div className="mx-auto max-w-sm px-6 py-24">
        <span className="label-mono">[Admin]</span>
        <h1 className="display text-4xl mt-3">Content portal</h1>
        <form onSubmit={login} className="mt-8 flex flex-col gap-3">
          <input
            type="password"
            placeholder="Password"
            className={field}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            disabled={stage === "loading"}
            className="bg-ember text-white font-mono text-sm px-6 py-3 hover:bg-ink transition-colors disabled:opacity-60"
          >
            {stage === "loading" ? "Loading…" : "Log in"}
          </button>
          {error && <p className="text-sm text-ember">{error}</p>}
        </form>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 py-16">
      <span className="label-mono">[Admin]</span>
      <h1 className="display text-4xl mt-3">Case studies</h1>
      <p className="mt-3 text-sm text-ash max-w-xl">
        Reorder with the arrows, click a case to edit, then press Publish.
        Changes appear on the live site roughly two minutes after publishing.
      </p>

      <div className="mt-8 flex flex-col gap-2">
        {cases.map((c, i) => (
          <div key={i} className="bg-white border border-ink/15">
            <div className="flex items-center gap-3 px-4 py-3">
              <span className="font-mono text-xs text-ash w-7">{String(i + 1).padStart(2, "0")}</span>
              <button
                type="button"
                onClick={() => setOpen(open === i ? null : i)}
                className="flex-1 text-left font-medium text-ink hover:text-ember transition-colors"
              >
                {c.client || <span className="text-ash">New case study</span>}
              </button>
              {c.featured && <span className="font-mono text-[10px] text-ember">TILE</span>}
              {c.showcase && <span className="font-mono text-[10px] text-ash">GALLERY</span>}
              <button type="button" onClick={() => move(i, -1)} aria-label="Move up" className="px-1.5 text-ash hover:text-ink">↑</button>
              <button type="button" onClick={() => move(i, 1)} aria-label="Move down" className="px-1.5 text-ash hover:text-ink">↓</button>
            </div>

            {open === i && (
              <div className="border-t border-ink/10 px-4 pb-5">
                <label className={label}>Client / project name</label>
                <input className={field} value={c.client} onChange={(e) => update(i, { client: e.target.value })} />

                <label className={label}>URL slug (letters, numbers, dashes)</label>
                <input className={field} value={c.slug} onChange={(e) => update(i, { slug: e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, "-") })} />

                <label className={label}>Tags (comma-separated)</label>
                <input className={field} value={c.tags.join(", ")} onChange={(e) => update(i, { tags: e.target.value.split(",").map((s) => s.trim()).filter(Boolean) })} />

                <label className={label}>Region</label>
                <input className={field} value={c.region} onChange={(e) => update(i, { region: e.target.value })} />

                <label className={label}>Story</label>
                <textarea rows={6} className={field} value={c.summary} onChange={(e) => update(i, { summary: e.target.value })} />

                <label className={label}>The numbers — one result per line (optional)</label>
                <textarea rows={4} className={field} value={(c.results ?? []).join("\n")} onChange={(e) => update(i, { results: e.target.value.split("\n").map((s) => s.trim()).filter(Boolean) })} />

                <label className={label}>Campaign image</label>
                {c.image && (
                  /* eslint-disable-next-line @next/next/no-img-element */
                  <img src={c.image} alt="" className="h-28 w-auto border border-ink/10 mb-2" />
                )}
                <input
                  type="file"
                  accept="image/jpeg,image/png,image/webp"
                  className="block text-sm text-ash file:mr-3 file:border-0 file:bg-ember file:text-white file:font-mono file:text-xs file:px-4 file:py-2 file:cursor-pointer"
                  onChange={(e) => e.target.files?.[0] && uploadImage(i, e.target.files[0])}
                />

                <div className="flex flex-wrap gap-6 mt-5">
                  <label className="flex items-center gap-2 text-sm text-ink">
                    <input type="checkbox" checked={!!c.featured} onChange={(e) => update(i, { featured: e.target.checked })} />
                    Homepage tile
                  </label>
                  <label className="flex items-center gap-2 text-sm text-ink">
                    <input type="checkbox" checked={!!c.showcase} onChange={(e) => update(i, { showcase: e.target.checked })} />
                    Homepage gallery
                  </label>
                </div>

                {c.showcase && (
                  <>
                    <label className={label}>Gallery label (short line under the name)</label>
                    <input className={field} value={c.galleryLabel ?? ""} onChange={(e) => update(i, { galleryLabel: e.target.value })} />
                  </>
                )}

                <button
                  type="button"
                  onClick={() => removeCase(i)}
                  className="mt-6 font-mono text-xs text-ember hover:underline"
                >
                  Remove this case study
                </button>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-4">
        <button type="button" onClick={addCase} className="font-mono text-sm text-ink border border-ink/25 px-5 py-3 hover:border-ember hover:text-ember transition-colors">
          + Add case study
        </button>
        <button
          type="button"
          onClick={publish}
          disabled={saving}
          className="bg-ember text-white font-mono text-sm px-8 py-3 hover:bg-ink transition-colors disabled:opacity-60"
        >
          {saving ? "Publishing…" : "Publish changes"}
        </button>
      </div>

      {notice && <p className="mt-4 text-sm text-ink/80">{notice}</p>}
      {error && <p className="mt-4 text-sm text-ember">{error}</p>}
    </div>
  );
}
