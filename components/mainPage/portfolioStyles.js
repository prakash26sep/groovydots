import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
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
    menuItems: {
      display: "flex",
      margin: "0 auto",
      width: "70%",
      marginTop: "-100px",
      justifyContent: "space-around",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },
    menuItem: {
      padding: "8px 15px",
      background: "#EEEEEE",
      color: "#222222",
      border: "none",
      [theme.breakpoints.down("md")]: {
        flexBasis: "200px",
        marginTop: "20px",
      },
    },
    imageContainer: {
      width: "100%",
      marginTop: "30px",

      display: "flex",
      [theme.breakpoints.down("md")]: {
        width: "100%",
        margin: "0 auto",
        marginTop: "30px",
        justifyContent: "space-around",
        flexWrap: "wrap",
      },
      [theme.breakpoints.down("sm")]: {
        width: "100%",
        margin: "0 auto",
        marginTop: "30px",
        justifyContent: "space-around",
        flexWrap: "wrap",
      },
    },
    imageStyle: {
      width: "25%",
      [theme.breakpoints.down("md")]: {
        width: "40%",
        marginTop: "16px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "70%",
        marginTop: "16px",
      },
    },
    contactUsContainer: {
      width: "70%",
      margin: "0 auto",

      marginTop: "-30px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        width: "80%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "90%",
      },
    },
    contactUsHeading: {
      color: "#222222",
      textTransform: "uppercase",
      textAlign: "center",
      padding: "60px 0",
      lineHeight: "35px",
      fontWeight: 400,
      fontFamily: `"Montserrat", "sans-serrif`,
    },
    buttonContainer: {
      marginLeft: "30px",
      background: "#222222",
      color: "#fff",
      fontSize: "16px",
      padding: "10px 20px 10px 20px",
      [theme.breakpoints.down("md")]: {
        padding: "8px 16px 8px 16px",
      },
      [theme.breakpoints.down("sm")]: {
        padding: "4px 8px 4px 8px",
      },
    },
  })
);
