import MotionSection from "./motion_section";

const Contact = () => {
  return (
    <MotionSection id="contact">
      <h2>Get in touch</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
        dolores molestiae nulla cupiditate asperiores optio sapiente doloremque
        culpa debitis error, obcaecati temporibus exercitationem ratione
        necessitatibus molestias fugiat magni repellat animi? Exercitationem,
        quisquam!
      </p>
      <br />
      <div className="btn">
        <a
          href="./CV_Maciej_Bernatowicz_english.pdf"
          type="application/pdf"
          target="_blank"
        >
          Email me
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            style={{ marginLeft: "0.5rem" }}
          >
            <path fill="none" d="M0 0h24v24H0z"></path>
            <path
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-5m-7 1L20 4m-5 0h5v5"
            ></path>
          </svg>
        </a>
      </div>
    </MotionSection>
  );
};

export default Contact;
