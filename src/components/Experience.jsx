import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';
import { Briefcase } from 'lucide-react';

const EXPERIENCE = [
  {
    company: "SoftVision IT Group (Pvt) Ltd",
    roles: [
      {
        role: "Associate Software Engineer",
        period: "Jun 2024 – Present",
        points: [
          "Full-time role based in Colombo, Sri Lanka",
          "Developing web applications utilizing the MERN Stack",
        ],
      },
      {
        role: "Software Engineer Intern",
        period: "May 2023 – May 2024",
        points: [
          "Internship based in Colombo, Sri Lanka",
          "Gained hands-on experience in PHP, Software Design, and various other technologies",
        ],
      }
    ]
  },
  {
    company: "State Timber Corporation",
    roles: [
      {
        role: "Software Engineer Intern",
        period: "Apr 2022 – Apr 2023",
        points: [
          "Focused on PHP development and Web Design",
          "Completed a one year internship program",
        ],
      }
    ]
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
              key={i}
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
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.6rem", fontWeight: 700,
                  color: "var(--text-primary)", margin: "0 0 2rem 0",
                }}>{exp.company}</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
                  {exp.roles.map((r, roleIdx) => (
                    <div key={roleIdx} style={{
                      position: "relative",
                      paddingLeft: "1.5rem",
                      borderLeft: "2px solid rgba(255,255,255,0.05)"
                    }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", marginBottom: "0.5rem" }}>
                        <h4 style={{
                          fontFamily: "var(--font-heading)",
                          fontSize: "1.3rem", fontWeight: 600,
                          color: "var(--text-primary)", margin: 0,
                        }}>{r.role}</h4>
                        <span style={{
                          fontSize: "12px", color: "var(--accent-primary)", fontWeight: 700,
                          padding: "6px 14px", border: "1px solid var(--glass-border)",
                          borderRadius: "999px", letterSpacing: "1px", background: "rgba(249,115,22,0.1)",
                        }}>{r.period}</span>
                      </div>
                      
                      <ul style={{ margin: "1rem 0 0 0", padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
                        {r.points.map((pt, j) => (
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
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
