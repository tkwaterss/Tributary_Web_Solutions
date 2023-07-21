import React from "react";
import classes from "./LeftSection.module.css";

const LeftSection = (props) => {
  return (
    <section className={`${classes.leftSection} ${props.className}`}>
      <div className={`${classes.leftContent}`}>{props.children}</div>
    </section>
  );
};

export default LeftSection;
