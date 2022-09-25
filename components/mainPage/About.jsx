import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "./aboutStyles";
import DrawerComponent from "./DrawerComponent";

export default function About() {
  const classes = styles();
  const [windowSize, setWindowSize] = useState({
    innerWidth: 0,
    innerHeight: 0,
  });

  useEffect(() => {
    const { innerWidth, innerHeight } = window;

    function handleWindowResize() {
      setWindowSize({ innerWidth, innerHeight });
    }

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <>
      <div style={{ width: "100vw" }}>
        <div style={{ height: "45px" }}>
          <div style={{ position: "relative", top: 0 }}>
            <div className={classes.navbarInner}>
              {windowSize.innerWidth >= 900 ? (
                <div
                  style={{
                    width: "auto",
                    display: "flex",
                    justifyContent: "space-around",
                    alignItems: "center",
                    paddingLeft: "25px",
                    paddingRight: "25px",
                    position: "sticky",
                  }}
                >
                  <span className={classes.navbarSpans}>HOME</span>

                  <span className={classes.navbarSpans}>ABOUT</span>

                  <span className={classes.navbarSpans}>SERVICES</span>

                  <span className={classes.navbarSpans}>CLIENTS</span>

                  <span className={classes.navbarSpans}>HOME</span>

                  <span className={classes.navbarSpans}>PORTFOLIO</span>

                  <span className={classes.navbarSpans}>CONTACT</span>

                  <span className={classes.navbarSpans}>BLOG</span>

                  <span className={classes.navbarSpans}>SHORTCODES</span>
                </div>
              ) : (
                <DrawerComponent />
              )}
            </div>
          </div>
        </div>
        <div className={classes.newWave}>
          <div className={classes.container}>
            <div className={classes.sectionTitle}>
              <h1>WE ARE NEWWAVE</h1>
              <span className={classes.border}></span>
              <p style={{ fontSize: "14px" }}>
                We are a close team of creatives, designers & developers who
                work together to create beautiful, engaging digital experiences.
                We take pride in delivering only the best.
              </p>
            </div>
            <div className={classes.screens}>
              <div className={classes.smallScreenLeft}>
                <Image
                  className={classes.elementFromLeft}
                  src="/small_left_screen.png"
                  alt=""
                />
              </div>
              <div className={classes.smallScreenRight}>
                <Image
                  className={classes.elementFromRight}
                  src="/small_right_screen.png"
                  alt=""
                />
              </div>
              <div className={classes.bigScreen}>
                <Image
                  className={classes.elementFadeIn}
                  src="/big_screen.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
