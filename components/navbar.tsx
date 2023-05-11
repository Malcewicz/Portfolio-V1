import "/styles/navbar.css";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav>
      <Link href="/">
        <Image src="/logo.svg" alt="Logo" width={50} height={50} />
        <p id="logo_text">Maciej Bernatowicz</p>
      </Link>
      <div id="nav_links">
        <Link href="#about">About me</Link>
        <Link href="#projects">Projects</Link>
        <Link href="#experience">Experience</Link>
        <Link href="#contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navbar;
