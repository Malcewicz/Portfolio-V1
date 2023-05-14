"use client";

import "/styles/navbar.css";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <nav>
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
    </nav>
  );
};

export default Navbar;
