import React from "react";
import Container from "@mui/material/Container";
import {
  Box,
  Grid2,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  Link,
  Avatar,
  Paper,
} from "@mui/material";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import classNames from "classnames/bind";

import styles from "./HomeEnglish.module.scss";
import avatar from "../../assets/img/avatar.jpg";

const cx = classNames.bind(styles);

function HomeEnglish() {
  return (
    <div>
      {/* Main Content */}
      <Container maxWidth="false" disableGutters>
        <Grid2 container spacing={2}>
          <Grid2 size={3}>
            <Box
              sx={{
                backgroundColor: "#333",
                color: "#f5f5f5",
                p: 3,
              }}
            >
              {/* Header */}
              <Grid2
                display="flex"
                justifyContent="center"
                alignItems="center"
                size="grow"
              >
                <Avatar src={avatar} sx={{ width: 100, height: 100 }} />
              </Grid2>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                textAlign="center"
              >
                <Typography
                  variant="h6"
                  sx={{ fontWeight: "bold", color: "#ffb400" }}
                >
                  Trần Ngọc Huy Hoàng
                </Typography>
                <Typography
                  variant="subtitle2"
                  sx={{ color: "#ffb400", mb: 2 }}
                >
                  FULL STACK SOFTWARE ENGINEER
                </Typography>
              </Box>

              {/* Contact Information */}
              <List>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="0397273850" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <MailIcon />
                  </ListItemIcon>
                  <ListItemText primary="ngochoanghuy0504@gmail.com" />
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <FacebookIcon />
                  </ListItemIcon>
                  <ListItemText>
                    <Link
                      href="https://www.facebook.com/hoanghuy2k4"
                      target="_blank"
                      underline="hover"
                      sx={{ color: "#ffb400" }}
                    >
                      Here
                    </Link>
                  </ListItemText>
                </ListItem>
                <ListItem disablePadding>
                  <ListItemIcon sx={{ color: "#ffb400" }}>
                    <LocationOnIcon />
                  </ListItemIcon>
                  <ListItemText primary="Truong Dinh, Hoang Mai, Hanoi" />
                </ListItem>
              </List>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Skills Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                SKILLS
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                SPECIALIZATION
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Researching and learning new technologies;
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Frontend:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Developing UI/UX based on ReactJS, JavaScript (ES6), HTML5/CSS
                (SCSS), jQuery, Bootstrap 5;
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                + Designing responsive web designs, working with RESTful APIs...
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                Backend:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Developing backend with PHP, C#, NodeJS, Java, and databases
                such as SQL Server and MySQL.
              </Typography>
              <Typography variant="body2" sx={{ fontWeight: "bold", mb: 1 }}>
                DevOps:
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Gained knowledge of DevOps in real-world applications, working
                with CI/CD, servers, etc.
              </Typography>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* Interests Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                INTERESTS
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Reading books, mountain climbing, exploring, self-study, and
                self-development.
              </Typography>

              <Divider sx={{ borderColor: "#ffb400", my: 2 }} />

              {/* References Section */}
              <Typography
                variant="h6"
                sx={{ color: "#ffb400", fontWeight: "bold", mb: 1 }}
              >
                REFERENCES
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Dinh Thanh Dat - Founder of DSkill - 0962650286
              </Typography>
              <Typography variant="body2" sx={{ mb: 1 }}>
                Facebook:{" "}
                <Link
                  href="https://www.facebook.com/DinhThanhDatnb"
                  target="_blank"
                  underline="hover"
                  sx={{ color: "#ffb400" }}
                >
                  Here
                </Link>
              </Typography>
            </Box>
          </Grid2>
          <Grid2 size={9}>
            <Box sx={{ padding: 3 }}>
              {/* Header */}
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "bold",
                  color: "#ffb400",
                }}
              >
                CAREER OBJECTIVES
              </Typography>
              <Typography sx={{ mt: 2, mb: 4 }}>
                Applying knowledge gained from studies to fulfill tasks
                efficiently and effectively while pursuing lifelong learning.
                Aiming to complete the Junior Developer role within one year and
                transition to Senior Developer within the next five years.
                Mastering advanced knowledge such as system architecture,
                performance optimization, security, databases, and DevOps.
              </Typography>

              {/* Projects Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                PROJECTS
              </Typography>
              <Grid2 container spacing={3} sx={{ mb: 4 }}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    TINYTOTS - SHOP BABY
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    06/2023 - 07/2023
                  </Typography>
                  <Typography variant="body2">Project 1 at Aptech</Typography>
                  <Typography variant="body2">Duration: 1 month</Typography>
                  <Typography variant="body2">Team members: 2</Typography>
                  <Typography variant="body2">
                    Applied knowledge of HTML, CSS, JavaScript, PHP, and MySQL.
                    Designed the interface and made it responsive.
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VIETJACK
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    06/2023 - 07/2023
                  </Typography>
                  <Typography variant="body2">
                    Role: Independent developer
                  </Typography>
                  <Typography variant="body2">
                    Developed a website interface using HTML, CSS, JavaScript,
                    and implemented responsiveness.
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    VEHICLE INSURANCE
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    08/2024 - 09/2024
                  </Typography>
                  <Typography variant="body2">Team members: 4</Typography>
                  <Typography variant="body2">
                    Designed a web interface using React with libraries such as
                    Ant Design. Backend developed using C# MVC.
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    AND MANY MORE PROJECTS...
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Education Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                EDUCATION
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    INFORMATION TECHNOLOGY
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2022 - Present
                  </Typography>
                  <Typography variant="body2">
                    International Programmer Training System - Aptech
                  </Typography>
                  <Typography variant="body2">
                    Participated in Techwiz competition organized by Aptech
                  </Typography>
                  <Typography variant="body2">
                    Achieved several great results
                  </Typography>
                </Grid2>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    SELF-STUDY
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2020 - Present
                  </Typography>
                  <Typography variant="body2">
                    Explored new technologies, frameworks for frontend, backend,
                    and DevOps.
                  </Typography>
                  <Typography variant="body2">
                    F8 Fullstack: Earned certificates in HTML, CSS, Responsive
                    Design, JavaScript, ReactJS, etc.
                  </Typography>
                </Grid2>
              </Grid2>

              {/* Work Experience Section */}
              <Typography
                variant="h6"
                sx={{ fontWeight: "bold", color: "#ffb400" }}
              >
                WORK EXPERIENCE
              </Typography>
              <Grid2 container spacing={3}>
                <Grid2 size={6}>
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    COLLABORATOR
                  </Typography>
                  <Typography variant="subtitle2" color="text.secondary">
                    2023 - 2024
                  </Typography>
                  <Typography variant="body2">
                    DSkill - Soft Skills Development
                  </Typography>
                  <Typography variant="body2">
                    - Worked in a team to improve skills such as communication,
                    presentation, teamwork, leadership, etc.
                  </Typography>
                  <Typography variant="body2">
                    - Contributed to enhancing soft skills, communication, and
                    presentation skills for students.
                  </Typography>
                  <Typography variant="body2">
                    - Practiced Photoshop and video editing skills.
                  </Typography>
                  <Typography variant="body2">- Volunteer work</Typography>
                </Grid2>
              </Grid2>
            </Box>
          </Grid2>
        </Grid2>
      </Container>
    </div>
  );
}

export default HomeEnglish;
