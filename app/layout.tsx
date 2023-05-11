import "./globals.css";
import { Rubik } from "next/font/google";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const rubik = Rubik({
  subsets: ["latin-ext"],
  variable: "--font-rubik",
  display: "swap",
});

export const metadata = {
  title: "Maciej Bernatowicz — Frontend Developer",
  description:
    "Maciej Bernatowicz is a front-end developer creating responsive, user-centric designs with a passion and attention to detail.",
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
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
