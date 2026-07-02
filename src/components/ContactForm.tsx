"use client";

import { useState } from "react";
import { site } from "@/data/site";

// The client said they will confirm which fields to collect ("We will share
// the info to be collected") — adjust this list when that arrives.
// Until a form backend is chosen, submissions open a pre-filled email to
// the agency inbox, so the form works with zero infrastructure.
export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`New project enquiry — ${form.name}${form.company ? `, ${form.company}` : ""}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nCompany: ${form.company}\n\n${form.message}`
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
  }

  const field =
    "w-full bg-white/5 border border-white/15 px-4 py-3.5 text-white placeholder:text-ash focus:outline-none focus:border-ember transition-colors";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 lg:mt-14">
      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-ash">Name</span>
        <input
          required
          type="text"
          placeholder="Your name"
          className={field}
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-ash">E-mail</span>
        <input
          required
          type="email"
          placeholder="Your e-mail"
          className={field}
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-ash">Company</span>
        <input
          type="text"
          placeholder="Your company"
          className={field}
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />
      </label>

      <label className="flex flex-col gap-2">
        <span className="font-mono text-xs text-ash">Message</span>
        <textarea
          required
          rows={5}
          placeholder="Tell us about your goals"
          className={field}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
        />
      </label>

      <button
        type="submit"
        className="mt-2 bg-ember text-white font-mono text-sm px-8 py-4 hover:bg-white hover:text-ink transition-colors w-fit"
      >
        Send message →
      </button>
    </form>
  );
}
