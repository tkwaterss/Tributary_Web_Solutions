import React from "react";
import classes from "./Scoville.module.css";
import LeftSection from "./UI/LeftSection";

const Scoville = () => {
  return (
    <LeftSection className={classes.stackSection}>
      <div className={classes.projectContent}>
        <div>
          <h2>Scoville Electric</h2>
          <p>Coming Soon...</p>
        </div>
      </div>
    </LeftSection>
  );
};

export default Scoville;
