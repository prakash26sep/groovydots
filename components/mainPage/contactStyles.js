import { makeStyles, createStyles } from "@mui/styles";
import { Theme } from "@mui/material";

export default makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100vw",
    },
    container: {
      width: "80%",
      margin: "0 auto",
      padding: "100px 20px",
      [theme.breakpoints.down("md")]: {
        padding: "80px 16px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "60px 12px",
      },
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
    },
    paraText: {
      fontSize: "14px",
      color: "#999999",
      marginTop: "50px",
      [theme.breakpoints.down("md")]: {
        marginTop: "35px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "20px",
      },
    },

    inputBoxContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "70%",
      margin: "0 auto",
      marginTop: "-30px",
      [theme.breakpoints.down("md")]: {
        marginTop: "-50px",
      },
      [theme.breakpoints.down("sm")]: {
        marginTop: "-70px",
        flexDirection: "column",
      },
    },

    leftInputContainer: {
      width: "100%",
      height: "40px",
      marginBottom: "30px",
      background: "#f5f5f5",
      padding: "15px, 14.1px",
      textTransform: "uppercase",
    },

    leftInputWrapper: {
      width: "45%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    rightInputContainer: {
      width: "45%",
      height: "180px",
      marginBottom: "30px",
      background: "#f5f5f5",
      textAlign: "left",
      textTransform: "uppercase",
    },
    buttonContainer: {
      padding: "10px 20px",
      background: "#222222",
      color: "#ffffff",
      margin: "0 auto",
      marginTop: "20px",
      borderRadius: "4px",
      marginBottom: "40px",
    },
  })
);
