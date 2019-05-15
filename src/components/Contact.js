import React from "react";

const Contact = () => {
  return (
    <footer>
      <div className="contact-info">
        <a href="mailto:hrabotam@gmail.com">
          <i className="fas fa-envelope fa-2x" aria-hidden="true" />
          <span className="sr-only">Gmail</span>
        </a>
        <a
          href="https://github.com/hunhrabo/valutavalto"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-github fa-2x" aria-hidden="true" />
          <span className="sr-only">GitHub</span>
        </a>
        <a
          href="https://www.linkedin.com/in/tam%C3%A1s-hrabovszki-43399455/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-linkedin fa-2x" aria-hidden="true" />
          <span className="sr-only">LinkedIn</span>
        </a>
        <a
          href="https://www.facebook.com/hrabovszki.tamas"
          rel="noopener noreferrer"
          target="_blank"
        >
          <i className="fab fa-facebook fa-2x" aria-hidden="true" />
          <span className="sr-only">Facebook</span>
        </a>
      </div>
      <div className="api-info">
        <p>
          Az árfolyamokat a{" "}
          <a
            href="http://napiarfolyam.hu/"
            rel="noopener noreferrer"
            target="_blank"
          >
            napiárfolyam.hu
          </a>{" "}
          gyüjti.
        </p>
      </div>
    </footer>
  );
};

export default Contact;
