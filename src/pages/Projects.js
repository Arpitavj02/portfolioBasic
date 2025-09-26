import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import ProjectCard from "../components/ProjectCard";

const projects = [
  {
    title: "Project One",
    description: "Todo-App",
    image: "/images/2.jpeg",
    link: "https://to-do-xi-jet.vercel.app/"
  },
  {
    title: "Project Two",
    description: "StopWatch",
    image: "/images/3.jpeg",
    link: "https://stopwatch-ochre-iota.vercel.app/"
  },
  {
    title: "Project Three",
    description: "Weather-App",
    image: "/images/1.jpeg",
    link: "https://weatherr-rouge.vercel.app/"
  },
];

const Projects = () => (
  <Box sx={{ mt: 5, mb: 5, px: 3 }}>
    <Typography variant="h4" gutterBottom textAlign="center">My Projects</Typography>
    <Grid container justifyContent="center">
      {projects.map((project, index) => (
        <ProjectCard key={index} {...project} />
      ))}
    </Grid>
  </Box>
);

export default Projects;
