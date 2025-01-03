import * as React from "react";
import Container from "@mui/material/Container";
// import Typography from '@mui/material/Typography';
import Box from "@mui/material/Box";
// import Link from '../src/Link';
// import ProTip from '../src/ProTip';
// import Copyright from '../src/Copyright';

export default function Home() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          my: 4,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h2 style={{fontSize: "30px", color: "#bd9a1f", fontFamily:  "math"}}>Coming soon</h2>
        <img src="/groovy-dots.gif" />
        {/* <Typography variant="h4" component="h1" gutterBottom>
          Material UI - Next.js example in TypeScript
        </Typography>
        <Link href="/about" color="secondary">
          Go to the about page
        </Link>
        <ProTip />
        <Copyright /> */}
      </Box>
    </Container>
  );
}
