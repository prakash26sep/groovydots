import React from 'react';
import styles from './headerStyles';

export default function Header() {
  const classes = styles();
  return (
    <>
      <div className={classes.headerContainer}>
        <div className={classes.evantoLogo}>
          <a
            className={classes.evantoLink}
            href="https://themeforest.net/item/newave-responsive-one-page-parallax-template/5925116"
          >
            Envato Market
          </a>
        </div>
        <div className={classes.buyNowButtonContainer}>
          <div className={classes.buyNowButton}>
            <a
              className={classes.butNowButtonLink}
              href="https://themeforest.net/checkout/from_item/5925116?license=regular&amp;support=bundle_6month"
            >
              Buy now
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
