import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Mail, ChevronDown } from "lucide-react";
import heroImg from "../assets/my.png";

const STATS = [
  { value: "10+", label: "Projects Delivered" },
  { value: "2+",  label: "Years Experience"   },
  { value: "1",   label: "Workplace"           },
  { value: "4+",  label: "Tech Stacks"         },
];

const TECH_TAGS = ["React", "Node.js", "TypeScript", "MySQL", "Express"];

export default function Hero() {
  const [typed, setTyped]       = useState("");
  const titles                  = ["Full Stack Developer", "API Architect", "Associate Software Engineer"];
  const [titleIdx, setTitleIdx] = useState(0);
  const [charIdx,  setCharIdx]  = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIdx];
    const speed   = deleting ? 38 : 75;
    const timer   = setTimeout(() => {
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
      {/* Ambient glows */}
      <div style={{
        position: "absolute", top: "15%", left: "5%",
        width: "45vw", height: "45vw",
        background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 65%)",
        filter: "blur(90px)", zIndex: 0, opacity: 0.7
      }} />
      <div style={{
        position: "absolute", bottom: "5%", right: "5%",
        width: "30vw", height: "30vw",
        background: "radial-gradient(circle, rgba(251,146,60,0.12) 0%, transparent 70%)",
        filter: "blur(70px)", zIndex: 0
      }} />

      <div style={{
        position: "relative", zIndex: 1, maxWidth: "1200px", margin: "0 auto", width: "100%",
        display: "grid", gridTemplateColumns: "1.15fr 0.85fr", gap: "5rem", alignItems: "center",
      }} className="hero-grid">

        {/* ── LEFT ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }} className="hero-text">

          {/* Pulsing availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontSize: "11px", letterSpacing: "2.5px",
              color: "var(--text-primary)", textTransform: "uppercase", fontWeight: 700,
              padding: "8px 18px", borderRadius: "99px",
              marginBottom: "2.5rem",
              background: "rgba(249,115,22,0.08)",
              border: "1px solid rgba(249,115,22,0.25)",
              backdropFilter: "blur(12px)",
            }}
          >
            <span style={{ position: "relative", width: 8, height: 8, display: "inline-flex" }}>
              <span style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "var(--accent-primary)",
                animation: "ping 1.5s cubic-bezier(0,0,0.2,1) infinite"
              }} />
              <span style={{
                position: "relative", display: "inline-block",
                width: 8, height: 8, borderRadius: "50%",
                background: "var(--accent-primary)",
                boxShadow: "0 0 8px var(--accent-primary)"
              }} />
            </span>
            Available for Opportunities
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(2.8rem, 6.5vw, 5.5rem)",
              fontWeight: 900, lineHeight: 1.05,
              margin: "0 0 1.25rem",
              letterSpacing: "-0.04em",
              color: "var(--text-primary)",
            }}
          >
            Hi, I am<br />
            <span style={{
              background: "linear-gradient(120deg, #ffffff 20%, var(--accent-primary) 100%)",
              WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text"
            }}>Shamara Trinki</span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{
              fontSize: "clamp(1rem, 2vw, 1.4rem)",
              color: "var(--text-secondary)", marginBottom: "1.5rem",
              minHeight: "2rem", fontWeight: 400, letterSpacing: "0.5px",
              fontFamily: "var(--font-heading)"
            }}
          >
            <span style={{ color: "var(--accent-primary)", fontWeight: 700 }}>&gt;</span>{" "}
            {typed}
            <span style={{
              display: "inline-block", width: "2px", height: "1.1em",
              background: "var(--accent-primary)", marginLeft: "4px",
              verticalAlign: "middle", animation: "blink 1s step-end infinite"
            }} />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontSize: "1.1rem", color: "rgba(255,255,255,0.65)",
              lineHeight: 1.75, maxWidth: "540px",
              margin: "0 0 3rem 0", fontWeight: 300
            }}
          >
            Engineering elegant solutions to complex problems. I architect scalable backends
            and craft intuitive, highly-performant web applications.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "3.5rem" }}
            className="hero-buttons"
          >
            <a href="#projects" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontSize: "14px", letterSpacing: "1.5px", fontWeight: 700,
              padding: "15px 30px",
              background: "linear-gradient(135deg, var(--accent-primary), #ea580c)",
              color: "#fff", textDecoration: "none", borderRadius: "12px",
              boxShadow: "0 8px 24px -8px var(--accent-glow-strong)",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
              onMouseOver={e => { e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.boxShadow = "0 16px 32px -8px var(--accent-glow-strong)"; }}
              onMouseOut={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 24px -8px var(--accent-glow-strong)"; }}
            >
              Explore Work <ArrowRight size={17} />
            </a>
            <a href="#contact" style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              fontSize: "14px", letterSpacing: "1.5px", fontWeight: 600,
              padding: "15px 30px", color: "var(--text-primary)",
              textDecoration: "none", borderRadius: "12px",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
            }}
              onMouseOver={e => { e.currentTarget.style.background = "rgba(255,255,255,0.09)"; e.currentTarget.style.transform = "translateY(-3px)"; e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)"; }}
              onMouseOut={e => { e.currentTarget.style.background = "rgba(255,255,255,0.04)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"; }}
            >
              Get in Touch <Mail size={17} />
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            style={{
              display: "flex", gap: "0", flexWrap: "wrap",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "2rem", width: "100%",
            }}
          >
            {STATS.map((stat, i) => (
              <div key={stat.label} style={{
                display: "flex", flexDirection: "column",
                paddingRight: "2.5rem",
                borderRight: i < STATS.length - 1 ? "1px solid rgba(255,255,255,0.07)" : "none",
                paddingLeft: i > 0 ? "2.5rem" : 0,
              }}>
                <span style={{
                  fontFamily: "var(--font-heading)", fontSize: "2rem",
                  fontWeight: 800, letterSpacing: "-0.04em",
                  background: "linear-gradient(120deg, #fff 0%, var(--accent-secondary) 100%)",
                  WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text",
                }}>{stat.value}</span>
                <span style={{ fontSize: "0.72rem", color: "var(--text-secondary)", fontWeight: 500, letterSpacing: "0.5px", marginTop: "2px" }}>{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── RIGHT: Image ── */}
        <motion.div
          initial={{ opacity: 0, scale: 0.88 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "center", alignItems: "center", position: "relative" }}
          className="hero-image-wrapper"
        >
          {/* Rotating glow blob */}
          <motion.div
            animate={{ scale: [1, 1.12, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute", width: "110%", height: "110%",
              background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 60%)",
              filter: "blur(50px)", zIndex: 0, opacity: 0.9
            }}
          />

          {/* Floating tech tags */}
          {TECH_TAGS.map((tag, i) => {
            const positions = [
              { top: "8%",  left: "-15%" },
              { top: "28%", right: "-18%" },
              { top: "60%", left: "-18%" },
              { bottom: "18%", right: "-15%" },
              { bottom: "5%", left: "10%" },
            ];
            return (
              <motion.div
                key={tag}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + i * 0.12, type: "spring", stiffness: 120 }}
                style={{
                  position: "absolute", ...positions[i], zIndex: 3,
                  padding: "6px 14px", borderRadius: "99px",
                  background: "rgba(10,10,14,0.75)",
                  border: "1px solid rgba(249,115,22,0.35)",
                  backdropFilter: "blur(14px)",
                  fontSize: "11px", fontWeight: 700, letterSpacing: "0.5px",
                  color: "var(--accent-secondary)",
                  animation: `float ${3 + i * 0.4}s ease-in-out infinite`,
                  animationDelay: `${i * 0.5}s`,
                  whiteSpace: "nowrap",
                  boxShadow: "0 4px 16px rgba(0,0,0,0.4)"
                }}
              >
                {tag}
              </motion.div>
            );
          })}

          {/* Image frame */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "400px" }}
          >
            <div style={{
              position: "relative",
              borderRadius: "28px",
              padding: "6px",
              background: "linear-gradient(145deg, rgba(249,115,22,0.4), rgba(255,255,255,0.05) 60%, rgba(249,115,22,0.15))",
              boxShadow: "0 30px 60px -15px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.04)",
            }}>
              <div style={{
                borderRadius: "24px",
                overflow: "hidden",
                background: "linear-gradient(145deg, rgba(20,20,28,0.8), rgba(10,10,16,0.9))",
              }}>
                <img
                  src={heroImg}
                  alt="Shamara Trinki - Full Stack Developer"
                  style={{ width: "100%", height: "auto", objectFit: "cover", display: "block", borderRadius: "24px" }}
                />
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        style={{
          position: "absolute", bottom: "36px", left: "50%",
          transform: "translateX(-50%)", display: "flex", flexDirection: "column",
          alignItems: "center", gap: "10px", color: "rgba(255,255,255,0.3)"
        }}
        className="scroll-indicator"
      >
        <span style={{ fontSize: "9px", letterSpacing: "4px", textTransform: "uppercase", fontWeight: 600 }}>Scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ChevronDown size={16} />
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 960px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            text-align: center !important;
            gap: 3rem !important;
          }
          .hero-text { align-items: center !important; }
          .hero-buttons { justify-content: center !important; }
          .hero-image-wrapper { order: -1 !important; max-width: 320px; margin: 0 auto; }
        }
        @media (max-width: 600px) {
          .scroll-indicator { display: none !important; }
        }
      `}</style>
    </section>
  );
}
