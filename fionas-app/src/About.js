import React from "react";
import { Typography, Container, Box, Paper, Chip } from "@mui/material";
import { commonStyles } from "./theme";
import cool from "./images/gallery/g23.jpg";

function About() {
  const awards = [
    "Dean's List Scholar (2024 - present)",
    "University of Toronto Scholar",
    "Helga and Frank Peroutka Award",
    "Dean's Merit Award",
    "~$30k in total scholarship value",
  ];

  const skills = [
    "Java", "Python", "C/C++", "SQL", "JavaScript", "HTML/CSS", "R", "MATLAB",
    "SciPy", "NumPy", "React.js", "Node.js", "Flask", "MongoDB", "Material-UI",
    "FastAPI", "JUnit", "PyTest", "Check2", "Docker", "GraphQL", "Kubernetes",
    "TensorFlow", "PyTorch", "OpenCV", "Pandas", "Scikit-Learn", "Bash Scripting",
    "Git", "Postman", "UML", "Agile", "Microsoft Office", "Linux",
  ];

  return (
    <Container maxWidth="xl" sx={{ py: 6 }}>
      {/* About Me Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 2,
            ...commonStyles.gradientText, // now just primary color in your theme
          }}
        >
          About Me
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 5,
          mb: 8,
        }}
      >
        {/* Profile Image Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            flex: { xs: "1", lg: "0 0 380px" },
          }}
        >
          <Paper
            elevation={0}
            sx={{
              ...commonStyles.glassmorphism,
              ...commonStyles.cardHover,
              p: 3,
            }}
          >
            <Box
              component="img"
              src={cool}
              alt="Fiona Verzivolli"
              sx={{
                width: { xs: 260, sm: 320, md: 360 },
                height: "auto",
                borderRadius: "16px",
                border: "1px solid #e5e7eb",
                boxShadow: "0 4px 12px rgba(15, 23, 42, 0.10)",
                display: "block",
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
              opacity: 0.85,
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
            ...commonStyles.cardHover,
            p: 4,
            flex: 1,
          }}
        >
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              fontSize: "1rem",
              lineHeight: 1.8,
              "& strong": {
                color: "primary.main",
                fontWeight: 600,
              },
            }}
          >
            Hi! I'm Fiona, a third year computer science student at the University of
            Toronto, specializing in computer science with a minor in statistics and
            math. I have a passion for building things and making an impact. If you
            want, you can check out my projects in the <strong>projects</strong> section!
            <br />
            <br />
            What drew me to computer science is my belief in using{" "}
            <strong>technology to help others</strong> and create solutions to tough
            problems. Whether it's through <strong>software development, research, or
            collaboration</strong>, my main goal is to make a meaningful change.
            <br />
            <br />
            This summer, I interned at <strong>Shopify as a software engineer</strong>,
            where I helped <strong>merchants turn their dreams into reality!</strong> I
            was part of the Shopify Flow team, which is a node based workflow builder
            that allows merchants to build custom workflows to automate their business
            processes. I built innovative solutions, primarily working on the backend and
            data side, to help them grow their businesses.
            <br />
            <br />
            In the 2024-2025 academic year, I worked as a part time software developer
            at the IDELA Lab where I helped develop <strong>BalanceAI</strong> and{" "}
            <strong>APLUS</strong>, literacy and language assessment tools for students
            of all ages. I am very interested in <strong>numerical methods,
            databases,</strong> and <strong>systems programming</strong>, and I am
            learning every day through my coursework and projects at the University of
            Toronto.
            <br />
            <br />
            One of my favourite things about computer science, outside of the work, is
            the community! I love attending hackathons such as <strong>HackMIT</strong>,
            and I always keep an eye out for cool opportunities to learn and grow such as{" "}
            <strong>RBC WTAP</strong>, which I was a part of!
            <br />
            <br />
            In my free time, I enjoy <strong>exploring new places</strong>,{" "}
            <strong>taking walks</strong> in nature, <strong>painting</strong> with
            different mediums, and occasionally <strong>playing video games</strong>,
            even though I've been a bit busy lately!
            <br />
            <br />
            I love making new friends! If you want to connect with me, feel free to do
            so! You can find my information in the <strong>contact</strong> section!
          </Typography>
        </Paper>
      </Box>

      {/* Awards Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h3"
          sx={{
            mb: 3,
            ...commonStyles.gradientText,
          }}
        >
          Awards
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.5,
          }}
        >
          {awards.map((award, index) => (
            <Chip
              key={index}
              label={award}
              variant="outlined"
              color="primary"
              sx={{
                borderRadius: 999,
                fontSize: "0.9rem",
                fontWeight: 500,
                px: 1.8,
                py: 0.6,
                cursor: "default",
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
            mb: 3,
            ...commonStyles.gradientText,
          }}
        >
          Technical Skills
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1.2,
          }}
        >
          {skills.map((skill, index) => (
            <Chip
              key={index}
              label={skill}
              variant="outlined"
              sx={{
                borderRadius: 999,
                fontSize: "0.85rem",
                fontWeight: 500,
                px: 1.6,
                py: 0.5,
                cursor: "default",
              }}
            />
          ))}
        </Box>
      </Box>
    </Container>
  );
}

export default About;
