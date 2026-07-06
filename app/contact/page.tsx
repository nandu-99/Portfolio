"use client";

import { useState } from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";
import NavbarWrapper from "@/components/NavbarWrapper";
import { IconSend } from "@tabler/icons-react";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const formDataString = `Name: ${form.name}\nEmail: ${form.email}\nMessage:\n${form.message}`;

    try {
      const response = await fetch("https://quick-send-mail.vercel.app/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          to: "pvnanda99666@gmail.com",
          subject: "Portfolio Form",
          text: formDataString,
        }),
      });

      if (!response.ok) throw new Error("Failed to send");
      setSent(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-[#09090b] overflow-hidden">
      <BackgroundBeams />
      <NavbarWrapper />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 pt-24 pb-16">
        <div className="w-full max-w-lg flex flex-col items-center text-center gap-10">

          {/* Heading */}
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight bg-clip-text text-transparent whitespace-nowrap"
            style={{
              backgroundImage: "linear-gradient(to bottom, #e5e5e5 0%, #737373 100%)",
            }}
          >
            Send a message
          </h1>

          {/* Form */}
          {sent ? (
            <div className="w-full rounded-2xl border border-white/8 bg-white/2 px-8 py-12 text-center">
              <p className="text-white text-lg font-light mb-2">Message sent!</p>
              <p className="text-neutral-400 text-sm">
                I will get back to you as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-4 text-left">
              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-neutral-500">
                  Name
                </label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-white/20 focus:bg-white/5 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-neutral-500">
                  Email
                </label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-white/20 focus:bg-white/5 transition-colors duration-200"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-xs uppercase tracking-widest text-neutral-500">
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="What would you like to say?"
                  className="w-full rounded-xl border border-white/8 bg-white/3 px-4 py-3 text-sm text-white placeholder-neutral-600 outline-none focus:border-white/20 focus:bg-white/5 transition-colors duration-200 resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-white px-7 py-3 text-sm font-semibold text-black hover:bg-neutral-200 transition self-center disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <IconSend className="h-4 w-4" />
                {loading ? "Sending..." : "Send message"}
              </button>
              {error && (
                <p className="text-xs text-red-400 text-center">{error}</p>
              )}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
