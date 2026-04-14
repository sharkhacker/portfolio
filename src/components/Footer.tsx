"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Eye } from "lucide-react";

export default function Footer() {
  const [visitorCount, setVisitorCount] = useState<number | null>(null);

  useEffect(() => {
    async function trackVisitor() {
      try {
        const res = await fetch("/api/visitors", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            userAgent: navigator.userAgent,
            referrer: document.referrer || null,
            page: window.location.pathname,
          }),
        });
        const data = await res.json();
        if (data.count) {
          setVisitorCount(data.count);
        }
      } catch {
        try {
          const res = await fetch("/api/visitors");
          const data = await res.json();
          if (data.count) setVisitorCount(data.count);
        } catch {
          // noop
        }
      }
    }

    trackVisitor();
  }, []);

  return (
    <footer className="py-6 px-6 border-t border-[var(--border)]">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a href="#" className="font-mono text-sm font-bold text-[var(--text-primary)]">
          SM<span className="text-[var(--accent)]">.</span>
        </a>

        {visitorCount !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2 text-sm text-[var(--text-secondary)]"
          >
            <Eye size={14} className="text-[var(--accent)]" />
            <span className="font-semibold text-[var(--text-primary)]">
              {visitorCount.toLocaleString()}
            </span>
          </motion.div>
        )}

        <p className="text-xs text-[var(--text-secondary)]">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
}
