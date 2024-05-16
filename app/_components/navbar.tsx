"use client";

import "@/app/_styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1, duration: 0.3 }}
      style={isMenuOpen ? {} : {}}
    >
      <div id="nav-content">
        <Link href="/">
          <Image src="/logo.svg" alt="Logo" width={48} height={48} />
          <p id="logo-text">Maciej Bernatowicz</p>
        </Link>
        <button
          id="hamburger"
          onClick={() => {
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          {!isMenuOpen ? <HiOutlineMenuAlt3 /> : <HiOutlineX />}
        </button>
        <div className={isMenuOpen ? "nav-links open" : "nav-links"}>
          <Link
            href="#about"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            About me
          </Link>
          <Link
            href="#projects"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Projects
          </Link>
          <Link
            href="#experience"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Experience
          </Link>
          <Link
            href="#contact"
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          >
            Contact
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
