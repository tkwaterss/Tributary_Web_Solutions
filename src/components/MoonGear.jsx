import React from "react";
import classes from "./MoonGear.module.css";
import RightSection from "./UI/RightSection";
import Moon from "../images/moon-photo.png";

const MoonGear = () => {
  return (
    <RightSection className={classes.projectsSection}>
      <div className={classes.projectContent}>
        <div>
          <h2>Moon Gear</h2>
          <p>Coming Soon...</p>
        </div>
        <div>
          <img className={classes.tempIMGPlaceholder} src={Moon} alt="moon" />
        </div>
      </div>
    </RightSection>
  );
};

export default MoonGear;
