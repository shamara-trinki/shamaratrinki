import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";

function GridBg() {
  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none",
      backgroundImage: `
        linear-gradient(rgba(249,115,22,0.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(249,115,22,0.03) 1px, transparent 1px)
      `,
      backgroundSize: "48px 48px",
    }} />
  );
}

function AmbientGlow() {
  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 0, pointerEvents: "none", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: "-10%", left: "-10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(249,115,22,0.15) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(80px)" }} />
      <div style={{ position: "absolute", bottom: "-10%", right: "-10%", width: "40vw", height: "40vw", background: "radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)", borderRadius: "50%", filter: "blur(80px)" }} />
    </div>
  );
}

export default function Home() {
  return (
    <div style={{ position: "relative" }}>
      <GridBg />
      <AmbientGlow />
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
        textAlign: "center", padding: "2rem",
        fontSize: "14px", color: "var(--text-secondary)", fontWeight: 400,
        borderTop: "1px solid var(--glass-border)", position: "relative", zIndex: 1
      }}>
        © {new Date().getFullYear()} Shamara Trinki. All Rights Reserved.
      </footer>
    </div>
  );
}
