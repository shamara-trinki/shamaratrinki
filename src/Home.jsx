import Navbar from "./components/Navbar";
import { Mail, Briefcase, Code2 } from "lucide-react";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <main style={{ position: "relative", zIndex: 1 }}>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>

      <footer style={{
        position: "relative", zIndex: 1,
        padding: "3rem 2rem 2.5rem",
        borderTop: "1px solid rgba(255,255,255,0.05)",
      }}>
        <div style={{
          position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
          width: "60%", height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent-primary), transparent)",
          opacity: 0.4
        }} />

        <div style={{
          maxWidth: "1200px", margin: "0 auto",
          display: "flex", flexWrap: "wrap",
          justifyContent: "space-between", alignItems: "center", gap: "1.5rem"
        }}>
          <div>
            <div style={{
              fontFamily: "var(--font-heading)", fontWeight: 800,
              fontSize: "1.1rem", letterSpacing: "-0.02em",
              color: "var(--text-primary)", marginBottom: "4px"
            }}>
              Shamara<span className="text-gradient"> Trinki</span>
            </div>
            <div style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 400 }}>
              Full-Stack Developer · Associate Software Engineer
            </div>
          </div>

          <div style={{ display: "flex", gap: "0.75rem" }}>
            {[
              { icon: <Mail size={16} />, href: "mailto:shamaratrinki@gmail.com", label: "Email" },
              { icon: <Briefcase size={16} />, href: "https://linkedin.com/in/shamara-trinki28/", label: "LinkedIn" },
              { icon: <Code2 size={16} />, href: "https://github.com/shamara-trinki", label: "GitHub" },
            ].map(link => (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                title={link.label}
                style={{
                  width: 38, height: 38, borderRadius: "10px",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
                  color: "var(--text-secondary)", textDecoration: "none",
                  transition: "all 0.25s ease"
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent-primary)"; e.currentTarget.style.borderColor = "rgba(249,115,22,0.4)"; e.currentTarget.style.background = "rgba(249,115,22,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"; e.currentTarget.style.background = "rgba(255,255,255,0.04)"; }}
              >
                {link.icon}
              </a>
            ))}
          </div>

          <div style={{ fontSize: "12px", color: "var(--text-secondary)", fontWeight: 400 }}>
            © {new Date().getFullYear()} Shamara Trinki. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
