"use client";

import "/styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
    >
      <div id="nav_content">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={48} height={48} />
          <p id="logo_text">Maciej Bernatowicz</p>
        </Link>
        <div id="nav_links">
          <Link href="#about">About me</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#experience">Experience</Link>
          <Link href="#contact">Contact</Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
