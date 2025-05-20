import React from "react";
import { Box, Typography, Container, Grid, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const HeroContainer = styled(Box)(({ theme }) => ({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  background: "linear-gradient(135deg, #000000 0%, #1a1a1a 100%)",
  color: "#ffffff",
  padding: theme.spacing(4),
}));

const ContentBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center",
  },
}));

const VideoScrollContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  overflowX: "auto",
  gap: theme.spacing(3),
  scrollSnapType: "x mandatory",
  "&::-webkit-scrollbar": { height: "6px" },
  "&::-webkit-scrollbar-thumb": {
    backgroundColor: "#ff0000",
    borderRadius: "4px",
  },
  scrollBehavior: "smooth",
}));

const VideoItem = styled(Box)(() => ({
  minWidth: "100%",
  height: "80vh",
  borderRadius: "16px",
  overflow: "hidden",
  scrollSnapAlign: "start",
  boxShadow: "0 6px 18px rgba(0,0,0,0.5)",
}));

const VideoPlayer = styled("video")(() => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
}));

const videos = [
  {
    id: 1,
    src: "/src/public/WhatsApp Video 2025-05-20 at 17.15.39_b1a91e9d.mp4",
  },
];

const Hero = () => {
  return (
    <HeroContainer
      as={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <Container maxWidth="xl">
        <Grid container alignItems="center" spacing={5}>
          <Grid item xs={12} md={6}>
            <ContentBox
              as={motion.div}
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img
                src="/src/public/xeno logo.png"
                alt="XENO Logo"
                style={{
                  width: "220px",
                  marginBottom: "20px",
                  filter: "drop-shadow(0 4px 16px rgba(255,0,0,0.25))",
                }}
              />
              <Typography variant="h3" gutterBottom sx={{ fontWeight: 700 }}>
                Premium Quality Awaits
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ mb: 3, fontSize: "1.15rem" }}
              >
                Discover our exclusive collection of fashion for every style.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  backgroundColor: "#ff0000",
                  borderRadius: "30px",
                  padding: "12px 32px",
                  fontSize: "1rem",
                  "&:hover": { backgroundColor: "#d90000" },
                }}
                href="#product"
                as={motion.a}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                تسوق الآن
              </Button>
            </ContentBox>
          </Grid>

          <Grid item xs={12} md={6}>
            <VideoScrollContainer
              as={motion.div}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {videos.map((video) => (
                <VideoItem key={video.id}>
                  <VideoPlayer autoPlay loop muted playsInline>
                    <source src={video.src} type="video/mp4" />
                  </VideoPlayer>
                </VideoItem>
              ))}
            </VideoScrollContainer>
          </Grid>
        </Grid>
      </Container>
    </HeroContainer>
  );
};

export default Hero;
