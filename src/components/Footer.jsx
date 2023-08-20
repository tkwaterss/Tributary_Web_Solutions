import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Footer.module.css";
import LeftSection from "./UI/LeftSection";
import Button from "./UI/Button";
import { BsLinkedin, BsGithub, BsGlobe2 } from "react-icons/bs";

const Footer = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const apiKey = process.env.REACT_APP_API_KEY;

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceId, templateId, form.current, apiKey).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };

  return (
    <LeftSection className={classes.footerSection}>
      <div className={classes.footerContent}>
        <h3>Get in Touch!</h3>
        <form ref={form} onSubmit={sendEmail} className={classes.contactForm}>
          <span>
            <input
              className={classes.balloon}
              id="name"
              name="name"
              type="text"
              placeholder="First Last"
            />
            <label htmlFor="name">Name</label>
          </span>
          <span>
            <input
              className={classes.balloon}
              id="email"
              name="email"
              type="text"
              placeholder="youremail@here.com"
            />
            <label htmlFor="email">Email</label>
          </span>
          <span>
            <textarea
              className={classes.balloon}
              id="message"
              name="message"
              type="text"
              placeholder="What's on your mind?"
            />
            <label htmlFor="message">Message</label>
          </span>
          <Button>SEND</Button>
        </form>

        <ul className={classes.socialContainer}>
          <li>
            <a
              href="http://linkedin.com/company/watersedgedesigns"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsLinkedin className={classes.icon} />
            </a>
          </li>
          <li>
            <a
              href="https://tkwaterss.github.io/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsGlobe2 className={`${classes.roundIcon} ${classes.icon}`} />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/tkwaterss"
              rel="noopener noreferrer"
              target="_blank"
            >
              <BsGithub className={`${classes.roundIcon} ${classes.icon}`} />
            </a>
          </li>
        </ul>
      </div>
    </LeftSection>
  );
};

export default Footer;
