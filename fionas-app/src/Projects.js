import React from "react";
import { Typography, Box, Grid, Container } from "@mui/material";
import { commonStyles } from "./theme";
import ProjectCard from "./ProjectCard";

const projects = [
    { 
      title: "EventHive UofT",
      description: "EventHiveUofT is an interactive map for University of Toronto students to discover, post, and RSVP to campus events. Using Clean Architecture and SOLID principles, it promotes student engagement through features like event filtering and detailed event info.", 
      technologies: ["Java", "JUnit", "OpenStreetMap API", "MailGun API", "Swing", "Spring Boot", "Firebase"],
      link: "https://github.com/FionaVerzivolli/EventHiveUofT"
    },
    {
      title: "Exploring GE, Pivoting, and LU Factorization",
      description: " Implementations of Gaussian Elimination with various pivoting strategies, based on methods learned in CSC336 at the University of Toronto and Michael Heath's Scientific Computing textbook.",
      technologies: ["Python", "NumPy", "Pandas"],
      link: "https://github.com/FionaVerzivolli/Exploring-GE-Pivoting-and-LU-factorization"
    },
    { 
      title: "Sentisphere",
      description: "A project utilizing web scraping, AI sentiment analysis, and data visualization to predict stock sentiment. Analyze news articles to determine positivity/negativity scores and visualize past stock trends for informed decisions.",
      technologies: ["Python", "Flask", "Docker", "BeautifulSoup4", "React", "JavaScript"],
      link: "https://github.com/FionaVerzivolli/Sentisphere"
    },
    { 
      title: "Credit Score Bias Visualizer", 
      description: "A bias detection tool for credit scoring systems. Empowering organizations to analyze and mitigate disparities in credit scores using advanced analytics, interactive visualizations, and fairness tracking.",
      technologies: ["Python", "Flask", "Chart.js", "React", "Firebase", "Auth0", "PythonAnywhere"],
      link: "https://github.com/FionaVerzivolli/Credit-Score-Bias-Visualizer"
    },
    { 
      title: "Netflix Movie Recommender",
      description: "Movie recommendation system that leverages Louvain's Algorithm for graph community detection to provide personalized movie suggestions based on user preferences and interactions.", 
      technologies:["Python", "Tkinter"],
      link: "https://github.com/FionaVerzivolli/Netflix-Movie-Recommender"
    },
    { 
      title: "Dr. Mario",
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

function Projects({ projectList = projects }) {
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* Projects Header */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography 
          variant="h2" 
          sx={{
            mb: 2,
            ...commonStyles.gradientText
          }}
        >
          Projects
        </Typography>
        <Typography 
          variant="h6" 
          color="text.secondary"
          sx={{
            maxWidth: '800px',
            mx: 'auto',
            opacity: 0.8,
            lineHeight: 1.6
          }}
        >
          A collection of my work showcasing my passion for software development, 
          from academic projects to real-world applications.
        </Typography>
      </Box>

      {/* Projects Grid */}
      <Grid container spacing={4} justifyContent="center">
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
  );
}

export default Projects;
