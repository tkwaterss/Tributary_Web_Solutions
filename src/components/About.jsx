import React from 'react'
import classes from './About.module.css';
import RightSection from './UI/RightSection';

const about = () => {
  return (
    <RightSection className={classes.aboutSection}>
      <h3>Our Mission</h3>
      <p>At Waters Edge Designs we strive for perfection</p>
    </RightSection>
  )
}

export default about