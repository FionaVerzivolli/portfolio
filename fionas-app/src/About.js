import React from "react";
import { Typography, Container, Box } from "@mui/material";
import { commonStyles } from "./theme";
import cool from "./images/gallery/g23.jpg";

function About() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      {/* About Me Section */}
      <Box sx={{ textAlign: "center", mb: 6 }}>
        <Typography
          variant="h2"
          sx={{
            mb: 4,
            ...commonStyles.gradientText,
          }}
        >
          About Me
        </Typography>
      </Box>

      {/* Image and First Text Block Side by Side */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
          gap: 6,
          alignItems: "flex-start",
          mb: 6,
        }}
      >
        {/* Profile Image Container */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: { xs: "center", lg: "flex-start" },
            flex: { xs: "1", lg: "0 0 auto" },
          }}
        >
          <Box
            component="img"
            src={cool}
            alt="Fiona Verzivolli"
            sx={{
              width: { xs: 280, sm: 340, md: 360 },
              height: "auto",
              borderRadius: "8px",
              display: "block",
            }}
          />
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mt: 2,
              fontStyle: "italic",
              textAlign: { xs: "center", lg: "left" },
              fontSize: "0.9rem",
              opacity: 0.7,
            }}
          >
            Me sitting on a bench at High Park.
          </Typography>
        </Box>

        {/* First Text Block */}
        <Box sx={{ flex: 1 }}>
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
            Toronto, specializing in computer science while focusing on computer systems. I have a passion for building things and making an impact. Right now
            I am especially interested in concurrency, systems programming, and databases.
            <br />
            <br />
            This summer (2026), I will be interning at{" "}
            <span style={{ fontWeight: 600 }}>
              <span style={{ color: "#4285F4" }}>G</span>
              <span style={{ color: "#EA4335" }}>o</span>
              <span style={{ color: "#FBBC05" }}>o</span>
              <span style={{ color: "#4285F4" }}>g</span>
              <span style={{ color: "#34A853" }}>l</span>
              <span style={{ color: "#EA4335" }}>e</span>
            </span>{" "}
            as a software engineer intern, where I will be working on a Chrome team. I will
            be using my skills in C++, systems programming, and concurrency to help improve performance critical infrastructure. 
            <br />
            <br />
            Last summer, I interned at{" "}
            <span style={{ color: "#96BF48", fontWeight: 600 }}>Shopify</span>{" "}
            as a software engineer intern, where I helped merchants turn their dreams into reality!  I primarily worked on the backend and data side, using technologies such as Rails, MySQL, Apache Kafka, and more.
            I know that is a big vague, but more details are available on my resume!
    
            <br />            
          </Typography>
        </Box>
      </Box>
      <Box>
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
          In the past I have also worked as a part time software developer and research assistant for different labs at the University of Toronto.
          You can check out more of my experiences and projects on my GitHub and LinkedIn, which you can find in the contact section!
          <br />
          <br />
          One of my favourite things about computer science, outside of learning and experimenting, is
          the community! I love attending hackathons such as HackMIT which I attended in 2025,
          and I always keep an eye out for cool opportunities to learn and grow such as
          RBC WTAP 2024! At WTAP, I was able to attend numerous fun sessions at RBC's Toronto office, and participated in discussions with RBC executives, leaders, and software engineers.
          These events helped me meet new people and learn new things, which I think is a great way to grow as a person and a developer.
          <br />
          <br />
          I love making new friends! If you want to connect with me, feel free to do
          so! You can find my information in the contact section!
        </Typography>
      </Box>
    </Container>
  );
}

export default About;
