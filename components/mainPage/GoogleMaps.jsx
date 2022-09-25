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
            src="google_maps.png"
            alt="googleImage"
          />
        </div>
        <div className={classes.container}>
          <div className={classes.socialMediaContainer}>
            <Image className={classes.socialImageContainer} src="google.png" />
            <Image
              className={classes.socialImageContainer}
              src="facebook.png"
            />
            <Image className={classes.socialImageContainer} src="twitter.png" />
          </div>
          <p className={classes.authorName}>
            2013 © newave. All rights reserved.
          </p>
        </div>
      </div>
    </>
  );
}
