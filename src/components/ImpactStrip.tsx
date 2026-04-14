"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, target]);

  return (
    <span ref={ref} className="font-bold text-4xl md:text-5xl gradient-text">
      {count}
      {suffix}
    </span>
  );
}

const metrics = [
  { value: 4, suffix: "+", label: "Years of Experience" },
  { value: 50, suffix: "%", label: "Sales Capacity Reclaimed" },
  { value: 60, suffix: "%", label: "Order Rate Improvement" },
  { value: 900, suffix: "+", label: "DSA Problems Solved" },
];

export default function ImpactStrip() {
  return (
    <section className="py-16 px-6 border-y border-[var(--border)]">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <AnimatedCounter target={metric.value} suffix={metric.suffix} />
              <p className="text-sm text-[var(--text-secondary)] mt-2 font-medium">
                {metric.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
