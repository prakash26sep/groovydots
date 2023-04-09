import Image from "next/image";
import React from "react";
import styles from "./numberStyles";

export default function Number() {
  const classes = styles();
  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.container}>
          <div className={classes.innerContainer}>
            <Image
              className={classes.imageContainer}
              src="/phone.png"
              alt="phone_image"
              layout="fill"
            />
            <h1 className={classes.numberContainer}>0753-016-572</h1>
            <div className={classes.imageTextContainer}>
              <Image
                style={{ width: "30px", height: "30px" }}
                src="/gmail.png"
                alt="user image"
                layout="fill"
              />
              <p className={classes.authorName}>office@newave.com</p>
            </div>
            <div className={classes.imageTextContainer}>
              <Image
                style={{ width: "30px", height: "30px" }}
                src="/gmail.png"
                alt="location image"
                layout="fill"
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
