"use client";

import { motion } from "framer-motion";
import {
  Bot,
  Database,
  BarChart3,
  Zap,
  TrendingUp,
  Car,
  Workflow,
  LineChart,
  Tag,
  LayoutDashboard,
} from "lucide-react";
import SectionHeading from "./SectionHeading";

const projects = [
  {
    icon: Bot,
    title: "GTM Agentic AI Layer",
    org: "SingleStore",
    description:
      "End-to-end agentic AI system integrating Salesforce, Slack, and call transcripts to automate GTM workflows for the sales team.",
    impact: "Reclaimed 50% of sales reps' capacity",
    tags: ["AI Agents", "Salesforce", "Slack", "LLMs"],
    color: "var(--accent)",
  },
  {
    icon: Zap,
    title: "AI Call Analysis Agent",
    org: "SingleStore",
    description:
      "Agent that scores sales calls against playbooks and objection frameworks, then generates coaching summaries automatically.",
    impact: "40% reduction in manual coaching effort",
    tags: ["GPT", "Sales Playbooks", "NLP", "Automation"],
    color: "var(--teal)",
  },
  {
    icon: Database,
    title: "CDC Pipeline & Data Architecture",
    org: "Furrl",
    description:
      "Change Data Capture pipeline from MongoDB to Postgres, plus an archival system that compressed historical data while keeping it queryable.",
    impact: "70% storage optimized, 25% cost reduced",
    tags: ["MongoDB", "PostgreSQL", "CDC", "AWS"],
    color: "var(--accent)",
  },
  {
    icon: BarChart3,
    title: "Real-time Clickstream Pipeline",
    org: "Furrl",
    description:
      "Scalable event processing on Apache Beam across AWS and GCP. Ingests clickstream data and feeds real-time dashboards for product decisions.",
    impact: "Real-time metrics for product and ops teams",
    tags: ["Apache Beam", "AWS", "GCP", "Real-time"],
    color: "var(--teal)",
  },
  {
    icon: TrendingUp,
    title: "Product Relevance Ranking Engine",
    org: "Furrl",
    description:
      "Rebuilt the Product Listing API with a real-time ranking system based on user behavior signals and engagement patterns.",
    impact: "55% more engagement, 33% more views per user",
    tags: ["ML", "API Design", "Ranking", "Python"],
    color: "var(--accent)",
  },
  {
    icon: Workflow,
    title: "Event-driven CRM Automation",
    org: "Furrl",
    description:
      "Automated retention journeys using AWS Step Functions and DynamoDB with event triggers for personalized user re-engagement.",
    impact: "8% week-over-week retention increase",
    tags: ["Step Functions", "DynamoDB", "Customer.io", "Event-driven"],
    color: "var(--teal)",
  },
  {
    icon: LineChart,
    title: "Funnel Optimization & Behavior Analysis",
    org: "Furrl",
    description:
      "Built a behavior analysis model to find and fix drop-off points across the purchase funnel, then validated changes through experimentation.",
    impact: "60% month-over-month order rate increase",
    tags: ["Analytics", "Python", "SQL", "A/B Testing"],
    color: "var(--accent)",
  },
  {
    icon: Tag,
    title: "Unified Analytics Ecosystem",
    org: "Furrl",
    description:
      "Wired Mixpanel, Amplitude, Google Analytics, WebEngage, MetaAds, and Clarity through Google Tag Manager into a single tracking layer.",
    impact: "One source of truth for all user analytics",
    tags: ["GTM", "Mixpanel", "Amplitude", "GA4"],
    color: "var(--teal)",
  },
  {
    icon: LayoutDashboard,
    title: "KPI & Financial Reporting Suite",
    org: "Furrl",
    description:
      "Designed Metabase dashboards for KPI, Ops, and Marketing. Automated P&L, account settlements, and MIS reports for real-time visibility.",
    impact: "40% faster decision-making across teams",
    tags: ["Metabase", "SQL", "Reporting", "Automation"],
    color: "var(--accent)",
  },
  {
    icon: Car,
    title: "Smart Parking Management System",
    org: "Academic Project",
    description:
      "Matrix-based parking algorithm with Dijkstra's routing and ML-powered ANPR for automated license plate recognition and vehicle tracking.",
    impact: "100% space utilization, 95% ANPR accuracy",
    tags: ["Machine Learning", "OpenCV", "Python", "Algorithms"],
    color: "var(--teal)",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Projects"
          subtitle="What I built and the numbers that came out of it."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 bg-[var(--bg-surface)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/30 hover:shadow-lg transition-all duration-300 flex flex-col"
            >
              <div className="flex items-start justify-between mb-4">
                <div
                  className="p-3 rounded-lg transition-colors"
                  style={{
                    backgroundColor: `color-mix(in srgb, ${project.color} 8%, transparent)`,
                  }}
                >
                  <project.icon size={22} style={{ color: project.color }} />
                </div>
                <span className="text-xs font-medium px-2.5 py-1 bg-[var(--bg-primary)] text-[var(--text-secondary)] rounded-md border border-[var(--border)]">
                  {project.org}
                </span>
              </div>

              <h3 className="text-lg font-bold mb-2 group-hover:text-[var(--accent)] transition-colors">
                {project.title}
              </h3>

              <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {project.description}
              </p>

              <div className="mb-4 py-2 px-3 bg-[var(--teal)]/5 rounded-lg border border-[var(--teal)]/10">
                <p className="text-sm font-medium text-[var(--teal)]">
                  {project.impact}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-0.5 bg-[var(--bg-primary)] text-[var(--text-secondary)] rounded border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center text-sm text-[var(--text-secondary)] mt-10"
        >
          Most of this work was done inside organizations. No links, but the impact numbers are real.
        </motion.p>
      </div>
    </section>
  );
}
