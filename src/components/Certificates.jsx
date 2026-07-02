import { motion } from 'framer-motion';
import { Award, ExternalLink } from 'lucide-react';
import SectionLabel from './SectionLabel';

import jsCertPdf from '../assets/javascript_basic certificate.pdf';
import pyCertPdf from '../assets/Python_for_Beginners_E-Certificate.pdf';
import sqlCertPdf from '../assets/sql_basic certificate.pdf';

import jsCertImg from '../assets/javascriptbasic.png';
import pyCertImg from '../assets/pythonfor beginers.png';
import sqlCertImg from '../assets/sqlbasic.png';

const CERTIFICATES = [
  {
    title: "JavaScript (Basic) Certificate",
    issuer: "HackerRank",
    date: "May 2026",
    link: jsCertPdf,
    image: jsCertImg,
  },
  {
    title: "Python for Beginners",
    issuer: "University of Moratuwa",
    date: "Oct 2022",
    link: pyCertPdf,
    image: pyCertImg,
  },
  {
    title: "SQL (Basic) Certificate",
    issuer: "HackerRank",
    date: "May 2026",
    link: sqlCertPdf,
    image: sqlCertImg,
  }
];

export default function Certificates() {
  return (
    <section id="certificates" style={{ padding: "8rem 2rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionLabel label="05 — Certificates" />
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
        PROFESSIONAL <span className="text-gradient">CERTIFICATIONS</span>
      </motion.h2>
      
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
        {CERTIFICATES.map((cert, i) => (
          <motion.div 
            key={cert.title} 
            className="glass-panel"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8, borderColor: "var(--accent-secondary)" }}
            style={{
              padding: "2.5rem",
              position: "relative", overflow: "hidden",
              display: "flex", flexDirection: "column",
              transition: "border-color 0.3s",
            }}
          >
            {cert.image && (
              <div style={{
                margin: "-2.5rem -2.5rem 1.5rem -2.5rem",
                height: "180px",
                backgroundImage: `url(${cert.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderBottom: "1px solid var(--glass-border)",
                position: "relative"
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(to top, var(--bg-color), transparent)"
                }} />
              </div>
            )}
            <div style={{
              position: "absolute", top: cert.image ? 150 : -30, right: -30,
              width: 100, height: 100,
              background: "radial-gradient(circle, var(--accent-glow) 0%, transparent 70%)",
              pointerEvents: "none",
            }} />
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1rem" }}>
              {!cert.image && (
                <div style={{
                  width: 48, height: 48, borderRadius: "12px",
                  background: "rgba(249,115,22,0.1)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent-primary)", marginBottom: "1rem"
                }}>
                  <Award size={24} />
                </div>
              )}
              <a href={cert.link} target="_blank" rel="noopener noreferrer" style={{ marginLeft: "auto", color: "var(--text-secondary)", transition: "color 0.2s" }} onMouseEnter={e => e.currentTarget.style.color="var(--accent-primary)"} onMouseLeave={e => e.currentTarget.style.color="var(--text-secondary)"}><ExternalLink size={20} /></a>
            </div>
            
            <h3 style={{
              fontFamily: "var(--font-heading)",
              fontSize: "1.3rem", fontWeight: 700,
              color: "var(--text-primary)", margin: "0 0 0.5rem 0",
            }}>{cert.title}</h3>
            
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "auto", paddingTop: "1.5rem" }}>
              <span style={{ fontSize: "1.05rem", color: "var(--text-secondary)", fontWeight: 500 }}>{cert.issuer}</span>
              <span style={{ fontSize: "14px", color: "var(--accent-secondary)", fontWeight: 600 }}>{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
