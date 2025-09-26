import React from "react";
import { Typography, Box } from "@mui/material";

const About = () => (
  <Box sx={{ textAlign: "center", mt: 5 }}>
    <Typography variant="h4">About Me</Typography>
    <Typography sx={{ mt: 2, mx: 3 }}>
      I am a web developer skilled in React, MUI, and full-stack development. I love creating beautiful and functional web apps.
    </Typography>
  </Box>
);

export default About;
