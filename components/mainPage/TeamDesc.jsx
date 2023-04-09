import Image from "next/image";
import React from "react";
import styles from "./teamDescStyles";

export default function TeamDesc() {
  const classes = styles();
  return (
    <>
      <div style={{ width: "100%", backgroundColor: "#f5f5f5" }}>
        <div className={classes.container}>
          <div className={classes.sectionTitle}>
            <h1>OUR TEAM</h1>
            <span className={classes.border}></span>
            <p style={{ fontSize: "14px" }}>
              We are a small, friendly and talented team. We craft beautiful
              digital solutions for awesome clients across all the platforms.
            </p>
          </div>
          <div className={classes.avatarContainer}>
            <div className={classes.imageContainer}>
              <div style={{ borderRadius: "3px", position: "relative" }}></div>
              <Image src="/team1.png" alt="team1" layout="fill" />
              <span style={{ color: "#222222", marginTop: "10px" }}>
                MICHEAL BROAD
              </span>
              <p>CEO Founder</p>
            </div>
            <div className={classes.imageContainer}>
              <div style={{ borderRadius: "3px", position: "relative" }}></div>
              <Image src="/team2.png" alt="team1" layout="fill" />
              <span style={{ color: "#222222", marginTop: "10px" }}>
                AMANDA WHITE
              </span>
              <p>Web Designer</p>
            </div>
            <div className={classes.imageContainer}>
              <div style={{ borderRadius: "3px", position: "relative" }}></div>
              <Image src="/team3.png" alt="team1" layout="fill" />
              <span style={{ color: "#222222", marginTop: "10px" }}>
                BRAD TRAVERSY
              </span>
              <p>Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
