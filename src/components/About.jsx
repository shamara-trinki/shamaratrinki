import { motion } from 'framer-motion';
import { Zap, Shield, Cloud, Braces } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function About() {
  const cards = [
    { icon: <Zap size={28} />, label: "Performance", desc: "Sub-100ms APIs, optimized bundles" },
    { icon: <Shield size={28} />, label: "Security", desc: "Auth, encryption, compliance-ready" },
    { icon: <Cloud size={28} />, label: "Cloud Native", desc: "AWS, Docker, K8s at scale" },
    { icon: <Braces size={28} />, label: "API Design", desc: "REST, GraphQL, gRPC, streams" },
  ];

  return (
    <section id="about" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
      <SectionLabel label="01 — About" />
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "center" }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
         
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}
          >
            <p style={{
              fontSize: "1.1rem", color: "var(--text-secondary)",
              lineHeight: 1.85, fontWeight: 300, margin: 0
            }}>
              Hello! I'm <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Shamara Trinki Perera</strong>, a Full-Stack Software Developer who loves transforming complex business requirements into sleek, efficient, and reliable software systems.
            </p>
            
            <p style={{
              fontSize: "1.1rem", color: "var(--text-secondary)",
              lineHeight: 1.85, fontWeight: 300, margin: 0
            }}>
              My primary expertise lies in the <strong style={{ color: "var(--accent-primary)" }}>MERN stack</strong> (React, Node.js, Express, SQL), where I have hands-on experience architecting and deploying complex enterprise applications like CRM platforms and core Payroll systems. I thrive in environments that challenge me to handle heavy backend calculations, fine-tune database fragmentation, and optimize local/client network connectivity.
            </p>

            <p style={{
              fontSize: "1.1rem", color: "var(--text-secondary)",
              lineHeight: 1.85, fontWeight: 300, margin: 0
            }}>
              Beyond just writing clean code, I am highly focused on modern UI/UX design standards, ensuring that corporate tools feel modern, intuitive, and lightning-fast. I am constantly exploring advanced computer science concepts, refining algorithms, and learning new ways to build next-level software.
            </p>
          </motion.div>
        </motion.div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          {cards.map((item, i) => (
            <motion.div 
              key={item.label} 
              className="glass-panel"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5, borderColor: "var(--accent-primary)" }}
              style={{
                padding: "2rem 1.5rem",
                borderTop: "2px solid var(--accent-glow)",
                transition: "all 0.3s ease"
              }}
            >
              <div style={{ color: "var(--accent-primary)", marginBottom: "1.5rem" }}>{item.icon}</div>
              <div style={{
                fontSize: "16px", fontWeight: 700,
                color: "var(--text-primary)", marginBottom: "0.5rem", letterSpacing: "1px",
              }}>{item.label}</div>
              <div style={{
                fontSize: "14px", color: "var(--text-secondary)",
                lineHeight: 1.6, fontWeight: 300,
              }}>{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
