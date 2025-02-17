import React from "react";
import { AppBar, Toolbar, Typography, Container, Box, Button, Paper } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link } from "react-router-dom";
import "@fontsource/poppins";

// Import profile image
import cool from "./images/gallery/flowers.jpg";

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

function About() {
  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ bgcolor: "background.default", color: "text.primary", minHeight: "100vh" }}>
        
        {/* Navbar */}
        <AppBar position="fixed" sx={{ bgcolor: "#1E1E1E" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6" color="primary">Fiona</Typography>
            <Box>
              <Button color="inherit" component={Link} to="/">Home</Button>
              <Button color="inherit" component={Link} to="/projects">Projects</Button>
              <Button color="inherit" component={Link} to="/gallery">Gallery</Button>
              <Button color="inherit" component={Link} to="/contact">Contact</Button>
            </Box>
          </Toolbar>
        </AppBar>

        {/* About Me Section */}
        <Container sx={{ py: 15, textAlign: "center", mt: 5 }}>
          <Typography variant="h4" color="primary" fontWeight="bold">About Me</Typography>

          <Paper sx={{ p: 4, mt: 4, bgcolor: "#1E1E1E", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap" }}>
            
            {/* Profile Image & Caption */}
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", flex: "1 1 300px" }}>
              <Box
                component="img"
                src={cool}
                alt="Fiona Verzivolli"
                sx={{
                  width: 300,
                  height: "auto",
                  borderRadius: "8px",
                  border: "5px solid rgba(33, 150, 243, 0.7)",
                  boxShadow: "0px 0px 20px rgba(33, 150, 243, 0.5)"
                }}
              />
              <Typography variant="body2" color="text.secondary" sx={{ mt: 1, fontStyle: "italic" }}>
                A painting of flowers I made.
              </Typography>
            </Box>

            {/* About Me Text */}
            <Box sx={{ textAlign: "left", flex: "2 1 500px", ml: 3 }}>
              <Typography variant="body1" color="text.secondary">
                Hi! I'm Fiona, a second-year Computer Science student at the University of Toronto, specializing in Computer Science with a minor in Statistics and Math. I have a passion for building things and making an impact.
                <br /><br />
                I believe in using <strong>technology to help others</strong> and create real-world solutions. Whether it's through <strong>software development, research, or collaboration</strong>, I strive to make a meaningful change.  
                <br /><br />
                This summer, I will be interning at <strong>Shopify as a Software Engineer</strong>, where I will help <strong>merchants turn their dreams into reality</strong> by building innovative e-commerce solutions.  
                <br /><br />
                I'm currently working as a Software Developer at Dr. Jang's Lab, developing <strong>BalanceAI</strong>, a literacy and language assessment tool for elementary and middle school students. I'm also learning <strong>CUDA and MongoDB</strong> while diving deeper into
                <strong> numerical methods, databases,</strong> and <strong>systems programming</strong> through my coursework at the University of Toronto.  
                <br /><br />
                I love collaborating on projects related to <strong>systems programming, scientific computing, open-source tools, and educational technology</strong>. In my free time, I enjoy <strong>taking walks</strong> in nature, <strong>painting</strong> with different mediums such as watercolours, acrylics and oils, 
                <strong> playing video games</strong> such as League of Legends, Binding of Isaac, Balatro, Minecraft, and <strong>admiring architecture</strong>.
                 I always take a moment to look at the buildings around me whenever I'm walking near downtown Toronto's St. Andrew station!
                <br /><br />
              </Typography>

              <Typography variant="body1" color="text.secondary"> I love making new friends! If you want to connect with me, feel free to do so! You can find my information in the <strong>contact</strong> section.</Typography>
            </Box>
          </Paper>
        </Container>

        {/* Awards Section */}
        <Container sx={{ py: 0, textAlign: "center" }}>
          <Typography variant="h4" color="primary" fontWeight="bold">Awards</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, mt: 3 }}>
            {["Dean's List Scholar", "University of Toronto Scholar", "Helga and Frank Peroutka Award", "Dean's Merit Award"].map((award, index) => (
              <Paper key={index} sx={{ p: 2, px: 4, bgcolor: "#1E1E1E", borderRadius: "8px", textAlign: "center", minWidth: "200px",
                transition: "0.3s", "&:hover": { boxShadow: "0px 4px 15px rgba(0,0,0,0.5)" } }}>
                <Typography variant="body1" color="text.secondary">{award}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>

        {/* Technical Skills Section */}
        <Container sx={{ py: 10, textAlign: "center" }}>
          <Typography variant="h4" color="primary" fontWeight="bold">Technical Skills</Typography>
          <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 2, mt: 3 }}>
            {[
              "Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R", "MATLAB",
              "SciPy", "NumPy", "React.js", "Node.js", "Flask", "MongoDB", "Material-UI", 
              "FastAPI", "JUnit", "PyTest", "Check2", "Docker", "GraphQL", "Kubernetes",
              "TensorFlow", "PyTorch", "OpenCV", "Pandas", "Scikit-Learn", "Bash Scripting",
              "Git", "Postman", "UML", "Agile", "Microsoft Office", "Linux"
            ].map((skill, index) => (
              <Paper key={index} sx={{ p: 2, px: 4, bgcolor: "#1E1E1E", borderRadius: "8px", textAlign: "center", minWidth: "150px",
                transition: "0.3s", "&:hover": { boxShadow: "0px 4px 15px rgba(0,0,0,0.5)" } }}>
                <Typography variant="body1" color="text.secondary">{skill}</Typography>
              </Paper>
            ))}
          </Box>
        </Container>

        {/* Footer */}
        <Box sx={{ textAlign: "center", py: 2, bgcolor: "#1A1A1A", mt: 5 }}>
          <Typography variant="body2" color="text.secondary">
            &copy; {new Date().getFullYear()} Fiona Verzivolli. All Rights Reserved.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default About;
