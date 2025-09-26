import React from "react";
import { Card, CardMedia, CardContent, Typography, CardActionArea } from "@mui/material";

const ProjectCard = ({ title, description, image, link }) => {
  return (
    <Card sx={{ maxWidth: 345, m: 2 }}>
      <CardActionArea onClick={() => window.open(link, "_blank")}>
        <CardMedia component="img" height="140" image={image} alt={title} />
        <CardContent>
          <Typography gutterBottom variant="h6">{title}</Typography>
          <Typography variant="body2" color="text.secondary">{description}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProjectCard;
