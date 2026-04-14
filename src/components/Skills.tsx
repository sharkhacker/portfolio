"use client";

import { motion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const skillGroups = [
  {
    category: "AI & Automation",
    skills: ["GPT", "Gemini", "Claude", "Glean", "Workato", "Cursor", "Kiro"],
  },
  {
    category: "Languages",
    skills: ["C++", "Java", "Python", "SQL", "JavaScript"],
  },
  {
    category: "Frameworks",
    skills: ["Apache Beam", "Apache Spark", "Spring Boot", "Apache Camel"],
  },
  {
    category: "Databases",
    skills: [
      "PostgreSQL",
      "MongoDB",
      "DynamoDB",
      "BigQuery",
      "ClickHouse",
      "Redis",
      "Elasticsearch",
      "SingleStore",
    ],
  },
  {
    category: "Cloud & DevOps",
    skills: ["AWS", "GCP", "Docker", "Kubernetes"],
  },
  {
    category: "Analytics & Tools",
    skills: [
      "Metabase",
      "Mixpanel",
      "Amplitude",
      "Git",
      "GitHub",
      "Jira",
      "Postman",
      "Customer.io",
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-[var(--bg-surface)]">
      <div className="max-w-6xl mx-auto">
        <SectionHeading
          title="Tech Stack"
          subtitle="Tools and technologies I work with."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, index) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="p-6 bg-[var(--bg-primary)] border border-[var(--border)] rounded-xl"
            >
              <h3 className="font-semibold text-sm uppercase tracking-wider text-[var(--accent)] mb-4">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 bg-[var(--bg-surface)] border border-[var(--border)] rounded-lg text-sm text-[var(--text-primary)] hover:border-[var(--accent)]/40 hover:text-[var(--accent)] transition-all duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
