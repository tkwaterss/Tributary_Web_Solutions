import React from "react";
import classes from "./Footer.module.css";
import LeftSection from "./UI/LeftSection";

const footer = () => {
  //Social Links Here
  return (
    <LeftSection className={classes.footerSection}>
      <div className={classes.footerContent}>
        {/* <h3>Send me a message!</h3>
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
       */}

        <span>
          <input
            className={classes.balloon}
            id="state"
            type="text"
            placeholder="Liquid, solid, gaseous..."
          />
          <label for="state">State</label>
        </span>
        <span>
          <input
            className={classes.balloon}
            id="planet"
            type="text"
            placeholder="Probably Earth"
          />
          <label for="planet">Planet</label>
        </span>
        <span>
          <input
            className={classes.balloon}
            id="galaxy"
            type="text"
            placeholder="Milky Way?"
          />
          <label for="galaxy">Galaxy</label>
        </span>
      </div>
    </LeftSection>
  );
};

export default footer;
