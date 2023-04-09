import Image from "next/image";
import React from "react";
import styles from "./clientStyles";

export default function Clients() {
  const classes = styles();
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
        <div className={classes.container}>
          <div className={classes.sectionTitle}>
            <h1>CLIENTS</h1>
            <span className={classes.border}></span>
            <p style={{ fontSize: "14px", color: "#999999" }}>
              We work with great brands. Close partnerships with really cool
              clients let us do world-class work.
            </p>
          </div>
          <div className={classes.imageContainer}>
            <Image
              className={classes.imageStyle}
              alt="client"
              src="/client1.png"
              layout="fill"
            />
            <Image
              className={classes.imageStyle}
              alt="client"
              src="/client2.png"
              layout="fill"
            />
            <Image
              className={classes.imageStyle}
              alt="client"
              src="/client3.png"
              layout="fill"
            />
            <Image
              className={classes.imageStyle}
              alt="client"
              src="/client4.png"
              layout="fill"
            />
          </div>
          <div className={classes.thanksHeading}>
            &quot;THANK YOU FOR YOUR AWESOME TEMPLATE. SUCH A JOY TO LAUNCH OUR
            FIRST WEBSITE WITH EASE. GOOD JOB&quot;
          </div>
          <p className={classes.authorName}>~ Fred nolan.</p>
        </div>
      </div>
    </>
  );
}
