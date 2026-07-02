import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail } from 'lucide-react';
import heroImg from '../assets/my.png';

export default function Hero() {
  const [typed, setTyped] = useState("");
  const titles = ["Full Stack Developer", "API Architect","Associate Software Engineer"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    const speed = deleting ? 38 : 75;
    const timer = setTimeout(() => {
      if (!deleting) {
        setTyped(current.slice(0, charIdx + 1));
        if (charIdx + 1 === current.length) setTimeout(() => setDeleting(true), 1800);
        else setCharIdx(c => c + 1);
      } else {
        setTyped(current.slice(0, charIdx - 1));
        if (charIdx - 1 === 0) { setDeleting(false); setCharIdx(0); setTitleIdx(i => (i + 1) % titles.length); }
        else setCharIdx(c => c - 1);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [charIdx, deleting, titleIdx]);

  return (
    <section id="home" style={{
      minHeight: "100vh", display: "flex", alignItems: "center",
      position: "relative", padding: "6rem 2rem 2rem", overflow: "hidden"
    }}>
      <div style={{ 
        position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto",
        display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "center",
        '@media (maxWidth: 900px)': { gridTemplateColumns: "1fr", textAlign: "center" }
      }}>
        
        {/* Left Side: Text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "12px", letterSpacing: "4px",
              color: "var(--accent-primary)", textTransform: "uppercase", fontWeight: 700,
              border: "1px solid var(--glass-border)",
              padding: "7px 20px", borderRadius: "999px",
              marginBottom: "2rem",
              background: "rgba(249,115,22,0.06)",
            }}
          >
            <span style={{ 
              width: 7, height: 7, borderRadius: "50%", 
              background: "var(--accent-primary)", display: "inline-block", 
              boxShadow: "0 0 10px var(--accent-glow)" 
            }} />
            Available for hire
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 6vw, 5.5rem)",
              fontWeight: 900, lineHeight: 1.05,
              margin: "0 0 1rem",
              letterSpacing: "-1px",
              textAlign: "left"
            }}
          >
            <span className="text-gradient">Shamara Trinki Perera</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
              color: "var(--accent-primary)", marginBottom: "1.5rem",
              minHeight: "2.5rem", fontWeight: 500, letterSpacing: "2px",
            }}
          >
            {typed}<span style={{ borderRight: "2px solid var(--accent-primary)", animation: "blink 1s step-end infinite" }}>&nbsp;</span>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              fontSize: "1.1rem", color: "var(--text-secondary)",
              lineHeight: 1.8, maxWidth: "540px",
              margin: "0 0 3rem 0", fontWeight: 300, textAlign: "left"
            }}
          >
            I build scalable systems, ship beautiful interfaces, and architect backends that never sleep. 6 years turning complex problems into clean code.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
          >
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "14px", letterSpacing: "2px",
              padding: "14px 36px",
              background: "var(--accent-primary)", color: "#000",
              textDecoration: "none", fontWeight: 700,
              borderRadius: "4px", textTransform: "uppercase",
              border: "1px solid var(--accent-secondary)",
              transition: "all 0.3s ease",
              boxShadow: "0 0 20px var(--accent-glow)"
            }}>
              View Projects <ArrowRight size={18} />
            </a>
            <a href="#contact" className="glass-panel" style={{
              display: "inline-flex", alignItems: "center", gap: "8px",
              fontSize: "14px", letterSpacing: "2px",
              padding: "14px 36px", color: "var(--text-primary)",
              textDecoration: "none", fontWeight: 600,
              borderRadius: "4px", textTransform: "uppercase",
              transition: "all 0.3s ease",
            }}>
              Contact Me <Mail size={18} />
            </a>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            style={{
              display: "flex", gap: "2.5rem", flexWrap: "wrap",
              marginTop: "4rem", borderTop: "1px solid var(--glass-border)",
              paddingTop: "2rem", width: "100%"
            }}
          >
            {[
              { num: "6+", label: "Years Exp." }, 
              { num: "40+", label: "Projects" }, 
              { num: "15+", label: "Clients" }
            ].map((stat, i) => (
              <div key={stat.label} style={{ textAlign: "left" }}>
                <div style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: "2rem", fontWeight: 800,
                  color: "var(--text-primary)", marginBottom: "4px"
                }}>{stat.num}</div>
                <div style={{
                  fontSize: "11px", letterSpacing: "2px",
                  color: "var(--text-secondary)", textTransform: "uppercase", fontWeight: 600,
                }}>{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", marginTop: "3rem" }}
        >
          {/* Decorative background elements for image */}
          <div style={{
            position: "absolute", width: "110%", height: "110%",
            borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
            background: "linear-gradient(135deg, var(--accent-glow) 0%, transparent 100%)",
            animation: "morph 8s ease-in-out infinite",
            zIndex: -1
          }} />
          
          <img 
            src={heroImg} 
            alt="Profile" 
            style={{
              width: "100%", maxWidth: "550px", height: "auto",
              objectFit: "cover",
              filter: "drop-shadow(0 0 30px var(--accent-glow))"
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        @keyframes morph {
          0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
          50% { border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; }
          100% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; }
        }
        
        @media (max-width: 900px) {
          #home > div {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 3rem !important;
            margin-top: 2rem !important;
          }
          #home .text-gradient {
            text-align: center !important;
          }
          #home > div > div:first-child {
            align-items: center !important;
          }
          #home > div > div:first-child p, #home > div > div:first-child h1 {
            text-align: center !important;
          }
          #home > div > div:first-child > div:last-child {
            justify-content: center !important;
          }
          #home > div > div:first-child > div:last-child > div {
            text-align: center !important;
          }
        }
      `}</style>
    </section>
  );
}
