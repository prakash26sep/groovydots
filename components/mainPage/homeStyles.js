import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100vw",
      height: "100vh",
      position: "relative",
      border: 0,
      outline: 0,
      margin: 0,
      padding: 0,
      background: "transparent",
    },
    homeContainer: {
      width: "100%",
      height: "100%",
    },
    container: {
      height: "100%",
      display: "table",
      position: "absolute",
      top: 0,
      left: 0,
      width: "90%",
      marginLeft: "5%",
      marginRight: "5%",
    },
    alignCenter: {
      display: "table-cell",
      verticalAlign: "middle",
      textAlign: "center",
      "& p": {
        marginBottom: "20px",
      },
    },
    headingWrapper: {
      position: "relative",
      padding: 0,
    },
    headingStyle: {
      color: "#fff",
      fontFamily: "Montserif, sans-serif",
      fontSize: "70px",
      textTransform: "uppercase",
      [theme.breakpoints.down("md")]: {
        fontSize: "48px",
      },
    },
    bullet: {
      margin: "-10px 10px 0 10px",
      opacity: 0.9,
      color: "#fff",
    },
  })
);
