import { useState } from "react";
import { motion } from "framer-motion";
import SectionLabel from "./SectionLabel";

const ALL_SKILLS = [
  { name: "React",         slug: "react",         cat: "Frontend"  },
  { name: "TypeScript",    slug: "typescript",    cat: "Frontend"  },
  { name: "Next.js",       slug: "nextdotjs",     cat: "Frontend"  },
  { name: "Tailwind CSS",  slug: "tailwindcss",   cat: "Frontend"  },
  { name: "HTML5",         slug: "html5",         cat: "Frontend"  },
  { name: "CSS3",          slug: "css3",          cat: "Frontend"  },
  { name: "Framer Motion", slug: "framer",        cat: "Frontend"  },
  { name: "Node.js",       slug: "nodedotjs",     cat: "Backend"   },
  { name: "Express",       slug: "express",       cat: "Backend"   },
  { name: "PHP",           slug: "php",           cat: "Backend"   },
  { name: "VB.NET",        slug: "dotnet",        cat: "Backend"   },
  { name: "Spring Boot",   slug: "springboot",    cat: "Backend"   },
  { name: "Django",        slug: "django",        cat: "Backend"   },
  { name: "MySQL",         slug: "mysql",         cat: "Database"  },
  { name: "MongoDB",       slug: "mongodb",       cat: "Database"  },
  { name: "PostgreSQL",    slug: "postgresql",    cat: "Database"  },
  { name: "Supabase",      slug: "supabase",      cat: "Database"  },
  { name: "Docker",        slug: "docker",        cat: "DevOps"    },
  { name: "AWS",           slug: "amazonaws",     cat: "DevOps"    },
];

const CATS = ["All", "Frontend", "Backend", "Database", "DevOps"];

export default function Skills() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? ALL_SKILLS : ALL_SKILLS.filter(s => s.cat === active);
  // duplicate for seamless marquee loop
  const marqueeItems = [...filtered, ...filtered];

  return (
    <section id="skills" style={{ padding: "8rem 0", overflow: "hidden" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 2rem" }}>
        <SectionLabel label="02 — Skills" />
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: 800, color: "var(--text-primary)",
            margin: "0 0 2.5rem", letterSpacing: "-0.04em",
          }}
        >
          TECH <span className="text-gradient">ARSENAL</span>
        </motion.h2>

        {/* Category filter pills */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginBottom: "3.5rem" }}
        >
          {CATS.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              style={{
                padding: "0.55rem 1.4rem",
                borderRadius: "99px",
                border: `1px solid ${active === cat ? "var(--accent-primary)" : "rgba(255,255,255,0.1)"}`,
                background: active === cat ? "rgba(249,115,22,0.15)" : "transparent",
                color: active === cat ? "var(--accent-primary)" : "var(--text-secondary)",
                fontSize: "0.875rem", fontWeight: 600, cursor: "pointer",
                transition: "all 0.25s ease",
                fontFamily: "var(--font-body)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>
      </div>

      {/* Marquee track */}
      <div style={{ position: "relative" }}>
        {/* Fade edges */}
        <div style={{
          position: "absolute", top: 0, left: 0, width: "12vw", height: "100%", zIndex: 2,
          background: "linear-gradient(90deg, var(--bg-color), transparent)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", top: 0, right: 0, width: "12vw", height: "100%", zIndex: 2,
          background: "linear-gradient(-90deg, var(--bg-color), transparent)",
          pointerEvents: "none"
        }} />

        <div
          key={active}
          style={{
            display: "flex",
            gap: "1rem",
            width: "max-content",
            animation: `marquee ${Math.max(18, filtered.length * 2.2)}s linear infinite`,
            paddingBottom: "4px",
          }}
        >
          {marqueeItems.map((skill, i) => (
            <motion.div
              key={`${skill.name}-${i}`}
              whileHover={{ y: -5, scale: 1.06, borderColor: "var(--accent-primary)" }}
              style={{
                display: "flex", alignItems: "center", gap: "0.75rem",
                padding: "1rem 1.5rem",
                background: "rgba(18,18,22,0.7)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "14px",
                backdropFilter: "blur(16px)",
                cursor: "default",
                whiteSpace: "nowrap",
                flexShrink: 0,
                transition: "all 0.25s cubic-bezier(0.16,1,0.3,1)",
                boxShadow: "0 4px 20px rgba(0,0,0,0.3)"
              }}
            >
              <img
                src={`https://cdn.simpleicons.org/${skill.slug}/f97316`}
                alt={skill.name}
                style={{ width: 22, height: 22, objectFit: "contain", flexShrink: 0 }}
              />
              <span style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)" }}>
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
