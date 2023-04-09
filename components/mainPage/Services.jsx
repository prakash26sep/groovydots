import Image from "next/image";
import React from "react";
import styles from "./servicesStyles";

export default function Services() {
  const classes = styles();
  return (
    <>
      <div style={{ width: "100%" }}>
        <div className={classes.serviceContainer}>
          <div className={classes.sectionTitle}>
            <h1>SERVICES</h1>
            <span className={classes.border}></span>
            <p style={{ fontSize: "14px", color: "#999999" }}>
              We believe that apps and websites should not only be eye catching
              but actually provide a great user experience that users will
              remember.
            </p>
          </div>

          <div className={classes.outerContainer}>
            <div className={classes.leftInnerContainer}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "15px 0px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className={classes.serviceTextHeadingLeft}>
                    IDENTITY AND BRANDING
                  </span>
                  <p
                    style={{
                      textAlign: "right",
                      color: "#999999",
                      fontSize: "14px",
                      fontFamily: "Open sans, sans-serif",
                      marginTop: "0px",
                    }}
                  >
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    marginLeft: "20px",
                    marginTop: "12px",
                  }}
                >
                  <Image
                    style={{
                      height: "40px",
                      width: "40px",
                    }}
                    src="/user-profile.png"
                    alt="image"
                    layout="fill"
                  />
                </div>
              </div>

              {/* this is 2nd div */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  //   alignItems: 'center',
                  margin: "15px 0px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className={classes.serviceTextHeadingLeft}>
                    IDENTITY AND BRANDING
                  </span>
                  <p
                    style={{
                      textAlign: "right",
                      color: "#999999",
                      fontSize: "14px",
                      fontFamily: "Open sans, sans-serif",
                      marginTop: "0px",
                    }}
                  >
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    marginLeft: "20px",
                    marginTop: "12px",
                  }}
                >
                  <Image
                    style={{
                      height: "40px",
                      width: "40px",
                    }}
                    src="/user-profile.png"
                    alt="image"
                    layout="fill"
                  />
                </div>
              </div>

              {/* This is 3rd div */}

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  margin: "15px 0px",
                  //   alignItems: 'center',
                }}
              >
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className={classes.serviceTextHeadingLeft}>
                    IDENTITY AND BRANDING
                  </span>
                  <p
                    style={{
                      textAlign: "right",
                      color: "#999999",
                      fontSize: "14px",
                      fontFamily: "Open sans, sans-serif",
                      marginTop: "0px",
                    }}
                  >
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    marginLeft: "20px",
                    marginTop: "12px",
                  }}
                >
                  <Image
                    style={{
                      height: "40px",
                      width: "40px",
                    }}
                    src="/user-profile.png"
                    alt="image"
                    layout="fill"
                  />
                </div>
              </div>
            </div>
            {/* end of first half section  */}
            <div
              style={{
                marginBottom: "20px",
                position: "relative",
                width: "45%",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* this is 1st div */}
              <div className={classes.serviceParaContainer}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "20px",
                    marginTop: "12px",
                  }}
                >
                  <Image
                    style={{
                      height: "40px",
                      width: "40px",
                    }}
                    src="/user-profile.png"
                    alt="image"
                    layout="fill"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className={classes.serviceTextHeadingRight}>
                    IDENTITY AND BRANDING
                  </span>
                  <p className={classes.serviceParaTextRight}>
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
              </div>

              {/* this is 2nd div */}
              <div className={classes.serviceParaContainer}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "20px",
                    marginTop: "12px",
                  }}
                >
                  <Image
                    style={{
                      height: "40px",
                      width: "40px",
                    }}
                    src="/user-profile.png"
                    alt="image"
                    layout="fill"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className={classes.serviceTextHeadingRight}>
                    IDENTITY AND BRANDING
                  </span>
                  <p className={classes.serviceParaTextRight}>
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
              </div>

              {/* this is 3rd div */}

              <div className={classes.serviceParaContainer}>
                <div
                  style={{
                    height: "40px",
                    width: "40px",
                    marginRight: "20px",
                    marginTop: "12px",
                  }}
                >
                  <Image
                    style={{
                      height: "40px",
                      width: "40px",
                    }}
                    src="/user-profile.png"
                    alt="image"
                    layout="fill"
                  />
                </div>
                <div style={{ display: "flex", flexDirection: "column" }}>
                  <span className={classes.serviceTextHeadingRight}>
                    IDENTITY AND BRANDING
                  </span>
                  <p className={classes.serviceParaTextRight}>
                    A beautiful product needs to be complemented with a great
                    branding. Our design team will help you create it
                  </p>
                </div>
              </div>
            </div>
            {/* end of 2nd half */}
          </div>
        </div>
      </div>
    </>
  );
}
