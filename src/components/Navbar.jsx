import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const NAV_ITEMS = ["Home", "About", "Skills", "Projects", "Experience", "Certificates", "Contact"];

export default function Navbar() {
  const [active, setActive] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Update active section based on scroll
      const sections = NAV_ITEMS.map(item => document.getElementById(item.toLowerCase()));
      const scrollPos = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPos) {
          setActive(NAV_ITEMS[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? "var(--glass-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--glass-border)" : "1px solid transparent",
        transition: "all 0.3s ease",
        padding: scrolled ? "1rem 2rem" : "1.5rem 2rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div style={{
            fontFamily: "var(--font-heading)", fontSize: "1.2rem", fontWeight: 800, letterSpacing: "1px",
            color: "var(--text-primary)"
          }}>
            ST<span style={{ color: "var(--accent-primary)" }}></span>
          </div>

          {/* Desktop Nav */}
          <nav style={{ display: "none", gap: "2rem", '@media (min-width: 768px)': { display: "flex" } }} className="desktop-nav">
            {NAV_ITEMS.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" });
                  setActive(item);
                }}
                style={{
                  fontSize: "14px", fontWeight: 500, letterSpacing: "1px", textTransform: "uppercase",
                  color: active === item ? "var(--accent-primary)" : "var(--text-secondary)",
                  textDecoration: "none", transition: "color 0.2s", position: "relative"
                }}
                onMouseEnter={e => { if (active !== item) e.currentTarget.style.color = "var(--text-primary)" }}
                onMouseLeave={e => { if (active !== item) e.currentTarget.style.color = "var(--text-secondary)" }}
              >
                {item}
                {active === item && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: "absolute", bottom: -6, left: 0, right: 0,
                      height: 2, background: "var(--accent-primary)", borderRadius: 2,
                      boxShadow: "0 0 8px var(--accent-glow)"
                    }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-toggle"
            style={{
              display: "block", background: "none", border: "none", color: "var(--text-primary)", cursor: "pointer",
              padding: "0"
            }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: "fixed", top: "70px", left: 0, right: 0, zIndex: 99,
              background: "var(--bg-color)", borderBottom: "1px solid var(--glass-border)",
              padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem"
            }}
          >
            {NAV_ITEMS.map(item => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById(item.toLowerCase()).scrollIntoView({ behavior: "smooth" });
                  setActive(item);
                  setMobileMenuOpen(false);
                }}
                style={{
                  fontSize: "18px", fontWeight: 600,
                  color: active === item ? "var(--accent-primary)" : "var(--text-primary)",
                  textDecoration: "none"
                }}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <style>{`
        @media (min-width: 768px) {
          .mobile-toggle { display: none !important; }
          .desktop-nav { display: flex !important; }
        }
      `}</style>
    </>
  );
}