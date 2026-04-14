"use client";

import { motion } from "framer-motion";
import { Building2, MapPin, Calendar } from "lucide-react";
import SectionHeading from "./SectionHeading";

const experiences = [
  {
    company: "SingleStore",
    role: "AI and Automation Analyst",
    location: "Hyderabad, India",
    period: "Dec 2025 - Present",
    highlights: [
      "Defined GTM Agentic AI Layer integrating Salesforce, Slack, and call transcripts; reclaimed 50% of sales reps' capacity.",
      "Built AI Call Analysis Agent using sales playbooks and objection frameworks; reduced manual coaching effort by 40%.",
      "Designed Workato automation for support documentation insights; cut CSM query ticket resolution time by 70%.",
    ],
    tags: ["AI Agents", "Salesforce", "Workato", "GPT", "Automation"],
  },
  {
    company: "Furrl",
    role: "Data Engineer - Product & Analytics",
    location: "Bengaluru, India",
    period: "Oct 2023 - Nov 2025",
    highlights: [
      "Built CDC pipeline from MongoDB to Postgres; improved data consistency and analysis accuracy by 30%.",
      "Architected data archival and unarchival pipeline; optimized storage by 70%, reduced instance costs by 25%.",
      "Optimized SQL queries with partitions, indexing, and materialized views; cut processing time by 40%, costs by 50%.",
      "Automated event-driven CRM journeys with Step Functions and DynamoDB; drove 8% WOW retention increase.",
      "Built scalable clickstream pipeline on Apache Beam, AWS, and GCP; enabled real-time metrics dashboards.",
      "Ran user behavior analysis and funnel optimization; improved MoM order rate by 60%.",
      "Rebuilt Product Listing API with real-time relevance ranking; boosted engagement by 55%, views per user by 33%.",
      "Integrated Mixpanel, Amplitude, GA, WebEngage, MetaAds, Clarity via GTM into one unified tracking system.",
      "Designed Metabase dashboards for KPI, Ops, and Marketing; improved decision-making speed by 40%.",
      "Automated P&L, account settlements, and MIS reports for real-time financial visibility.",
    ],
    tags: ["Apache Beam", "AWS", "GCP", "PostgreSQL", "MongoDB", "DynamoDB", "Python", "SQL"],
  },
  {
    company: "TCS Research",
    role: "Software Engineer Intern",
    location: "Pune, India",
    period: "May 2023 - July 2023",
    highlights: [
      "Integrated React Flow for data visualization and requirement analysis of complex relationships within Digital Twin.",
      "Researched and documented stock and flow modeling tool processes for Digital Twin project development.",
    ],
    tags: ["React", "React Flow", "Digital Twin", "Data Visualization"],
  },
  {
    company: "Software AG",
    role: "Software Engineer Intern",
    location: "Bengaluru, India",
    period: "Oct 2022 - Jan 2023",
    highlights: [
      "Implemented alerting system with multi-channel notifications; reduced issue detection and resolution time by 50%.",
      "Designed event-driven job scheduling with EventBridge; enabled automated workflow triggers and orchestration.",
    ],
    tags: ["AWS EventBridge", "Alerting", "Event-driven Architecture"],
  },
  {
    company: "Alchemists Ark",
    role: "Software Engineer Intern",
    location: "Pune, India",
    period: "May 2022 - May 2023",
    highlights: [
      "Built automated workflow to validate campaign delivery data; optimized campaigns and reduced CAC by 30%.",
      "Created automation for campaign catalogue generation; reduced manual efforts by 80%.",
      "Developed asset uploaders to unify datasets across teams; improved collaboration and operational efficiency.",
    ],
    tags: ["Automation", "Python", "Campaign Analytics"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Experience"
          subtitle="Where I've built and what changed because of it."
        />

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-[var(--border)]" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={`${exp.company}-${exp.role}`}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative pl-8 md:pl-20"
              >
                <div className="absolute left-0 md:left-8 -translate-x-1/2 top-2 w-3 h-3 rounded-full bg-[var(--accent)] border-4 border-[var(--bg-surface)]" />

                <div className="p-6 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl hover:border-[var(--accent)]/20 hover:shadow-md transition-all duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-bold">{exp.role}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 size={14} className="text-[var(--accent)]" />
                        <span className="font-medium text-[var(--accent)]">
                          {exp.company}
                        </span>
                      </div>
                    </div>
                    <div className="text-right text-sm text-[var(--text-secondary)]">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={13} />
                        {exp.period}
                      </div>
                      <div className="flex items-center gap-1.5 mt-1">
                        <MapPin size={13} />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-sm text-[var(--text-secondary)] leading-relaxed flex gap-2"
                      >
                        <span className="text-[var(--accent)] mt-1 shrink-0">&bull;</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2.5 py-1 bg-[var(--accent)]/5 text-[var(--accent)] rounded-md font-medium"
                      >
                        {tag}
                      </span>
                    ))}
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
