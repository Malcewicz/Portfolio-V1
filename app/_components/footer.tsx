import "@/app/_styles/footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer>
      <div id="copyright">
        <Link href="https://github.com/Malcewicz">
          &copy; 2023 Designed & built by Maciej Bernatowicz
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
