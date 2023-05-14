import "./globals.css";
import { Metadata } from "next";
import { Rubik } from "next/font/google";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Experience from "@/components/experience";
import Contact from "@/components/contact";

const rubik = Rubik({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-rubik",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Maciej Bernatowicz — Frontend Developer",
  description:
    "Maciej is a software developer specializing in front-end web development and mobile applications creating responsive and user-centric designs",
  authors: [{ name: "Maciej Bernatowicz" }],
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${rubik.className}`}>
        <Navbar />
        <main>
          {children}
          <About />
          <Projects />
          <Experience />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
