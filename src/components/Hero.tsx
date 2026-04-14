"use client";

import { motion } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { LinkedInIcon, LeetCodeIcon, GitHubIcon, RedditIcon } from "./Icons";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)]" />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[var(--accent)] rounded-full opacity-[0.04] blur-3xl" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-[var(--teal)] rounded-full opacity-[0.04] blur-3xl" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[var(--bg-surface)] border border-[var(--border)] rounded-full text-sm text-[var(--text-secondary)] mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            Backend &middot; Data &middot; AI &middot; Product
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] mb-6"
        >
          Build | Measure | Iterate
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-[var(--text-secondary)] font-light max-w-2xl mx-auto mb-4"
        >
          I build{" "}
          <span className="gradient-text font-medium">product features</span>,{" "}
          <span className="gradient-text font-medium">AI agents</span>, and{" "}
          <span className="gradient-text font-medium">data pipelines</span>{" "}
          that drive real metrics.
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-base text-[var(--text-secondary)] opacity-70 mb-10"
        >
          Open to interesting problems, collaborations, and new opportunities.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-wrap items-center justify-center gap-3 mb-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-[var(--accent)] text-white rounded-lg font-medium hover:bg-[var(--accent-hover)] transition-all duration-200 shadow-lg shadow-[var(--accent)]/20"
          >
            <Mail size={18} />
            Get in Touch
          </a>
          <a
            href="https://www.linkedin.com/in/shrikantmore99/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] rounded-lg font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          >
            <LinkedInIcon size={18} />
            LinkedIn
          </a>
          <a
            href="https://github.com/sharkhacker"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] rounded-lg font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          >
            <GitHubIcon size={18} />
            GitHub
          </a>
          <a
            href="https://leetcode.com/u/sshrikantm28/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] rounded-lg font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          >
            <LeetCodeIcon size={18} />
            LeetCode
          </a>
          <a
            href="https://www.reddit.com/user/Ok-Assistance9170/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 bg-[var(--bg-surface)] border border-[var(--border)] text-[var(--text-primary)] rounded-lg font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-all duration-200"
          >
            <RedditIcon size={18} />
            Reddit
          </a>
        </motion.div>

      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <a href="#about" className="text-[var(--text-secondary)] hover:text-[var(--accent)] transition-colors">
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}
