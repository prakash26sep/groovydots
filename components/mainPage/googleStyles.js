import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100vw",
      height: "70vh",
      // marginTop: '100px',
    },
    imageContainer: {
      width: "100%",
      height: "65%",
    },
    container: {
      width: "25%",
      margin: "0 auto",
      marginTop: "50px",
      [theme.breakpoints.down("md")]: {
        width: "25%",
      },
      [theme.breakpoints.down("sm")]: {
        width: "40%",
      },
    },
    socialMediaContainer: {
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      margin: "0 auto",
      width: "100%",
    },
    socialImageContainer: {
      width: "60px",
      height: "60px",
      [theme.breakpoints.down("md")]: {
        width: "40px",
        height: "40px",
      },
      [theme.breakpoints.down("sm")]: {
        width: "25px",
        height: "25px",
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
