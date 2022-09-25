import React from "react";
import styles from "./aboutStyles";

export default function Description() {
  const classes = styles();
  return (
    <>
      <div className={classes.container} style={{ marginTop: "120px" }}>
        <div className={classes.sectionTitle}>
          <h1>WE ARE GOOD AT</h1>
          <span className={classes.border}></span>
          <p style={{ fontSize: "14px" }}>
            We are an agency born out of a passion to make great products. We
            help companies and startups from all over the world materialize
            their ideas into great projects
          </p>
        </div>

        <div className={classes.outerContainer}>
          <div className={classes.oneHalfFirst}>
            <div
              style={{
                width: "100%",
                marginBottom: "50px",
                backgroundColor: "#dddddd",
                borderRadius: "3px 3px 3px 3px",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "90%",

                  backgroundColor: "#222222",
                  color: "#fff",
                  textAlign: "left",

                  padding: "4px 0px 4px 4px",
                }}
              >
                React app development 90%
              </div>
              <div
                style={{
                  width: "10%",

                  border: "1px solid #ccc",
                }}
              ></div>
            </div>

            <div
              style={{
                width: "100%",
                marginBottom: "50px",
                backgroundColor: "#dddddd",
                borderRadius: "3px 3px 3px 3px",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "90%",

                  backgroundColor: "#222222",
                  color: "#fff",
                  textAlign: "left",

                  padding: "4px 0px 4px 4px",
                }}
              >
                React app development 90%
              </div>
              <div
                style={{
                  width: "10%",
                  border: "1px solid #ccc",
                }}
              ></div>
            </div>

            <div
              style={{
                width: "100%",
                marginBottom: "50px",
                backgroundColor: "#dddddd",
                borderRadius: "3px 3px 3px 3px",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "90%",

                  backgroundColor: "#222222",
                  color: "#fff",
                  textAlign: "left",

                  padding: "4px 0px 4px 4px",
                }}
              >
                React app development 90%
              </div>
              <div
                style={{
                  width: "10%",

                  border: "1px solid #ccc",
                }}
              ></div>
            </div>
          </div>
          <div className={classes.oneLastHalf}>
            <div
              style={{
                width: "100%",
                marginBottom: "50px",
                background: "#dddddd",
                borderRadius: "3px 3px 3px 3px",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "80%",

                  backgroundColor: "#222222",
                  color: "#fff",
                  textAlign: "left",

                  padding: "4px 0px 4px 4px",
                }}
              >
                Application developer 80%
              </div>
              <div
                style={{
                  width: "20%",

                  border: "1px solid #ccc",
                }}
              ></div>
            </div>

            <div
              style={{
                width: "100%",
                marginBottom: "50px",
                background: "#dddddd",
                borderRadius: "3px 3px 3px 3px",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "80%",

                  backgroundColor: "#222222",
                  color: "#fff",
                  textAlign: "left",

                  padding: "4px 0px 4px 4px",
                }}
              >
                Application developer 80%
              </div>
              <div
                style={{
                  width: "20%",

                  border: "1px solid #ccc",
                }}
              ></div>
            </div>

            <div
              style={{
                width: "100%",
                marginBottom: "50px",
                background: "#dddddd",
                borderRadius: "3px 3px 3px 3px",
                display: "flex",
              }}
            >
              <div
                style={{
                  width: "80%",

                  backgroundColor: "#222222",
                  color: "#fff",
                  textAlign: "left",

                  padding: "4px 0px 4px 4px",
                }}
              >
                Application developer 80%
              </div>
              <div
                style={{
                  width: "20%",

                  border: "1px solid #ccc",
                }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
