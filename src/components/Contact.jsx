import React from 'react'
import classes from './Contact.module.css';
import RightSection from './UI/RightSection';

const contact = () => {
  return (
    <RightSection>
      <h3>Send me a message!</h3>
      <textarea></textarea>
      <button>Send</button>
      <h4>Or email me: tkwaterss@gmail.com</h4>
    </RightSection>
  )
}

export default contact