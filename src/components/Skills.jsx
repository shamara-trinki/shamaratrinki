import { motion } from 'framer-motion';
import SectionLabel from './SectionLabel';

const SKILLS = [
  { 
    category: "Frontend", 
    items: [
      { name: "HTML", slug: "html5" },
      { name: "CSS", slug: "css3" },
      { name: "React", slug: "react" },
      { name: "Next.js", slug: "nextdotjs" },
      { name: "TypeScript", slug: "typescript" },
      { name: "Tailwind CSS", slug: "tailwindcss" },
      { name: "Framer Motion", slug: "framer" }
    ] 
  },
  { 
    category: "Backend", 
    items: [
      { name: "PHP", slug: "php" },
      { name: "VB.NET", slug: "dotnet" },
      { name: "Node.js", slug: "nodedotjs" },
      { name: "Express", slug: "express" },
      { name: "Spring Boot", slug: "springboot" },
      { name: "Django", slug: "django" }
    ] 
  },
  { 
    category: "Database", 
    items: [
      { name: "PostgreSQL", slug: "postgresql" },
      { name: "MongoDB", slug: "mongodb" },
      { name: "Supabase", slug: "supabase" },
      { name: "MySQL", slug: "mysql" }
    ] 
  },
  { 
    category: "DevOps", 
    items: [
      { name: "Docker", slug: "docker" },
      { name: "AWS", slug: "amazonaws" }
    ] 
  },
];

export default function Skills() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemAnim = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section id="skills" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionLabel label="02 — Skills" />
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
        TECH <span className="text-gradient">ARSENAL</span>
      </motion.h2>
      
      <motion.div 
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "2rem" }}
      >
        {SKILLS.map((group) => (
          <motion.div 
            key={group.category} 
            variants={itemAnim}
            className="glass-panel"
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px var(--accent-glow)", borderColor: "var(--accent-secondary)" }}
            style={{
              padding: "2.5rem 2rem",
              transition: "border-color 0.3s ease",
            }}
          >
            <div style={{
              fontSize: "14px", letterSpacing: "3px",
              color: "var(--accent-secondary)", textTransform: "uppercase",
              marginBottom: "2rem", fontWeight: 700,
            }}>{group.category}</div>
            
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {group.items.map((skill, i) => (
                <motion.div 
                  key={skill.name} 
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  style={{ display: "flex", alignItems: "center", gap: "1rem" }}
                >
                  <img 
                    src={`https://cdn.simpleicons.org/${skill.slug}/f97316`} 
                    alt={skill.name} 
                    style={{ width: "22px", height: "22px", objectFit: "contain", flexShrink: 0 }} 
                  />
                  <span style={{
                    fontSize: "16px", color: "var(--text-primary)", fontWeight: 500,
                  }}>{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
