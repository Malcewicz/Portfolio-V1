"use client";

import "@/styles/projects.css";
import { useState } from "react";
import MotionSection from "./motion_section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
          transition={{ delay: 0.5, duration: 0.4 }}
          className="card"
        >
          <div className="card-img">
            <Image
              fill
              src="/wakely_1080p.webp"
              alt="Showcase of the Wakely app"
            />
          </div>
          <div className="card-content">
            <h3>Wakely Mobile App</h3>
            <p>
              Introducing my secret project: a mobile app that I personally
              designed using Figma and brought to life using the incredible
              Flutter framework from Google. From the ground up, I poured my
              heart and soul into creating this sleek design, in both light and
              dark mode, and user-friendly experience. While it's still a work
              in progress, I'm excited to share the UI/UX design and perhaps
              even the code once it's ready.
            </p>
            <ul>
              <li>Figma</li>
              <li>Flutter</li>
              <li>Dart</li>
            </ul>
            <div className="links">
              <div className="btn" onClick={() => setShowProject(true)}>
                <a>See the design</a>
              </div>
              <div className="btn active">
                <Link href="#" aria-disabled>
                  Code private!
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
          transition={{ delay: 0.5, duration: 0.4 }}
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
            <h3>LakeView Apartments</h3>
            <p>
              In my first freelance project, I designed and coded a responsive,
              single-page, static website. Using Figma, closely following my
              client's specifications, I created the design they desired. Then,
              with a Mobile First approach, I coded the website using semantic
              HTML5, CSS, and JavaScript.
              <br />
              Since its launch, the website has already attracted nearly two
              thousand users.
            </p>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Figma</li>
            </ul>
            <div className="links">
              <div className="btn">
                <Link href="https://lakeviewprzewiez.pl" target="_blank">
                  Live website
                </Link>
              </div>
              <div className="btn">
                <Link
                  href="https://github.com/Malcewicz/LakeView-V2"
                  target="_blank"
                >
                  See the code
                </Link>
              </div>
            </div>
          </div>
        </motion.article>

        {/* Portfolio */}
        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
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
            <h3>This Portfolio</h3>
            <p>
              This portfolio showcases my first implementation of Next.js,
              TypeScript and Firebase. By harnessing Next.js and TypeScript, I
              developed a dynamic web experience, complemented by CSS for a
              sleek design. Leveraging Firebase for seamless deployment, the
              website offers reliable performance and fast loading times. The
              website is fully responsive, so it looks great on any device.
            </p>
            <ul>
              <li>Next.js</li>
              <li>TypeScript</li>
              <li>CSS</li>
              <li>Firebase</li>
            </ul>
            <div className="links">
              <div className="btn active">
                <Link href="#" aria-disabled>
                  You're here!
                </Link>
              </div>
              <div className="btn">
                <Link
                  href="https://github.com/Malcewicz/nextjs-portfolio"
                  target="_blank"
                >
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
          transition={{ delay: 0.6, duration: 0.4 }}
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
            <h3>Sushi Project</h3>
            <p>
              While learning Vite, I built a sushi website that showcases
              responsiveness, fast loading times, animations, and an appealing
              design. Although it's important to be transparent - it's a 1:1
              replica from a tutorial I found on YouTube. Nonetheless, I gained
              valuable knowledge, and I believe that the quality of the code is
              what truly matters. Therefore, I consider it a valuable addition
              to my portfolio until I have more of my own projects.
            </p>
            <ul>
              <li>Vite</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
            </ul>
            <div className="links">
              <div className="btn">
                <Link
                  href="https://sushi-project-malcewicz.vercel.app"
                  target="_blank"
                >
                  Live website
                </Link>
              </div>
              <div className="btn">
                <Link
                  href="https://github.com/Malcewicz/sushi-project-vite"
                  target="_blank"
                >
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
              <p>Hint: click the image to open it in a new window :)</p>
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
