"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle, ArrowUpRight } from "lucide-react";
import { LinkedInIcon, RedditIcon } from "./Icons";

const socials = [
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    handle: "shrikantmore99",
    href: "https://www.linkedin.com/in/shrikantmore99/",
  },
  {
    icon: RedditIcon,
    label: "Reddit",
    handle: "Ok-Assistance9170",
    href: "https://www.reddit.com/user/Ok-Assistance9170/",
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (res.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6 bg-[var(--bg-surface)]">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Let&apos;s Talk
          </h2>
          <p className="text-lg text-[var(--text-secondary)] max-w-xl mx-auto">
            Open to interesting problems, collaborations, and new opportunities.
          </p>
          <div className="mt-4 h-1 w-16 bg-gradient-to-r from-[var(--accent)] to-[var(--teal)] rounded-full mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-lg font-semibold mb-6">Send me a message</h3>

            {status === "sent" ? (
              <div className="flex flex-col items-center justify-center gap-3 p-12 bg-[var(--bg-primary)] border border-[var(--teal)]/30 rounded-xl text-center">
                <CheckCircle size={40} className="text-[var(--teal)]" />
                <p className="font-medium text-lg">Message sent!</p>
                <p className="text-sm text-[var(--text-secondary)]">
                  I&apos;ll get back to you soon.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-[var(--accent)] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1.5">
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1.5">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 transition-all"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1.5">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] placeholder:text-[var(--text-secondary)]/50 focus:outline-none focus:border-[var(--accent)] focus:ring-1 focus:ring-[var(--accent)]/20 transition-all resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                {status === "error" && (
                  <p className="text-sm text-red-500">
                    Something went wrong. Try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send size={16} />
                  {status === "sending" ? "Sending..." : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>

          {/* Links + email */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6"
          >
            <h3 className="text-lg font-semibold mb-6">Or reach out directly</h3>

            <a
              href="mailto:sshrikantm28@gmail.com"
              className="group flex items-center gap-4 p-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="p-3 bg-[var(--accent)]/5 rounded-lg group-hover:bg-[var(--accent)]/10 transition-colors">
                <Mail size={20} className="text-[var(--accent)]" />
              </div>
              <div className="flex-1">
                <p className="font-medium text-sm">Email</p>
                <p className="text-xs text-[var(--text-secondary)]">sshrikantm28@gmail.com</p>
              </div>
              <ArrowUpRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
            </a>

            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 p-5 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300"
              >
                <div className="p-3 bg-[var(--accent)]/5 rounded-lg group-hover:bg-[var(--accent)]/10 transition-colors">
                  <social.icon size={20} className="text-[var(--accent)]" />
                </div>
                <div className="flex-1">
                  <p className="font-medium text-sm">{social.label}</p>
                  <p className="text-xs text-[var(--text-secondary)]">{social.handle}</p>
                </div>
                <ArrowUpRight size={16} className="text-[var(--text-secondary)] group-hover:text-[var(--accent)] transition-colors" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
