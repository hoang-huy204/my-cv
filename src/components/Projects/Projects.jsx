import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid2,
  CardMedia,
} from "@mui/material";
import { projects } from "../../data";

function Projects() {
  return (
    <Box sx={{ padding: 4 }}>
      <Typography variant="h4" gutterBottom>
        Các Dự Án Đã Làm
      </Typography>
      <Grid2 container spacing={3}>
        {projects.map((project, index) => (
          <Grid2 size={6} key={index}>
            <Card variant="outlined" sx={{ height: "100%" }}>
              <CardMedia
                component="img"
                width="100%"
                height="400"
                image={project.image}
                alt={project.name}
              />
              <CardContent>
                <Typography variant="h5" gutterBottom>
                  {project.name}
                </Typography>
                <Typography variant="body1" paragraph>
                  {project.description}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  Mục tiêu:
                </Typography>
                <ul style={{ paddingLeft: 16 }}>
                  {project.objectives.map((objective, i) => (
                    <li key={i}>
                      <Typography variant="body2">{objective}</Typography>
                    </li>
                  ))}
                </ul>
                <Typography variant="body2" fontWeight="bold">
                  Vị trí:
                </Typography>
                <Typography variant="body2" paragraph>
                  {project.position}
                </Typography>
                <Typography variant="body2" fontWeight="bold">
                  Các tính năng chính:
                </Typography>
                <ul style={{ paddingLeft: 16 }}>
                  {project.features.map((feature, i) => (
                    <li key={i}>
                      <Typography variant="body2">{feature}</Typography>
                    </li>
                  ))}
                </ul>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  style={{ marginTop: 16 }}
                >
                  Công nghệ sử dụng:
                </Typography>
                <ul style={{ paddingLeft: 16 }}>
                  {project.techStack.map((tech, i) => (
                    <li key={i}>
                      <Typography variant="body2">{tech}</Typography>
                    </li>
                  ))}
                </ul>
                <Box sx={{ mt: 2 }}>
                  {project.documentLink && (
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.documentLink}
                      target="_blank"
                      sx={{ mr: 1 }}
                    >
                      Document link
                    </Button>
                  )}

                  {(project.youtubeLink || project.demoLink) && (
                    <Button
                      variant="contained"
                      color="primary"
                      href={project.youtubeLink || project.demoLink}
                      target="_blank"
                      sx={{ mr: 1 }}
                    >
                      Video Demo {project.youtubeLink ? " (youtube)" : ""}
                    </Button>
                  )}
                  {project.githubLink && (
                    <Button
                      variant="outlined"
                      color="inherit"
                      href={project.githubLink}
                      target="_blank"
                    >
                      GitHub
                    </Button>
                  )}
                  {project.githubLinks && (
                    <>
                      <Button
                        variant="outlined"
                        color="inherit"
                        href={project.githubLinks.frontend}
                        target="_blank"
                        sx={{ mr: 1 }}
                      >
                        GitHub Frontend
                      </Button>
                      <Button
                        variant="outlined"
                        color="inherit"
                        href={project.githubLinks.backend}
                        target="_blank"
                      >
                        GitHub Backend
                      </Button>
                    </>
                  )}
                </Box>
              </CardContent>
            </Card>
          </Grid2>
        ))}
      </Grid2>
    </Box>
  );
}

export default Projects;
