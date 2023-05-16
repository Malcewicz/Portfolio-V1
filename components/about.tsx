import "@/styles/about.css";
import MotionSection from "./motion_section";

const About = () => {
  return (
    <MotionSection id="about">
      <h2>About me</h2>

      <div id="left">
        <p>
          Hello! My name is Maciej, I'm an 18 year old software developer
          passionate about creating beautiful and functional websites and
          applications. I also enjoy UI Design using Figma to design clean and
          user-friendly interfaces.
        </p>
        <p>
          I'm always eager to explore new technologies and industry trends, and
          I strive to keep my skills up-to-date. I have a head full of ideas, so
          in my free time I like to work on my own projects or take beautiful
          photos.
        </p>
        <p>
          Currently I'm working towards a project that may become my own
          start-up.
        </p>
      </div>

      <div id="right">
        <ul>
          <li>
            <h4>Programming Languages</h4>
            <p>HTML, CSS, JavaScript, TypeScript, Dart, PHP, MySQL</p>
          </li>
          <li>
            <h4>Frameworks</h4>
            <p>React, Next.js, Flutter</p>
          </li>
          <li>
            <h4>Tools</h4>
            <p>
              Figma, Github, Git, Firebase, Wordpress, Vercel, Adobe Lightroom,
              ChatGPT
            </p>
          </li>
        </ul>
      </div>
    </MotionSection>
  );
};

export default About;
