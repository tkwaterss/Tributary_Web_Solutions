import React from 'react'
import Logo from '../images/WatersEdgeLogo4.png'
import classes from "./Header.module.css";
import LeftSection from './UI/LeftSection';

const Header = () => {
  return (
    <LeftSection className={classes.headerSection}>
      <div className={classes.headerContent}>
        <img className={classes.headerLogo} src={Logo} alt="Waters Edge Logo"/>
        <h1>Waters Edge Designs</h1>
        <div className={classes.divider}></div>
        <p>Some kind of quote or one liner about the company</p>
      </div>
      
    </LeftSection>
  )
}

export default Header