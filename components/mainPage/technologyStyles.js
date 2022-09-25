import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme) =>
  createStyles({
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
    templateContainer: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
      },
      [theme.breakpoints.down("md")]: {
        display: "flex",
        justifyContent: "space-around",
        flexWrap: "wrap",
        alignItems: "center",
      },
      "& h5": {
        color: "#222222",
        fontSize: "14px",
        fontFamily: "Montserrat, sans-serif",
      },
    },

    templateInnerContainer: {
      [theme.breakpoints.down("md")]: {
        marginTop: "24px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "20px",
      },
    },

    imageContainer: {
      width: "70px",
      height: "70px",
      [theme.breakpoints.down("md")]: {
        width: "50px",
        height: "50px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "35px",
        height: "35px",
      },
    },

    textContent: {
      fontSize: "14px",
      color: "#999999",
      marginTop: "20px",
      textAlign: "center",
      width: "90%",
      margin: "0 auto",
    },
  })
);
