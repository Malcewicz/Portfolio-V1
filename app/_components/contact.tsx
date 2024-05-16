import "@/app/_styles/contact.css";
import MotionSection from "./motion_section";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlinePhone,
} from "react-icons/ai";
import ExternalLink from "./external_link";
import Link from "next/link";

const Contact = () => {
  return (
    <MotionSection id="contact">
      <h2>Get in touch</h2>
      <p>
        Feel free to reach out to me through any of the channels below. My inbox
        is always open for discussing potential collaborations, answering any
        questions you may have, or connecting with fellow developers and
        designers. I'm looking forward to hearing from you!
      </p>
      <div className="row">
        <a href="https://github.com/Malcewicz" target="_blank">
          <AiOutlineGithub size={30} color="hsl(200, 80%, 50%)" />
          Malcewicz
        </a>
        <a
          href="https://linkedin.com/in/maciej-bernatowicz-3a4627182"
          target="_blank"
        >
          <AiOutlineLinkedin size={30} color="hsl(200, 80%, 50%)" />
          Maciej Bernatowicz
        </a>
        <a href="callto:+48733326433" target="_blank">
          <AiOutlinePhone size={30} color="hsl(200, 80%, 50%)" />
          +48 733 326 433
        </a>
      </div>
      <div className="btn">
        <Link href="mailto:maciej@bernatowicz.dev" target="_blank">
          Email me
          <ExternalLink />
        </Link>
      </div>
    </MotionSection>
  );
};

export default Contact;
