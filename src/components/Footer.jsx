import React from 'react'
import classes from './Footer.module.css';
import LeftSection from './UI/LeftSection';

const footer = () => {
  //Social Links Here
  return (
    <LeftSection>
      <h4>Social Links</h4>
      <ul>
        <li>Company Linked In</li>
        <li>Personal Linked In</li>
        <li>Personal Portfolio</li>
        <li>Github Account</li>
      </ul>
    </LeftSection>
  )
}

export default footer