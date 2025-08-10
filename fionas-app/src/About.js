import React from "react";
import { Typography, Container, Box, Paper, Chip } from "@mui/material";
import { commonStyles } from "./theme";
import cool from "./images/gallery/g23.jpg";

function About() {
  const awards = ["Dean's List Scholar", "University of Toronto Scholar", "Helga and Frank Peroutka Award", "Dean's Merit Award", "~$30k in total scholarship value"];
  
  const skills = [
    "Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R", "MATLAB",
    "SciPy", "NumPy", "React.js", "Node.js", "Flask", "MongoDB", "Material-UI", 
    "FastAPI", "JUnit", "PyTest", "Check2", "Docker", "GraphQL", "Kubernetes",
    "TensorFlow", "PyTorch", "OpenCV", "Pandas", "Scikit-Learn", "Bash Scripting",
    "Git", "Postman", "UML", "Agile", "Microsoft Office", "Linux"
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      {/* About Me Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography 
          variant="h2" 
          sx={{
            mb: 2,
            ...commonStyles.gradientText,
            ...commonStyles.fadeInUp,
            animationDelay: '0.2s',
            animationFillMode: 'both',
          }}
        >
          About Me
        </Typography>
      </Box>

      <Box sx={{ 
        display: "flex", 
        flexDirection: { xs: "column", lg: "row" },
        gap: 6, 
        mb: 8 
      }}>
        {/* Profile Image Container */}
        <Box sx={{
          display: "flex", 
          flexDirection: "column", 
          alignItems: "center", 
          flex: { xs: "1", lg: "0 0 400px" }
        }}>
          <Paper
            elevation={0}
            sx={{
              ...commonStyles.glassmorphism,
              ...commonStyles.gradientBorder,
              ...commonStyles.float,
              p: 4,
              ...commonStyles.hoverEffect,
              ...commonStyles.fadeInLeft,
              animationDelay: '0.4s',
              animationFillMode: 'both',
            }}
          >
            <Box
              component="img"
              src={cool}
              alt="Fiona Verzivolli"
              sx={{
                width: { xs: 300, sm: 350, md: 400 },
                height: "auto",
                borderRadius: "20px",
                border: "3px solid rgba(99, 102, 241, 0.3)",
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
                transition: "all 0.3s ease",
                ...commonStyles.glow,
              }}
            />
          </Paper>
          <Typography 
            variant="body2" 
            color="text.secondary" 
            sx={{ 
              mt: 2, 
              fontStyle: "italic",
              textAlign: "center",
              fontSize: "0.9rem",
              opacity: 0.8,
              ...commonStyles.fadeInUp,
              animationDelay: '0.6s',
              animationFillMode: 'both',
            }}
          >
            Me sitting on a bench at High Park.
          </Typography>
        </Box>

        {/* About Me Text Container */}
        <Paper
          elevation={0}
          sx={{
            ...commonStyles.glassmorphism,
            p: 4,
            flex: 1,
            ...commonStyles.hoverEffect,
            ...commonStyles.fadeInRight,
            animationDelay: '0.8s',
            animationFillMode: 'both',
          }}
        >
          <Typography 
            variant="body1" 
            color="text.secondary"
            sx={{
              fontSize: '1.1rem',
              lineHeight: 1.8,
              '& strong': {
                color: '#6366f1',
                fontWeight: 600
              }
            }}
          >
            Hi! I'm Fiona, a second-year Computer Science student at the University of Toronto, specializing in Computer Science with a minor in Statistics and Math. I have a passion for building things and making an impact.
            <br /><br />
            I believe in using <strong>technology to help others</strong> and create real-world solutions. Whether it's through <strong>software development, research, or collaboration</strong>, I strive to make a meaningful change.  
            <br /><br />
            This summer, I'm interning at <strong>Shopify as a Software Engineer</strong>, where I will help <strong>merchants turn their dreams into reality</strong> by building innovative e-commerce solutions.  
            <br /><br />
            I'm currently working as a Software Developer at Dr. Jang's Lab, developing <strong>BalanceAI</strong>, a literacy and language assessment tool for elementary and middle school students. I'm also learning <strong>CUDA and MongoDB</strong> while diving deeper into
            <strong> numerical methods, databases,</strong> and <strong>systems programming</strong> through my coursework at the University of Toronto.  
            <br /><br />
            I love collaborating on projects related to <strong>systems programming, scientific computing, open-source tools, and educational technology</strong>. In my free time, I enjoy <strong>taking walks</strong> in nature, <strong>painting</strong> with different mediums such as watercolours, acrylics and oils, 
            <strong> playing video games</strong> such as League of Legends, Binding of Isaac, Balatro, Minecraft, and <strong>admiring architecture</strong>.
             I always take a moment to look at the buildings around me whenever I'm walking near downtown Toronto's St. Andrew station!
            <br /><br />
            I love making new friends! If you want to connect with me, feel free to do so! You can find my information in the <strong>contact</strong> section.
          </Typography>
        </Paper>
      </Box>

      {/* Awards Section */}
      <Box sx={{ textAlign: "center", mb: 8 }}>
        <Typography 
          variant="h3" 
          sx={{
            mb: 4,
            ...commonStyles.gradientText,
            ...commonStyles.fadeInUp,
            animationDelay: '1.0s',
            animationFillMode: 'both',
          }}
        >
          Awards
        </Typography>
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          flexWrap: "wrap", 
          gap: 2 
        }}>
          {awards.map((award, index) => (
            <Chip
              key={index}
              label={award}
              sx={{
                background: 'rgba(99, 102, 241, 0.1)',
                border: '1px solid rgba(99, 102, 241, 0.3)',
                color: '#6366f1',
                fontSize: '0.9rem',
                fontWeight: 500,
                px: 2,
                py: 1,
                transition: 'all 0.3s ease',
                ...commonStyles.fadeInUp,
                animationDelay: `${1.2 + index * 0.1}s`,
                animationFillMode: 'both',
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.2)',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(99, 102, 241, 0.3)',
                }
              }}
            />
          ))}
        </Box>
      </Box>

      {/* Technical Skills Section */}
      <Box sx={{ textAlign: "center" }}>
        <Typography 
          variant="h3" 
          sx={{
            mb: 4,
            ...commonStyles.gradientText,
            ...commonStyles.fadeInUp,
            animationDelay: '1.8s',
            animationFillMode: 'both',
          }}
        >
          Technical Skills
        </Typography>
        <Box sx={{ 
          display: "flex", 
          justifyContent: "center", 
          flexWrap: "wrap", 
          gap: 2 
        }}>
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              sx={{
                background: 'rgba(255, 255, 255, 0.05)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                color: 'text.secondary',
                fontSize: '0.85rem',
                fontWeight: 500,
                px: 2,
                py: 1,
                transition: 'all 0.3s ease',
                ...commonStyles.fadeInUp,
                animationDelay: `${2.0 + index * 0.05}s`,
                animationFillMode: 'both',
                '&:hover': {
                  background: 'rgba(99, 102, 241, 0.1)',
                  border: '1px solid rgba(99, 102, 241, 0.3)',
                  color: '#6366f1',
                  transform: 'translateY(-2px)',
                  boxShadow: '0 8px 20px rgba(99, 102, 241, 0.2)',
                }
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default About;
