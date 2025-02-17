import React from "react";
import { AppBar, Toolbar, Typography, Box, Button, Grid, Container } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "@fontsource/poppins";
import ProjectCard from "./ProjectCard";

const theme = createTheme({
  typography: {
    fontFamily: "Poppins, sans-serif",
  },
  palette: {
    primary: { main: "#2196F3" },
    background: { default: "#121212", paper: "#1A1A1A" },
    text: { primary: "#ffffff", secondary: "#b0bec5" },
  },
});

const projects = [
    { 
      title: "EventHive UofT",
      description: "EventHiveUofT is an interactive map for University of Toronto students to discover, post, and RSVP to campus events. Using Clean Architecture and SOLID principles, it promotes student engagement through features like event filtering and detailed event info.", 
      technologies: ["Java", "JUnit", "OpenStreetMap API", "MailGun API", "Swing", "Spring Boot", "Firebase"],
      link: "https://github.com/FionaVerzivolli/EventHiveUofT"
    },
    { 
      title: "Credit Score Bias Visualizer", 
      description: "A bias detection tool for credit scoring systems. Empowering organizations to analyze and mitigate disparities in credit scores using advanced analytics, interactive visualizations, and fairness tracking.",
      technologies: ["Python", "Flask", "Chart.js", "React", "Firebase", "Auth0", "PythonAnywhere"],
      link: "https://github.com/FionaVerzivolli/Credit-Score-Bias-Visualizer"
    },
    { 
      title: "Sentisphere",
      description: "A project utilizing web scraping, AI sentiment analysis, and data visualization to predict stock sentiment. Analyze news articles to determine positivity/negativity scores and visualize past stock trends for informed decisions.",
      technologies: ["Python", "Flask", "Docker", "BeautifulSoup4", "React", "JavaScript"],
      link: "https://github.com/FionaVerzivolli/Sentisphere"
    },
    { 
      title: "Netflix Movie Recommender",
      description: "Movie recommendation system that leverages Louvain's Algorithm for graph community detection to provide personalized movie suggestions based on user preferences and interactions.", 
      technologies:["Python", "Tkinter"],
      link: "https://github.com/FionaVerzivolli/Netflix-Movie-Recommender"
    },
    { 
      title: "Dr Mario",
      description: "A clone of the popular Doctor Mario... but this time.. made ENTIRELY in MIPS assembly! Supports different game modes, enemies, collision detection, movement, beautiful graphics, and scoring.", 
      technologies:["MIPS Assembly"],
      link: "https://github.com/FionaVerzivolli"
    },
    { 
      title: "Interactive Maze Game",
      description: "Story-based maze game coded in python using pygame. Includes collision detection, multiple levels, story progression, enemies, special effects, and different game modes. All art is hand drawn by me!", 
      technologies:["Python", "Pygame"],
      link: "https://github.com/FionaVerzivolli/Maze-Game"
    },
    {
        title: "Portfolio Site",
        description: "What you are using right now! Pretty cool huh?",
        technologies:["React", "Material UI"],
        link: "https://github.com/FionaVerzivolli"
    }
  ];
  
  <Grid container spacing={3} justifyContent="center">
    {projects.map((project, index) => (
      <ProjectCard
        key={index}
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        link={project.link}
      />
    ))}
  </Grid>;
  

function Projects({ projectList = projects }) {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh" }}>
        {/* Navbar */}
        <AppBar position="fixed" sx={{ bgcolor: "#1E1E1E" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" color="primary">Fiona</Typography>
            <Box>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/about">About</Button>
              <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* Projects Section */}
        <Container sx={{ py: 15, textAlign: "center", mt: 5 }}>
          <Typography variant="h4" color="primary" fontWeight="bold">Projects</Typography>
          <Grid container spacing={3} justifyContent="center" sx={{ mt: 3 }}>
            {projectList.map((project, index) => (
              <ProjectCard 
                key={index} 
                title={project.title} 
                description={project.description} 
                technologies={project.technologies} 
                link={project.link}
              />
            ))}
          </Grid>
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default Projects;
