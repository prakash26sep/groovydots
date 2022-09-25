import React from 'react';
import styles from './homeStyles';

export default function Home() {
  const classes = styles();

  return (
    <>
      <div className={classes.mainContainer}>
        <div
          className={classes.homeContainer}
          style={{ background: 'url(/home_pattern.png)', color: 'white' }}
        >
          <div
            className={classes.container}
            style={{ right: '0px', opacity: 1 }}
          >
            <div className={classes.alignCenter}>
              <div
                className={classes.headingWrapper}
                style={{ maxWidth: '100%', margin: '0 auto' }}
              >
                <div
                  style={{
                    width: '100%',
                    overflow: 'hidden',
                    position: 'relative',
                    height: '100px',
                  }}
                >
                  <span className={classes.headingStyle}>
                    WE CREATE AWESOME SITES
                  </span>
                </div>
              </div>
              <p>
                Conception<span className={classes.bullet}>.</span>
                Conception<span className={classes.bullet}>.</span>
                Conception<span className={classes.bullet}>.</span>
                Conception<span className={classes.bullet}>.</span>
                HTML Integration
              </p>
              <a
                style={{
                  border: '2px solid #fff',
                  color: '#fff',
                  borderRadius: '3px',
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: 0,
                  textTransform: 'uppercase',
                  display: 'inline-block',
                  lineHeight: '10px !important',
                  fontSize: '14px',
                  padding: '8px',
                }}
              >
                WHAT WE DO
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
