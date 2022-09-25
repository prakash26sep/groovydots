import React from 'react';
import styles from './numberStyles';

export default function Number() {
  const classes = styles();
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <div className={classes.innerContainer}>
            <img
              className={classes.imageContainer}
              src="/phone.png"
              alt="phone_image"
            />
            <h1 className={classes.numberContainer}>0753-016-572</h1>
            <div className={classes.imageTextContainer}>
              <img
                style={{ width: '30px', height: '30px' }}
                src="/gmail.png"
                alt="user image"
              />
              <p className={classes.authorName}>office@newave.com</p>
            </div>
            <div className={classes.imageTextContainer}>
              <img
                style={{ width: '30px', height: '30px' }}
                src="/gmail.png"
                alt="location image"
              />
              <p className={classes.authorName}>
                77a First Street, London, United Kingdom
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
