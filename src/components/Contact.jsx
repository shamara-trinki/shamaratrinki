import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Briefcase, Mail, Code2, ArrowUpRight } from 'lucide-react';
import SectionLabel from './SectionLabel';

const contactLinks = [
  {
    icon: <Briefcase size={22} />,
    label: "LinkedIn",
    value: "Shamara Trinki Perera",
    href: "https://www.linkedin.com/in/shamara-trinki-perera",
    desc: "Connect with me professionally"
  },
  {
    icon: <Mail size={22} />,
    label: "Email",
    value: "shamaratrinki@gmail.com",
    href: "mailto:shamaratrinki@gmail.com",
    desc: "Drop me a direct email"
  },
  {
    icon: <Code2 size={22} />,
    label: "GitHub",
    value: "shamara-trinki",
    href: "https://github.com/shamara-trinki",
    desc: "Check out my code"
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.name && form.email && form.message) {
      const accessKey = "4866a2a3-92e8-4d32-b23e-9444b4e40b45";
      try {
        const response = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ access_key: accessKey, name: form.name, email: form.email, message: form.message })
        });
        if (response.ok) {
          setSent(true);
          setTimeout(() => setSent(false), 3000);
          setForm({ name: "", email: "", message: "" });
        } else {
          alert("Failed to send message.");
        }
      } catch (error) {
        console.error("Error:", error);
        alert("An error occurred.");
      }
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
    <section id="contact" style={{ padding: "8rem 2rem 10rem", maxWidth: "1200px", margin: "0 auto" }}>
      <SectionLabel label="05 — Contact" />

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "5rem", alignItems: "start" }}>

        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <h2 style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 800, color: "var(--text-primary)",
            margin: "0 0 1.25rem", letterSpacing: "-0.03em", lineHeight: 1.1
          }}>
            LET'S BUILD SOMETHING <br /><span className="text-gradient">REMARKABLE</span>
          </h2>

          <p style={{
            fontSize: "1.1rem", color: "var(--text-secondary)",
            lineHeight: 1.8, marginBottom: "3rem", fontWeight: 300
          }}>
            Open to full-time roles, freelance projects, and exciting collaborations.
            Reach out directly or drop a message — I'll reply within 24 hours.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 + 0.2 }}
                whileHover={{ x: 5 }}
                style={{
                  display: "flex", alignItems: "center", gap: "1.25rem",
                  padding: "1.25rem 1.5rem",
                  background: "rgba(20,20,20,0.5)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  borderRadius: "16px",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  textDecoration: "none",
                  color: "inherit",
                  transition: "all 0.3s cubic-bezier(0.16,1,0.3,1)",
                  position: "relative",
                  overflow: "hidden",
                  cursor: "pointer"
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = "var(--accent-primary)";
                  e.currentTarget.style.background = "rgba(249,115,22,0.06)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.background = "rgba(20,20,20,0.5)";
                }}
              >
                <div style={{
                  width: "48px", height: "48px", borderRadius: "12px", flexShrink: 0,
                  background: "rgba(249,115,22,0.1)",
                  border: "1px solid rgba(249,115,22,0.2)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "var(--accent-primary)"
                }}>
                  {link.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: "0.75rem", color: "var(--text-secondary)", fontWeight: 600, letterSpacing: "1.5px", textTransform: "uppercase", marginBottom: "3px" }}>
                    {link.label}
                  </div>
                  <div style={{ fontSize: "0.95rem", color: "var(--text-primary)", fontWeight: 500, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    {link.value}
                  </div>
                  <div style={{ fontSize: "0.8rem", color: "var(--text-secondary)", fontWeight: 300, marginTop: "2px" }}>
                    {link.desc}
                  </div>
                </div>
                <ArrowUpRight size={18} style={{ color: "var(--accent-primary)", flexShrink: 0, opacity: 0.7 }} />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT PANEL: FORM */}
        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          onSubmit={handleSubmit}
          className="glass-panel"
          style={{ display: "flex", flexDirection: "column", gap: "1.5rem", padding: "3rem" }}
        >
          <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.5rem", fontWeight: 700, margin: "0 0 0.5rem", color: "var(--text-primary)" }}>
            Send a Message
          </h3>

          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            <div style={{ flex: "1 1 180px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>Name</label>
              <input
                placeholder="Enter Name" value={form.name}
                onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                style={inputStyle('name')}
                onFocus={() => setFocused('name')}
                onBlur={() => setFocused('')}
                required
              />
            </div>
            <div style={{ flex: "1 1 180px" }}>
              <label style={{ display: "block", marginBottom: "8px", fontSize: "14px", color: "var(--text-secondary)", fontWeight: 500 }}>Email</label>
              <input
                placeholder="Enter Email" type="email" value={form.email}
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
            fontSize: "14px", letterSpacing: "2px", padding: "18px 32px", cursor: "pointer",
            background: sent ? "#22c55e" : "var(--accent-primary)",
            color: "#fff", border: "none", borderRadius: "8px", textTransform: "uppercase",
            fontWeight: 700, transition: "all 0.3s", marginTop: "0.5rem",
            boxShadow: "0 10px 20px -10px var(--accent-glow)"
          }}>
            {sent ? "Message Sent! ✓" : "Send Message"} {!sent && <Send size={18} />}
          </button>
        </motion.form>

      </div>
    </section>
  );
}
