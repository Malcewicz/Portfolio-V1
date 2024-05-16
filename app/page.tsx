"use client";

import "@/app/globals.css";
import "@/app/_styles/hero_page.css";
import SvgHero from "@/public/undraw_heatmap";
import { motion } from "framer-motion";
import ExternalLink from "@/app/_components/external_link";

export default function Home() {
  return (
    <header>
      <motion.div
        id="bg-img"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        <SvgHero />
      </motion.div>
      <motion.div
        id="hero"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.4 }}
      >
        <p>Hi! I'm</p>
        <h1>Maciej Bernatowicz</h1>
        <p>
          A software developer specializing in{" "}
          <b style={{ color: "hsl(200, 80%, 50%)" }}>front-end</b> web
          development and mobile applications, creating responsive and
          user-centric designs.
        </p>

        <div className="btn">
          <a
            href="/MB_resume.pdf"
            type="application/pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
            <ExternalLink />
          </a>
        </div>
      </motion.div>
    </header>
  );
}
