import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import { useState } from 'react';
import SectionLabel from './SectionLabel';
import crmImg from '../assets/crm.png';
import payrollImg from '../assets/payroll.png';
import lumosImg from '../assets/lumos.png';
import stateImg from '../assets/state.png';
import mscImg from '../assets/msc.png';

const PROJECTS = [
{
  title: "Employee Management System",
  desc: "A comprehensive solution designed to streamline workplace operations. Features high-performance tools for adding, filtering, and managing detailed employee profiles alongside structural record administration.",
  tags: ["TypeScript", "Node.js", "Express.js", "MySQL"],
  year: "2026 - June",
  image: mscImg, 
  category: "Main Projects"
},
  {
    title: "SVG CRM Management System",
    desc: "A comprehensive CRM and business operations solution to streamline customer relationship management, account handling, and business analytics through a modern platform.",
    tags: ["TypeScript", "Node.js", "Express.js", "MySQL"],
    year: "2026",
    image: crmImg,
    category: "Main Projects"
  },
  {
    title: "SVG Payroll Management",
    desc: "A modern workforce management solution built to streamline employee operations through automated salary processing, attendance, and comprehensive reporting.",
    tags: ["React.js", "Node.js", "Express.js", "MySQL"],
    year: "2025-2026",
    image: payrollImg,
    category: "Main Projects"
  },
  {
    title: "LUMOS CRM Website",
    desc: "Responsive landing page for LUMOS CRM highlighting real-time tracking, WhatsApp-automated workflows, and transparent service request management.",
    tags: ["React.js", "Node.js", "Express.js", "MySQL"],
    year: "2025",
    image: lumosImg,
    category: "Main Projects"
  },
  {
    title: "SoftAcc POS Desktop App",
    desc: "A retail management solution streamlining billing, inventory management, sales tracking, and customer handling through an efficient desktop platform.",
    tags: ["VB.NET", "MS SQL", "WinForms", "Crystal Reports"],
    year: "2024",
    category: "Main Projects"
  },
  {
    title: "State Timber Website",
    desc: "Contributed to frontend UI design, backend functionality, and database integration for a dynamic and responsive team project website.",
    tags: ["HTML", "CSS", "Bootstrap", "PHP"],
    year: "2023",
    image: stateImg,
    category: "Main Projects"
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("Main Projects");
  const categories = ["Main Projects", "My Projects"];
  
  const filteredProjects = PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="projects" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionLabel label="03 — Projects" />
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "4rem", gap: "2rem" }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800, color: "var(--text-primary)",
            margin: 0, letterSpacing: "-0.5px",
          }}
        >
          SELECTED <span className="text-gradient">WORK</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          style={{ display: "flex", gap: "1rem" }}
        >
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                background: activeCategory === cat ? "rgba(249,115,22,0.15)" : "transparent",
                border: `1px solid ${activeCategory === cat ? "var(--accent-primary)" : "rgba(255,255,255,0.1)"}`,
                color: activeCategory === cat ? "var(--accent-primary)" : "var(--text-secondary)",
                padding: "0.6rem 1.5rem",
                borderRadius: "99px",
                fontSize: "0.95rem",
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.3s ease",
                fontFamily: "var(--font-body)"
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>
      
      <motion.div 
        layout
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((p) => (
            <motion.div 
              layout
              key={p.title} 
              className="glass-panel"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, type: "spring", bounce: 0.4 }}
              whileHover={{ y: -8, borderColor: "var(--accent-secondary)" }}
              style={{
                padding: "3rem",
                position: "relative", overflow: "hidden",
                display: "flex", flexDirection: "column",
                transition: "border-color 0.3s, transform 0.3s",
                backgroundImage: p.image ? `linear-gradient(rgba(10, 10, 10, 0.8), rgba(10, 10, 10, 0.9)), url(${p.image})` : 'none',
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div style={{
                position: "absolute", top: -50, right: -50,
                width: 150, height: 150,
                background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
                pointerEvents: "none",
              }} />
              
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.5rem" }}>
                <h3 style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "1.4rem", fontWeight: 700,
                  color: "var(--text-primary)", margin: 0,
                }}>{p.title}</h3>
                <div style={{ display: "flex", gap: "1rem", color: "var(--text-secondary)" }}>
                  <a href="#" style={{ color: "inherit", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={e => e.currentTarget.style.color="inherit"}><Code size={20} /></a>
                  <a href="#" style={{ color: "inherit", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={e => e.currentTarget.style.color="inherit"}><ExternalLink size={20} /></a>
                </div>
              </div>
              
              <p style={{
                fontSize: "1.05rem", color: "var(--text-secondary)",
                lineHeight: 1.7, margin: "0 0 2rem", fontWeight: 300, flexGrow: 1
              }}>{p.desc}</p>
              
              <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", alignItems: "center" }}>
                {p.tags.map(tag => (
                  <span key={tag} style={{
                    fontSize: "12px", letterSpacing: "1px", fontWeight: 600,
                    color: "var(--accent-secondary)",
                    background: "rgba(249,115,22,0.1)",
                    padding: "6px 14px", borderRadius: "999px", textTransform: "uppercase",
                  }}>{tag}</span>
                ))}
                <span style={{ marginLeft: "auto", fontSize: "12px", color: "var(--text-secondary)", fontWeight: 600 }}>{p.year}</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
