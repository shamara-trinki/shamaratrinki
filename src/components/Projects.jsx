import { motion } from 'framer-motion';
import { ExternalLink, Code } from 'lucide-react';
import SectionLabel from './SectionLabel';

const PROJECTS = [
  {
    title: "NexaCloud Platform",
    desc: "A full-stack SaaS platform for real-time infrastructure monitoring with WebSocket streams, multi-tenant auth, and customizable dashboards.",
    tags: ["Next.js", "Node.js", "PostgreSQL", "AWS"],
    year: "2024",
  },
  {
    title: "QuantumShop",
    desc: "High-performance e-commerce engine with AI-powered recommendations, edge caching, and sub-100ms response times globally.",
    tags: ["React", "Django", "Redis", "Docker"],
    year: "2024",
  },
  {
    title: "CodeSync IDE",
    desc: "Collaborative browser-based code editor with live execution, multi-cursor support, and real-time pair programming capabilities.",
    tags: ["TypeScript", "WebSockets", "Python", "K8s"],
    year: "2023",
  },
  {
    title: "DataForge API",
    desc: "RESTful + GraphQL API gateway aggregating 50+ data sources with rate limiting, caching, and auto-generated documentation.",
    tags: ["GraphQL", "Express", "MongoDB", "Redis"],
    year: "2023",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionLabel label="03 — Projects" />
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
        SELECTED <span className="text-gradient">WORK</span>
      </motion.h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
        {PROJECTS.map((p, i) => (
          <motion.div 
            key={p.title} 
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, borderColor: "var(--accent-secondary)" }}
            style={{
              padding: "3rem",
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column",
              transition: "border-color 0.3s",
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
      </div>
    </section>
  );
}
