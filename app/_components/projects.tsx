"use client";

import "@/app/_styles/projects.css";
import { useState } from "react";
import MotionSection from "./motion_section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import wakely from "@/lib/projects/wakely.json";
import portfolio from "@/lib/projects/portfolio.json";
import lakeview from "@/lib/projects/lakeview.json";
import sushi from "@/lib/projects/sushi.json";

const Projects = () => {
  const [showProject, setShowProject] = useState(false);

  return (
    <MotionSection id="projects">
      <h2>Featured Projects</h2>

      <article id="wrapper">
        {/* Wakely */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="card"
        >
          <div className="card-img">
            <Image
              fill
              src="/wakely_1080p.webp"
              alt="Showcase of the Wakely mobile app"
            />
          </div>
          <div className="card-content">
            <h3>{wakely.title}</h3>
            <p>{wakely.description}</p>
            <ul>
              {wakely.tags.map((tag) => {
                return <li key={tag.id}>{tag.name}</li>;
              })}
            </ul>
            <div className="links">
              <div className="btn" onClick={() => setShowProject(true)}>
                <a>See the design</a>
              </div>
              <div className="btn disabled">
                <a aria-disabled>Code private!</a>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Portfolio */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="card"
        >
          <div className="card-img">
            <Image
              fill
              src="/portfolio_1080p.webp"
              alt="Screenshot of the main page of my portfolio"
            />
          </div>
          <div className="card-content">
            <h3>{portfolio.title}</h3>
            <p>{portfolio.description}</p>
            <ul>
              {portfolio.tags.map((tag) => {
                return <li key={tag.id}>{tag.name}</li>;
              })}
            </ul>
            <div className="links">
              <div className="btn disabled">
                <a aria-disabled>You're here!</a>
              </div>
              <div className="btn">
                <Link href={portfolio.codeLink} target="_blank">
                  See the code
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Lakeview */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.4 }}
          className="card"
        >
          <div className="card-img">
            <Image
              fill
              src="/lakeview_1080p.webp"
              alt="Screenshot of the main page of LakeView Apartments"
            />
          </div>
          <div className="card-content">
            <h3>{lakeview.title}</h3>
            <p>{lakeview.description}</p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Figma</li>
            </ul>
            <div className="links">
              <div className="btn">
                <Link href={lakeview.websiteLink} target="_blank">
                  Live website
                </Link>
              </div>
              <div className="btn">
                <Link href={lakeview.codeLink} target="_blank">
                  See the code
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Sushi Project */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.4 }}
          className="card"
        >
          <div className="card-img">
            <Image
              fill
              src="/sushi_project_1080p.webp"
              alt="Screenshot of the main page of the sushi project website"
            />
          </div>
          <div className="card-content">
            <h3>{sushi.title}</h3>
            <p>{sushi.description}</p>
            <ul>
              {sushi.tags.map((tag) => {
                return <li key={tag.id}>{tag.name}</li>;
              })}
            </ul>
            <div className="links">
              <div className="btn">
                <Link href={sushi.websiteLink} target="_blank">
                  Live website
                </Link>
              </div>
              <div className="btn">
                <Link href={sushi.codeLink} target="_blank">
                  See the code
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Modal for Wakely */}
        {showProject ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, duration: 0.3 }}
            className="modal-bg"
          >
            <div className="project-modal">
              <h3>Wakely App Design</h3>
              <div className="modal-img custom-aspect">
                <a href="/wakely_light.webp" target="_blank">
                  <Image
                    fill
                    src="/wakely_light.webp"
                    alt="Showcase of the Wakely app"
                  />
                </a>
              </div>
              <div className="modal-img custom-aspect">
                <a href="/wakely_dark.webp" target="_blank">
                  <Image
                    fill
                    src="/wakely_dark.webp"
                    alt="Showcase of the Wakely app"
                  />
                </a>
              </div>
              <p>Hint: you can click the image to open it in a new window :)</p>
              <div className="links">
                <div className="btn" onClick={() => setShowProject(false)}>
                  <a>Close</a>
                </div>
              </div>
            </div>
          </motion.div>
        ) : null}
      </article>
    </MotionSection>
  );
};

export default Projects;
