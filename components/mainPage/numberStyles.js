import { makeStyles, createStyles } from "@mui/styles";

export default makeStyles((theme) =>
  createStyles({
    mainContainer: {
      width: "100vw",
    },
    container: {
      backgroundImage: "url(/separator3.jpg)",
      backgroundPosition: "50% 0px",
      textAlign: "center",
      bavkgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundAttchment: "fixed",
      width: "100%",
      height: "100%",
    },
    innerContainer: {
      background: "#000000",
      opacity: 0.8,
      height: "100%",
    },
    imageContainer: {
      width: "70px",
      height: "70px",
      marginBottom: "40px",
      marginTop: "60px",
      [theme.breakpoints.down("md")]: {
        width: "50px",
        height: "50px",
        marginBottom: "30px !important",
        marginTop: "45px !important",
      },

      [theme.breakpoints.down("sm")]: {
        width: "35px",
        height: "35px",
        marginBottom: "24px !important",
        marginTop: "32px !important",
      },
    },
    numberContainer: {
      color: "#ffffff",
      fontFamily: `"Montserrat", "sans-serrif"`,
      margin: "0 auto",
      padding: "10px 20px",
      borderRadius: "3px",
      marginBottom: "30px",
      backgroundColor: "#ffffff26",
      width: "30%",
      textAlign: "center",
      fontSize: "72px",
      lineHeight: "72px",
      [theme.breakpoints.down("lg")]: {
        fontSize: "64px",
        lineHeight: "64px",
        width: "40%",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: "56px",
        lineHeight: "56px",
        width: "40%",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "48px",
        lineHeight: "48px",
        width: "45%",
      },
      [theme.breakpoints.down("md")]: {
        fontSize: "32px",
        lineHeight: "32px",
        width: "50%",
      },
    },
    numberStyle: {
      color: "#ffffff",
      background: "#ffffff",
      opacity: "0.1",
      textAlign: "center",
      fontSize: "72px",
      lineHeight: "72px",
      fontFamilty: `"Montserrat", "sans-serrif"`,
      padding: "10px 20px",
      borderRadius: "3px",
      marginBottom: "30px",
      display: "inline-block",
      //   marginTop: '100px',
    },

    authorName: {
      fontSize: "14px",
      color: "#999999",
      marginTop: "4px",
      textAlign: "center",
    },
    imageTextContainer: {
      marginTop: "40px",
    },
  })
);
