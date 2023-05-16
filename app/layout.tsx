import "./globals.css";
import { Metadata } from "next";
import { Manrope } from "next/font/google";
import Navbar from "../components/navbar";
import About from "../components/about";
import Projects from "../components/projects";
import Footer from "../components/footer";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Education from "@/components/education";

const manrope = Manrope({
  subsets: ["latin"],
  fallback: ["sans-serif"],
  variable: "--font-Manrope",
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
      <body className={`${manrope.className}`}>
        <Navbar />
        <main>
          {children}
          <About />
          <Projects />
          <Experience />
          <Education />
          <Contact />
        </main>
        <Footer />
      </body>
    </html>
  );
}
