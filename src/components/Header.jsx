import React from 'react'
import Logo from '../images/Logo.png'
import classes from "./Header.module.css";

const Header = () => {
  return (
    <header>
      <div className={classes.logoContainer}>
        <img className={classes.headerLogo} src={Logo} alt="Waters Edge Logo"/>
      </div>
      <nav>
        <ul className={classes.navLinks}>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header