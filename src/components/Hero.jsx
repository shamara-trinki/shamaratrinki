import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Mail, ChevronDown, Code } from 'lucide-react';
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
      {/* Background ambient glows */}
      <div style={{
        position: "absolute", top: "20%", left: "10%",
        width: "40vw", height: "40vw",
        background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
        filter: "blur(80px)", zIndex: 0, opacity: 0.6
      }} />
      <div style={{
        position: "absolute", bottom: "10%", right: "10%",
        width: "30vw", height: "30vw",
        background: "radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 70%)",
        filter: "blur(60px)", zIndex: 0
      }} />

      <div style={{ 
        position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", width: "100%",
        display: "grid", gridTemplateColumns: "1.2fr 0.8fr", gap: "5rem", alignItems: "center",
      }} className="hero-grid">
        
        {/* Left Side: Text */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="hero-text">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontSize: "12px", letterSpacing: "2px",
              color: "var(--text-primary)", textTransform: "uppercase", fontWeight: 600,
              padding: "6px 16px", borderRadius: "4px",
              marginBottom: "2.5rem",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              backdropFilter: "blur(10px)"
            }}
          >
            <span style={{ 
              width: 6, height: 6, borderRadius: "50%", 
              background: "var(--accent-primary)", display: "inline-block", 
              boxShadow: "0 0 12px var(--accent-primary)" 
            }} />
            Available for New Opportunities
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.5rem, 6vw, 5rem)",
              fontWeight: 800, lineHeight: 1.1,
              margin: "0 0 1rem",
              letterSpacing: "-0.03em",
              color: "var(--text-primary)",
            }}
          >
            Hi, I'm <br />
            <span style={{
              background: "linear-gradient(120deg, #ffffff 0%, var(--accent-primary) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text"
            }}>Shamara Trinki</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "clamp(1.1rem, 2vw, 1.5rem)",
              color: "var(--text-secondary)", marginBottom: "2rem",
              minHeight: "2rem", fontWeight: 400, letterSpacing: "1px",
              fontFamily: "var(--font-heading)"
            }}
          >
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>&gt;</span> {typed}
            <span style={{ 
              display: "inline-block", width: "2px", height: "1.2em", 
              background: "var(--accent-primary)", marginLeft: "4px", 
              verticalAlign: "middle", animation: "blink 1s step-end infinite" 
            }} />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "1.125rem", color: "rgba(255,255,255,0.7)",
              lineHeight: 1.7, maxWidth: "560px",
              margin: "0 0 3.5rem 0", fontWeight: 300
            }}
          >
            Engineering elegant solutions to complex problems. I architect scalable backends and craft intuitive, highly-performant web applications.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: "1.25rem", flexWrap: "wrap" }}
            className="hero-buttons"
          >
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontSize: "15px", letterSpacing: "1px",
              padding: "16px 32px",
              background: "var(--accent-primary)", color: "#fff",
              textDecoration: "none", fontWeight: 600,
              borderRadius: "4px",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseOver={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 10px 25px -5px var(--accent-glow)"; }}
            onMouseOut={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
            >
              Explore Work <ArrowRight size={18} />
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontSize: "15px", letterSpacing: "1px",
              padding: "16px 32px", color: "var(--text-primary)",
              textDecoration: "none", fontWeight: 500,
              borderRadius: "4px",
              background: "rgba(255, 255, 255, 0.03)",
              border: "1px solid rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(10px)",
              transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            onMouseOver={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.08)"; e.currentTarget.style.transform = "translateY(-2px)"; }}
            onMouseOut={(e) => { e.currentTarget.style.background = "rgba(255, 255, 255, 0.03)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Get in Touch <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* Right Side: Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative", marginTop: "-30px" }}
          className="hero-image-wrapper"
        >
          {/* Soft glowing animated blob behind image */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 90, 0]
            }}
            transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              width: "120%",
              height: "120%",
              background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
              filter: "blur(40px)",
              zIndex: 0,
              opacity: 0.8
            }} 
          />

          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "420px" }}
          >
            <div style={{
              position: "relative",
              borderRadius: "24px",
              padding: "8px",
              background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))",
              backdropFilter: "blur(10px)",
              boxShadow: "0 25px 50px -12px rgba(0,0,0,0.5)"
            }}>
              <img 
                src={heroImg} 
                alt="Shamara Trinki - Full Stack Developer" 
                style={{
                  width: "100%", height: "auto",
                  objectFit: "cover",
                  borderRadius: "18px",
                  display: "block"
                }}
              />
            </div>

          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        style={{
          position: "absolute", bottom: "40px", left: "50%",
          transform: "translateX(-50%)", display: "flex", flexDirection: "column",
          alignItems: "center", gap: "12px", color: "rgba(255,255,255,0.4)"
        }}
        className="scroll-indicator"
      >
        <span style={{ fontSize: "10px", letterSpacing: "4px", textTransform: "uppercase", fontWeight: 500 }}>Scroll Down</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blink { 50% { opacity: 0; } }
        
        @media (max-width: 992px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 4rem !important;
          }
          .hero-text {
            align-items: center !important;
          }
          .hero-text h1, .hero-text p {
            text-align: center !important;
          }
          .hero-buttons {
            justify-content: center !important;
          }
          .hero-image-wrapper {
            justify-content: center !important;
          }
          .hero-badge {
            left: 20px !important;
            bottom: 20px !important;
          }
        }
        @media (max-width: 768px) {
          .scroll-indicator {
            display: none !important;
          }
        }
      `}</style>
    </section>
  );
}
