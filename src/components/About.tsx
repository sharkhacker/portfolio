"use client";

import { motion } from "framer-motion";
import { Database, Brain, Boxes } from "lucide-react";
import SectionHeading from "./SectionHeading";

const pillars = [
  {
    icon: Database,
    title: "Backend & Data",
    description:
      "CDC pipelines, clickstream infrastructure, data archival systems, and SQL optimization. MongoDB to Postgres, Apache Beam on AWS/GCP, real-time dashboards.",
  },
  {
    icon: Brain,
    title: "AI & Automation",
    description:
      "Agentic AI workflows on Salesforce and Slack. AI call analysis against sales playbooks. Workato automations for support docs. 50% capacity reclaimed, 40% less manual coaching.",
  },
  {
    icon: Boxes,
    title: "Product & Analytics",
    description:
      "Behavior analysis that drove 60% more orders. Relevance ranking that boosted engagement 55%. Unified tracking across Mixpanel, Amplitude, GA, WebEngage, and MetaAds.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading title="About" subtitle="What I do and how I do it." />

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              I&apos;m a software engineer focused on{" "}
              <span className="text-[var(--text-primary)] font-medium">backend systems</span>,{" "}
              <span className="text-[var(--text-primary)] font-medium">data infrastructure</span>,{" "}
              <span className="text-[var(--text-primary)] font-medium">AI automation</span>, and{" "}
              <span className="text-[var(--text-primary)] font-medium">product analytics</span>.
              Everything I build has a number attached to it.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6">
              At Furrl, I built CDC pipelines, clickstream systems, and a product ranking engine
              that increased engagement by 55% and order rates by 60%. At SingleStore, I designed
              an agentic AI layer that reclaimed 50% of sales reps&apos; time.
            </p>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed">
              I care about shipping things that actually change how a team operates or how users
              behave. Not just writing code, but making sure that code shows up in the metrics.
            </p>
          </motion.div>

          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-[var(--accent)]/5 rounded-lg group-hover:bg-[var(--accent)]/10 transition-colors">
                    <pillar.icon
                      size={24}
                      className="text-[var(--accent)]"
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{pillar.title}</h3>
                    <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
