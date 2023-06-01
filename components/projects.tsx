"use client";

import "@/styles/projects.css";
import MotionSection from "./motion_section";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

const About = () => {
  return (
    <MotionSection id="projects">
      <h2>Featured Projects</h2>
      <article id="wrapper">
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
              src="/wakely_1080p.webp"
              alt="Showcase of two main screens of the Wakely app"
            />
          </div>
          <div className="card-content">
            <h3>Mobile Flutter project</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae doloremque, aliquam totam, eligendi, magnam consectetur
              deleniti reprehenderit doloribus fuga illum ea laboriosam aut!
              Fugit ullam iusto quos totam voluptatibus optio voluptatum
              voluptatem, quibusdam, quas, quia quae. Quisquam, voluptatum
              voluptatibus. Lorem ipsum dolor sit amet consectetur adipisicing
            </p>
            <ul>
              <li>Figma</li>
              <li>Flutter</li>
              <li>Dart</li>
            </ul>
          </div>
        </motion.article>

        <motion.article
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.4 }}
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
      </article>
    </MotionSection>
  );
};

export default About;
