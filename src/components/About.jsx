import React from 'react'
import classes from './About.module.css';
import RightSection from './UI/RightSection';

const about = () => {
  return (
    <RightSection className={classes.aboutSection}>
      <h3>Some Title</h3>
      <p>Some kind of ipsum lorem that just keeps going and says stuff about how good this application is and how it will never be beaten by anyone else that ever tries because I am the best coder of all time and noone will ever be abble to beat me!</p>
    </RightSection>
  )
}

export default about