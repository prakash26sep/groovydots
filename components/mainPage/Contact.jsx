import React from 'react';
import styles from './contactStyles';

export default function Contact() {
  const classes = styles();

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <div className={classes.sectionTitle}>
            <h1>Contact</h1>
            <span className={classes.border}></span>
            <p className={classes.paraText}>
              Want to say hello? Want to know more about us? Give us a call or
              drop us an email and we will get back to you as soon as we can.
            </p>
          </div>
        </div>
        <div className={classes.inputBoxContainer}>
          <div className={classes.leftInputWrapper}>
            <input
              type="text"
              name="name"
              placeholder="name"
              className={classes.leftInputContainer}
            />

            <input
              type="text"
              name="email"
              placeholder="email"
              className={classes.leftInputContainer}
            />

            <input
              type="text"
              name="phone"
              placeholder="phone"
              className={classes.leftInputContainer}
            />
          </div>
          <input
            type="text"
            name="message"
            placeholder="message"
            className={classes.rightInputContainer}
          />
        </div>
        <button className={classes.buttonContainer}>SEND MESSAGE</button>
      </div>
    </>
  );
}
