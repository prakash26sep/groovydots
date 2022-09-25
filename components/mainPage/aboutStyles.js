import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    navbarInner: {
      minHeight: "45px",
      lineHeight: "20px !important",
      borderBottom: "none !important",
      paddingLeft: "20px !important",
      paddingRight: "20px !important",
      background: "#fff",
      boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1) !important",
      zIndex: 10,
    },
    navbarSpans: {
      fontFamily: "Montserrat, sans-serif",
      textTransform: "uppercase",
      fontWeight: 400,
      color: "#999999",
      height: "100%",
      lineHeight: "25px",
      textShadow: "none",
      marginTop: "10px",
    },
    newWave: {
      position: "relative",
      backgroundColor: "#f5f5f5",
      zIndex: 1,
    },
    container: {
      width: "80%",

      margin: "0 auto",
      padding: "100px 20px",
    },
    sectionTitle: {
      textAlign: "center",
      width: "55%",
      margin: "0 auto",
      marginBottom: "60px",

      "& h1": {
        fontSize: "36px",
        letterSpacing: "3px",
        color: "#222222",
        textTransform: "uppercase",
        marginBottom: "15px",
      },
    },
    border: {
      background: "none repeat scroll 0 0 #999999",
      display: "block",
      height: "2px",
      margin: "0 auto",
      width: "100px",
      marginBottom: "40px",
    },
    screens: {
      [theme.breakpoints.up("md")]: {
        position: "relative",
      },

      [theme.breakpoints.down("md")]: {
        display: "flex",
        flexDirection: "column",
      },
    },
    smallScreenLeft: {
      width: "150px",
      height: "150px",

      [theme.breakpoints.down("md")]: {
        marginLeft: "4%",
      },

      zIndex: 0,
      [theme.breakpoints.up("md")]: {
        position: "absolute",
      },
    },
    smallScreenRight: {
      width: "150px",
      height: "150px",

      right: "440px",

      zIndex: 0,
      [theme.breakpoints.up("md")]: {
        position: "absolute",
      },

      [theme.breakpoints.down("md")]: {
        marginTop: "350px",
        marginLeft: "4%",
      },
    },
    bigScreen: {
      width: "600px",
      height: "auto",
      margin: "0 auto",
      zIndex: 100,

      [theme.breakpoints.down("md")]: {
        marginTop: "350px",
      },
    },
    elementFromRight: {
      paddingLeft: "0px",

      [theme.breakpoints.up("md")]: {
        position: "relative",
      },
    },
    elementFromLeft: {
      paddingRight: "0px",

      [theme.breakpoints.up("md")]: {
        position: "relative",
      },
    },
    elementFadeIn: {
      paddingLeft: "0px",
      [theme.breakpoints.up("md")]: {
        position: "relative",
      },
    },
    oneHalfFirst: {
      float: "left",
      marginBottom: "20px",
      marginRight: "4%",
      position: "relative",
      width: "48%",
      display: "flex",
      flexDirection: "column",
      [theme.breakpoints.down("md")]: {
        width: "75%",
        marginRight: "0%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
    oneLastHalf: {
      float: "left",
      marginBottom: "20px",
      position: "relative",
      width: "48%",
      display: "flex",
      flexDirection: "column",

      [theme.breakpoints.down("md")]: {
        width: "75%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },

    outerContainer: {
      display: "flex",
      [theme.breakpoints.down("md")]: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      },
    },
  })
);
