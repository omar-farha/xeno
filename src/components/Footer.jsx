import React from "react";
import { Box, Container, Typography, IconButton } from "@mui/material";
import { styled } from "@mui/material/styles";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: theme.spacing(8, 0),
  position: "relative",
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    height: "1px",
    background: "linear-gradient(90deg, transparent, #ff0000, transparent)",
  },
}));

const FooterContent = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  gap: theme.spacing(4),
}));

const Logo = styled(Typography)(({ theme }) => ({
  fontSize: "2.5rem",
  fontWeight: "900",
  color: "#ffffff",
  textTransform: "uppercase",
  letterSpacing: "0.2em",
  background: "linear-gradient(45deg, #ffffff 30%, #ff0000 90%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
}));

const ContactInfo = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(2),
  "& svg": {
    color: "#ff0000",
  },
}));

const SocialLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(2),
  marginTop: theme.spacing(2),
}));

const SocialButton = styled(IconButton)(({ theme }) => ({
  color: "#ffffff",
  border: "1px solid rgba(255,255,255,0.2)",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#ff0000",
    borderColor: "#ff0000",
    transform: "translateY(-2px)",
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <Logo>XENO</Logo>
        <ContactInfo>
          <EmailIcon />
          <Typography>contact@xeno.com</Typography>
        </ContactInfo>
        <ContactInfo>
          <PhoneIcon />
          <Typography>+20 111 161 7471</Typography>
        </ContactInfo>
        <SocialLinks>
          <SocialButton>
            <InstagramIcon />
          </SocialButton>
          <SocialButton>
            <FacebookIcon />
          </SocialButton>
          <SocialButton>
            <TwitterIcon />
          </SocialButton>
        </SocialLinks>
        <Typography
          variant="body2"
          sx={{ mt: 2, color: "rgba(255,255,255,0.7)" }}
        >
          © 2024 XENO. All rights reserved.
        </Typography>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;
