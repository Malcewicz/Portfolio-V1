"use client";

import "@/styles/experience.css";
import MotionSection from "./motion_section";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <MotionSection id="experience">
      <h2>Work Experience</h2>

      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.4 }}
        className="work"
      >
        <span>
          <h4>Welcome Airport Services</h4>
          <p>10/2022 - 11/2022</p>
        </span>
        <h6>Junior IT Specialist</h6>
        <p>During this internship I gained hands-on experience in:</p>
        <ul className="work-list">
          <li>network monitoring</li>
          <li>technical support across the company</li>
          <li>software and hardware maintenance</li>
          <li>local network design</li>
        </ul>
        <p>
          I had the privilege of co-managing a project to establish a new
          working space for flight coordinators and supervisors at the airport,
          showcasing my project management skills.
          <br />
          This internship solidified my foundation in IT support and
          infrastructure management.
        </p>
      </motion.article>
      <motion.article
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.4 }}
        className="work"
      >
        <span>
          <h4>Płatek Piotr Płatek</h4>
          <p>11/2021 - 12/2021</p>
        </span>
        <h6>Computer Technician</h6>
        <p>During my internship as a Computer Technician, my tasks included:</p>
        <ul className="work-list">
          <li>
            Identifying and resolving issues with laptops and desktop computers
          </li>
          <li>Installing and configuring software and operating systems</li>
          <li>Troubleshooting and conducting performance tests</li>
          <li>Installing or replacing computer components</li>
          <li>Transferring data between devices</li>
        </ul>
        <p>
          I also had the opportunity to work with WordPress and help create one
          website for a client. This internship provided me with valuable
          insights into computer maintenance and troubleshooting.
        </p>
      </motion.article>
    </MotionSection>
  );
};

export default Experience;
