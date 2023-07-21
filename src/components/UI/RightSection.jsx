import React from "react";
import classes from "./RightSection.module.css";

const RightSection = (props) => {
  return (
    <section className={`${classes.rightSection} ${props.className}`}>
      <div className={`${classes.rightContent}`}>{props.children}</div>
    </section>
  );
};

export default RightSection;
