import { makeStyles, createStyles } from "@mui/styles";

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
    imageContainer: {
      width: "80%",
      margin: "0 auto",
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      [theme.breakpoints.down("md")]: {
        flexWrap: "wrap",
      },
    },

    imageStyle: {
      [theme.breakpoints.down("md")]: {
        flexBasis: "20%",
        marginTop: "16px",
      },
    },
    thanksHeading: {
      color: "#222222",
      textTransform: "uppercase",
      marginTop: "32px",
      fontSize: "30px",
      textAlign: "center",
      fontWeight: "400",
      fontFamily: "Montserrat, sans-serrif",
      [theme.breakpoints.down("md")]: {
        fontSize: "26px",
      },
      [theme.breakpoints.down("sm")]: {
        fontSize: "22px",
      },
    },
    authorName: {
      fontSize: "14px",
      color: "#999999",
      marginTop: "20px",
      textAlign: "center",
    },
  })
);
