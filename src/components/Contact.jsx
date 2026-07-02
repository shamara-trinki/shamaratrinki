import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Code, Briefcase, MessageSquare } from 'lucide-react';
import SectionLabel from './SectionLabel';

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      setSent(true);
      setTimeout(() => setSent(false), 3000);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const inputStyle = (id) => ({
    width: "100%", boxSizing: "border-box",
    background: "rgba(10, 0, 20, 0.4)",
    border: `1px solid ${focused === id ? 'var(--accent-primary)' : 'var(--glass-border)'}`,
    borderRadius: "8px", padding: "16px 20px",
    fontFamily: "var(--font-body)",
    fontSize: "16px", color: "var(--text-primary)",
    outline: "none", transition: "all 0.3s ease",
    fontWeight: 300,
    boxShadow: focused === id ? '0 0 0 4px rgba(249,115,22,0.1)' : 'none'
  });

  return (
    <section id="contact" style={{ padding: "8rem 2rem 10rem", maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
      <SectionLabel label="05 — Contact" />
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{
          fontFamily: "var(--font-heading)",
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontWeight: 800, color: "var(--text-primary)",
          margin: "0 0 1rem", letterSpacing: "-0.5px",
        }}
      >
        LET'S BUILD SOMETHING <br/><span className="text-gradient">REMARKABLE</span>
      </motion.h2>
      
      <motion.p 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        style={{
          fontSize: "1.1rem", color: "var(--text-secondary)",
          lineHeight: 1.8, marginBottom: "4rem", fontWeight: 300,
        }}
      >
        Open to full-time roles, freelance projects, and exciting collaborations. Drop a message and I'll get back within 24 hours.
      </motion.p>
      
      <motion.form 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
        onSubmit={handleSubmit}
        className="glass-panel"
        style={{ display: "flex", flexDirection: "column", gap: "1.5rem", textAlign: "left", padding: "3rem" }}
      >
        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 200px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>Name</label>
            <input 
              placeholder="John Doe" value={form.name}
              onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
              style={inputStyle('name')}
              onFocus={() => setFocused('name')}
              onBlur={() => setFocused('')}
              required
            />
          </div>
          <div style={{ flex: "1 1 200px" }}>
            <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>Email</label>
            <input 
              placeholder="john@example.com" type="email" value={form.email}
              onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
              style={inputStyle('email')}
              onFocus={() => setFocused('email')}
              onBlur={() => setFocused('')}
              required
            />
          </div>
        </div>
        
        <div>
          <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>Message</label>
          <textarea 
            placeholder="Tell me about your project..." rows={5}
            value={form.message}
            onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
            style={{ ...inputStyle('message'), resize: "vertical" }}
            onFocus={() => setFocused('message')}
            onBlur={() => setFocused('')}
            required
          />
        </div>
        
        <button type="submit" style={{
          display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "10px",
          fontSize: "14px", letterSpacing: "2px",
          padding: "18px 32px", cursor: "pointer",
          background: sent ? "#22c55e" : "var(--accent-primary)",
          color: "#fff", border: "none",
          borderRadius: "8px", textTransform: "uppercase",
          fontWeight: 700, transition: "all 0.3s",
          marginTop: "1rem", boxShadow: "0 10px 20px -10px var(--accent-glow)"
        }}>
          {sent ? "Message Sent!" : "Send Message"} <Send size={18} />
        </button>
      </motion.form>
      
      <div style={{ display: "flex", justifyContent: "center", gap: "2rem", marginTop: "4rem" }}>
        {[
          { icon: <Code />, label: "GitHub" },
          { icon: <Briefcase />, label: "LinkedIn" },
          { icon: <MessageSquare />, label: "Twitter" }
        ].map(social => (
          <a key={social.label} href="#" style={{
            display: "flex", alignItems: "center", justifyContent: "center",
            width: "50px", height: "50px", borderRadius: "50%",
            background: "rgba(255,255,255,0.03)", border: "1px solid var(--glass-border)",
            color: "var(--text-secondary)", transition: "all 0.3s",
          }}
            onMouseEnter={e => { e.currentTarget.style.color = "var(--text-primary)"; e.currentTarget.style.borderColor = "var(--accent-primary)"; e.currentTarget.style.background = "var(--accent-glow)" }}
            onMouseLeave={e => { e.currentTarget.style.color = "var(--text-secondary)"; e.currentTarget.style.borderColor = "var(--glass-border)"; e.currentTarget.style.background = "rgba(255,255,255,0.03)" }}
          >
            {social.icon}
          </a>
        ))}
      </div>
    </section>
  );
}
