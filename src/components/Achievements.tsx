"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Code2, GraduationCap } from "lucide-react";
import SectionHeading from "./SectionHeading";

const achievements = [
  {
    icon: Trophy,
    title: "LeetCode Knight",
    description: "Top 1.8% globally with a 2072 rating among 718,000+ programmers.",
    metric: "2072",
    metricLabel: "Rating",
  },
  {
    icon: Award,
    title: "LeetCode Contest 366",
    description: "Global Rank 243 out of 25,000+ participants.",
    metric: "243",
    metricLabel: "Global Rank",
  },
  {
    icon: Code2,
    title: "900+ Problems Solved",
    description:
      "700+ on LeetCode, 200+ on GeeksForGeeks. Data structures, algorithms, system design.",
    metric: "900+",
    metricLabel: "Problems",
  },
  {
    icon: Award,
    title: "Meta Hacker Cup 2022",
    description: "Ranked 1541 out of 27,600+ participants globally.",
    metric: "1541",
    metricLabel: "Global Rank",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Achievements"
          subtitle="Competitive programming and education."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 bg-[var(--accent)]/5 rounded-lg">
              <GraduationCap size={24} className="text-[var(--accent)]" />
            </div>
            <div>
              <h3 className="text-xl font-bold">
                Indian Institute of Information Technology
              </h3>
              <p className="text-[var(--text-secondary)] mt-1">
                Bachelor of Technology in Computer Science
              </p>
              <div className="flex items-center gap-4 mt-2 text-sm text-[var(--text-secondary)]">
                <span className="font-medium text-[var(--accent)]">
                  CGPA: 8.43
                </span>
                <span>&middot;</span>
                <span>Dec 2020 - Aug 2024</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {achievements.map((ach, index) => (
            <motion.div
              key={ach.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/20 hover:shadow-md transition-all duration-300 text-center group"
            >
              <div className="inline-flex p-3 bg-[var(--accent)]/5 rounded-full mb-4 group-hover:bg-[var(--accent)]/10 transition-colors">
                <ach.icon size={24} className="text-[var(--accent)]" />
              </div>
              <div className="text-3xl font-bold gradient-text mb-1">
                {ach.metric}
              </div>
              <div className="text-xs uppercase tracking-wider text-[var(--text-secondary)] font-medium mb-3">
                {ach.metricLabel}
              </div>
              <h3 className="font-semibold text-sm mb-1">{ach.title}</h3>
              <p className="text-xs text-[var(--text-secondary)] leading-relaxed">
                {ach.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
