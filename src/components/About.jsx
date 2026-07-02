import { motion, useScroll, useTransform } from 'framer-motion';
import { GraduationCap, FolderOpen, Code } from 'lucide-react';
import { useRef } from 'react';
import SectionLabel from './SectionLabel';

export default function About() {
  const cards = [
    { icon: <Code size={30} />, label: "Position", desc: "Associate Software Engineer at Softvision IT Group (Pvt) Ltd", span: true },
    { icon: <GraduationCap size={30} />, label: "Education", desc: "Bachelor of Information Technology (External) Degree - University of Colombo" },
    { icon: <FolderOpen size={30} />, label: "Projects", desc: "10+ Real world projects delivered" },
  ];

  const sectionRef = useRef(null);
  
  // Subtle parallax effect on the cards container
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);

  return (
    <section ref={sectionRef} id="about" style={{ padding: "10rem 2rem", position: "relative", overflow: "hidden" }}>
      {/* Background Glowing Orbs */}
      <div style={{
        position: "absolute", top: "5%", left: "-10%", width: "50vw", height: "50vw",
        background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
        filter: "blur(100px)", zIndex: 0, pointerEvents: "none"
      }} />
      <div style={{
        position: "absolute", bottom: "-15%", right: "-10%", width: "45vw", height: "45vw",
        background: "radial-gradient(circle, rgba(253, 186, 116, 0.08) 0%, transparent 60%)",
        filter: "blur(100px)", zIndex: 0, pointerEvents: "none"
      }} />

      <div style={{ maxWidth: "1200px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        <SectionLabel label="01 — About" />
        
        <div style={{ 
          display: "grid", 
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", 
          gap: "6rem", 
          alignItems: "center" 
        }}>
          
          {/* Left Text Column */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 style={{ 
              fontSize: "clamp(2.5rem, 5vw, 4rem)", 
              fontFamily: "var(--font-heading)", 
              fontWeight: 800, 
              lineHeight: 1.1, 
              marginBottom: "2.5rem",
              letterSpacing: "-0.03em"
            }}>
              Building <span className="text-gradient">digital</span> experiences that matter.
            </h2>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.15 }
                }
              }}
              style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}
            >
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Hello! I'm <strong style={{ color: "var(--text-primary)", fontWeight: 500 }}>Shamara Trinki Perera</strong>, a passionate Full-Stack Software Developer who loves transforming complex business requirements into sleek, efficient, and reliable software systems.
              </motion.p>
              
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                My primary expertise lies in the <strong style={{ color: "var(--accent-primary)" }}>MERN stack</strong>, where I have hands-on experience architecting and deploying complex enterprise applications. I thrive in environments that challenge me to handle heavy backend calculations and optimize network connectivity.
              </motion.p>
              
              <motion.p variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                style={{ fontSize: "1.15rem", color: "var(--text-secondary)", lineHeight: 1.8, fontWeight: 300, margin: 0 }}>
                Currently, I am an undergraduate pursuing a <strong className="text-gradient" style={{ fontWeight: 600 }}>BIT degree at the University of Colombo</strong>, and I have successfully delivered 10+ real-world projects.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Right Bento Box Layout */}
          <motion.div 
            style={{ 
              display: "grid", 
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
              gap: "1.25rem",
              y // Parallax effect
            }}
          >
            {cards.map((item, i) => (
              <motion.div 
                key={item.label} 
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: i * 0.15, duration: 0.6, type: "spring", bounce: 0.4 }}
                whileHover={{ 
                  y: -8, 
                  scale: 1.02,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.4), inset 0 0 0 1px var(--accent-primary)" 
                }}
                style={{
                  padding: "2rem",
                  gridColumn: item.span ? "1 / -1" : "auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  overflow: "hidden",
                  background: "linear-gradient(145deg, rgba(20,20,20,0.6) 0%, rgba(10,10,10,0.2) 100%)",
                  borderRadius: "24px",
                  border: "1px solid rgba(255,255,255,0.05)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)"
                }}
              >
                {/* Internal card glow decoration */}
                <div style={{
                  position: "absolute", top: 0, right: 0, width: "150px", height: "150px",
                  background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
                  opacity: 0.5, borderRadius: "50%", transform: "translate(30%, -40%)", pointerEvents: "none"
                }} />

                <motion.div 
                  whileHover={{ rotate: 12, scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  style={{ 
                    width: "60px", height: "60px", borderRadius: "16px", 
                    background: "rgba(249, 115, 22, 0.1)", 
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--accent-primary)", marginBottom: "1.5rem",
                    border: "1px solid rgba(249, 115, 22, 0.15)",
                    position: "relative", zIndex: 2
                  }}
                >
                  {item.icon}
                </motion.div>
                
                <div style={{ position: "relative", zIndex: 2 }}>
                  <h3 style={{
                    fontSize: "1.25rem", fontWeight: 700, fontFamily: "var(--font-heading)",
                    color: "var(--text-primary)", marginBottom: "0.5rem", letterSpacing: "0.5px"
                  }}>{item.label}</h3>
                  <p style={{
                    fontSize: "0.95rem", color: "var(--text-secondary)", lineHeight: 1.7, margin: 0, fontWeight: 300
                  }}>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
