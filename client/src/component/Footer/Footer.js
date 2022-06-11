import React from "react";

import "./Footer.css";

const Footer = () => (
  <>
    <div className="footer-block"></div>
    <div className="footer">
      <div className="footer-container">
        <p>
          View this project on{" "}
          <a
            className="profile"
            href="https://github.com/whopradhuman/voting-system"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          .
        </p>
        <p>
          Made with <i className="fas fa-heartbeat" /> by{" "}
          <a
            className="profile"
            href="https://www.linkedin.com/in/whopradhuman/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Pradhuman Soni
          </a>
          ,&nbsp;
          <a
            className="profile"
            href="https://www.linkedin.com/in/ronak-jangir/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ronak Jangir
          </a>
          ,&nbsp;
          <a
            className="profile"
            href="https://www.linkedin.com/in/rupam-kumar/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Rupam Kumar
          </a>
        </p>
      </div>
    </div>
  </>
);

export default Footer;
