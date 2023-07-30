import React from "react";
import classes from "./About.module.css";
import RightSection from "./UI/RightSection";

const about = () => {
  return (
    <RightSection className={classes.aboutSection}>
      <div className={classes.aboutContent}>
        <h4>Mission</h4>
        <p>
          At Waters Edge Designs, our mission is to empower businesses and
          individuals with exceptional online presence through bespoke,
          innovative, and user-centric websites. We are a dedicated freelance
          company, committed to crafting custom web solutions tailored to our
          clients' unique needs and aspirations.
        </p>
        <p>
          We believe in the power of collaboration and understanding our
          clients' visions to the fullest. By fostering open communication and
          active listening, we aim to grasp the essence of each client's brand,
          values, and objectives, ensuring our designs align seamlessly with
          their goals.
        </p>
        <p>
          Join us on our journey, and let Waters Edge Designs be your trusted
          partner in turning your web dreams into realities. Together, we will
          make a difference in the digital world.
        </p>
      </div>
    </RightSection>
  );
};

export default about;
