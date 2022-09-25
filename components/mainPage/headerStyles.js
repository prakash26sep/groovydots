import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme) =>
  createStyles({
    headerContainer: {
      fontSize: "12px",
      width: "100%",
      height: "54px",
      // backgroundColor: '#262626',
      zIndex: 100,
      lineHeight: "54px",
      marginBottom: "1px",
      position: "fixed",
    },
    evantoLogo: {
      float: "left",
      padding: "0 20px",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        padding: "0 10px",
      },
      marginTop: "15px !important",
      "& a": {
        display: "inline-block",
        top: "18px",
        height: "18px",
        width: "152px",
        backgroundSize: "152px 18px",
        textIndent: "-9999px",
        background:
          "url(https://public-assets.envato-static.com/assets/logos/envato_market-a5ace93f8482e885ae008eb481b9451d379599dfed24868e52b6b2d66f5cf633.svg)",
      },
    },

    buyNowButtonContainer: {
      float: "right",
    },

    buyNowButton: {
      display: "inline-block",
      padding: "0 20px",
      cursor: "pointer",
      [theme.breakpoints.down("md")]: {
        padding: "0 10px",
      },
    },

    butNowButtonLink: {
      background: "#82b440",
      textDecoration: "none",
      fontSize: "14px",
      padding: "10px 20px !important",
      lineHeight: 1.5,
      color: "#fff",
      boxSizing: "border-box",
      borderRadius: "4px",
    },

    evantoLink: {
      textDecoration: "none",
    },
  })
);
