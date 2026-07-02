import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    role: "Senior Full Stack Engineer",
    company: "Nexus Technologies",
    period: "2022 – Present",
    points: [
      "Led architecture of microservices platform serving 2M+ daily users",
      "Reduced API latency by 60% through Redis caching strategies",
      "Mentored 4 junior developers and ran weekly code review sessions",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Orbit Digital",
    period: "2020 – 2022",
    points: [
      "Built 3 client-facing SaaS products from 0 to production",
      "Integrated Stripe payments & real-time notifications via WebSockets",
      "Migrated legacy monolith to containerized microservices on AWS",
    ],
  },
  {
    role: "Frontend Developer",
    company: "Pixel Labs",
    period: "2018 – 2020",
    points: [
      "Developed React component library used across 8 internal products",
      "Improved Lighthouse performance score from 54 to 96",
      "Shipped 20+ features in Agile sprints with cross-functional teams",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "8rem 2rem", maxWidth: "900px", margin: "0 auto" }}>
      <SectionLabel label="04 — Experience" />
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 800, color: "var(--text-primary)",
          margin: "0 0 4rem", letterSpacing: "-0.5px",
        }}
      >
        CAREER <span className="text-gradient">TIMELINE</span>
      </motion.h2>
      
      <div style={{ position: "relative" }}>
        <div style={{
          position: "absolute", left: "24px", top: 0, bottom: 0,
          width: "2px", background: "var(--glass-border)",
        }} />
        
        <div style={{ display: "flex", flexDirection: "column", gap: "4rem" }}>
          {EXPERIENCE.map((exp, i) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.15 }}
              style={{ position: "relative", paddingLeft: "5rem" }}
            >
              <div style={{
                position: "absolute", left: "8px", top: "0px",
                width: 34, height: 34, borderRadius: "50%",
                background: "var(--bg-color)", border: "2px solid var(--accent-primary)",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "var(--accent-primary)", zIndex: 1, boxShadow: "0 0 15px var(--accent-glow)",
              }}>
                <Briefcase size={16} />
              </div>
              
              <div className="glass-panel" style={{ padding: "2.5rem", transition: "transform 0.3s" }} onMouseEnter={e => e.currentTarget.style.transform = "translateX(5px)"} onMouseLeave={e => e.currentTarget.style.transform = "none"}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "0.5rem" }}>
                  <h3 style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.4rem", fontWeight: 700,
                    color: "var(--text-primary)", margin: 0,
                  }}>{exp.role}</h3>
                  <span style={{
                    fontSize: "12px", color: "var(--accent-primary)", fontWeight: 700,
                    padding: "6px 14px", border: "1px solid var(--glass-border)",
                    borderRadius: "999px", letterSpacing: "1px", background: "rgba(249,115,22,0.1)",
                  }}>{exp.period}</span>
                </div>
                
                <div style={{
                  fontSize: "15px", color: "var(--text-secondary)",
                  marginBottom: "1.5rem", letterSpacing: "1px", fontWeight: 500,
                }}>{exp.company}</div>
                
                <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                  {exp.points.map((pt, j) => (
                    <li key={j} style={{
                      fontSize: "1.05rem", color: "var(--text-secondary)",
                      display: "flex", gap: "1rem", alignItems: "flex-start", fontWeight: 300, lineHeight: 1.6
                    }}>
                      <span style={{ color: "var(--accent-primary)", marginTop: "2px" }}>▹</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
