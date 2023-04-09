import Image from "next/image";
import React from "react";
import styles from "./googleStyles";

export default function GoogleMaps() {
  const classes = styles();

  return (
    <>
      <div className={classes.mainContainer}>
        <div className={classes.imageContainer}>
          <Image
            style={{ height: "100%", width: "100%" }}
            src="/google_maps.png"
            alt="googleImage"
            layout="fill"
          />
        </div>
        <div className={classes.container}>
          <div className={classes.socialMediaContainer}>
            <Image
              alt="google"
              className={classes.socialImageContainer}
              src="/google.png"
              layout="fill"
            />
            <Image
              alt="fb"
              className={classes.socialImageContainer}
              src="/facebook.png"
              layout="fill"
            />
            <Image
              alt="twitter"
              className={classes.socialImageContainer}
              src="/twitter.png"
              layout="fill"
            />
          </div>
          <p className={classes.authorName}>
            2013 © newave. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
