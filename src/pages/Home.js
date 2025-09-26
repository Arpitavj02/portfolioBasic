import React from "react";
import { Typography, Box } from "@mui/material";

const Home = () => (
  <Box sx={{ textAlign: "center", mt: 5 }}>
    <Typography variant="h3">Welcome to My Portfolio</Typography>
    <Typography variant="h6" sx={{ mt: 2 }}>Check out my projects below!</Typography>
  </Box>
);

export default Home;
