import { motion } from 'framer-motion';

export default function SectionLabel({ label }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        fontSize: "13px", letterSpacing: "4px",
        color: "var(--text-secondary)", textTransform: "uppercase",
        marginBottom: "2rem", fontWeight: 600,
        display: "flex", alignItems: "center", gap: "1rem"
      }}
    >
      <span style={{ width: "40px", height: "1px", background: "var(--glass-border)" }} />
      {label}
    </motion.div>
  );
}
