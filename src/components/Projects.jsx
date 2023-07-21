import React from "react";
import classes from "./Projects.module.css";
import RightSection from "./UI/RightSection";

const projects = () => {
  return (
    <RightSection className={classes.projectsSection}>
      <div className={classes.projectContent}>
        <div>
          <h2>Moon Gear</h2>
          <p>E-commerce and Business Management Application</p>
        </div>
        <div className={classes.tempIMGPlaceholder}>Screenshot of Moon Gear Site</div>
      </div>
    </RightSection>
  );
};

export default projects;
