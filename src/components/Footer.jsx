import React from "react";
import classes from "./Footer.module.css";
import LeftSection from "./UI/LeftSection";

const footer = () => {
  //Social Links Here
  return (
    <LeftSection className={classes.footerSection}>
      <h3>Send me a message!</h3>
      <textarea></textarea>
      <button>Send</button>
      <h4>Or email me: tkwaterss@gmail.com</h4>
      <h4>Social Links</h4>
      <ul>
        <li>Company Linked In</li>
        <li>Personal Linked In</li>
        <li>Personal Portfolio</li>
        <li>Github Account</li>
      </ul>
    </LeftSection>
  );
};

export default footer;
