import React from "react";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { Copyright } from "./Copyright";
export const Footer = () => {
  return (
    <footer className="footer mt-5">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-around align-items-center">
          <div>
            <a
              style={{ color: "white" }}
              className="d-block"
              href="https://www.linkedin.com/in/sebastian-cataldo/"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillLinkedin
                color="white"
                alt="Linkedin icon"
                style={{ width: 32, height: 32 }}
              />
              Linkedin
            </a>
            <a
              style={{ color: "white" }}
              className="d-block mt-3"
              href="https://github.com/SeanCasm?tab=repositories"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillGithub
                color="white"
                alt="Github icon"
                style={{ width: 32, height: 32 }}
              />
              Github
            </a>
          </div>
          <div className="last-content">
            <Copyright colorType="light" />
          </div>
        </div>
      </div>
    </footer>
  );
};
