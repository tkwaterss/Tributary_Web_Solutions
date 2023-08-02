import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import classes from "./Footer.module.css";
import LeftSection from "./UI/LeftSection";

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
        <h3>Send me a message!</h3>
        <form className={classes.contactForm}>
          <span>
            <input
              className={classes.balloon}
              id="state"
              type="text"
              placeholder="First Last"
            />
            <label for="state">Name</label>
          </span>
          <span>
            <input
              className={classes.balloon}
              id="planet"
              type="text"
              placeholder="youremail@here.com"
            />
            <label for="planet">Email</label>
          </span>
          <span>
            <textArea
              className={classes.balloon}
              id="galaxy"
              type="text"
              placeholder="Milky Way?"
            />
            <label for="galaxy">Message</label>
          </span>
          <button>SEND</button>
        </form>

        <h4>Social Links</h4>
        <ul>
          <li>Company Linked In</li>
          <li>Personal Linked In</li>
          <li>Personal Portfolio</li>
          <li>Github Account</li>
        </ul>
      </div>
    </LeftSection>
  );
};

export default Footer;
