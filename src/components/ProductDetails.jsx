import React, { useState } from "react";
import { Box, Container, Typography, Grid, Paper, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const ProductSection = styled(Box)(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "#ffffff",
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

const ProductTitle = styled(Typography)(({ theme }) => ({
  fontSize: "3rem",
  fontWeight: "700",
  marginBottom: theme.spacing(6),
  textAlign: "center",
  color: "#000000",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
}));

const ProductImage = styled("img")(({ theme }) => ({
  width: "70%",
  height: "auto",
  display: "block",
  margin: "0 auto",
  borderRadius: theme.spacing(2),
  marginBottom: theme.spacing(2),
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  transition: "transform 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
  },
}));

const ColorButton = styled(Button)(({ theme, selected }) => ({
  width: "40px",
  height: "40px",
  minWidth: "40px",
  borderRadius: "50%",
  margin: theme.spacing(1),
  border: selected ? "3px solid #000000" : "2px solid #000000",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.1)",
    border: "3px solid #000000",
  },
}));

const SizeButton = styled(Button)(({ theme, selected }) => ({
  minWidth: "60px",
  margin: theme.spacing(1),
  border: selected ? "2px solid #ff0000" : "1px solid #000000",
  color: selected ? "#ff0000" : "#000000",
  transition: "all 0.3s ease",
  "&:hover": {
    transform: "scale(1.05)",
    border: "2px solid #ff0000",
    color: "#ff0000",
  },
}));

const ProductDetails = () => {
  const [selectedColor, setSelectedColor] = useState("Black");
  const [selectedSize, setSelectedSize] = useState("M");
  const [currentImage, setCurrentImage] = useState(0);

  const product = {
    name: "XENO Lacost",
    price: 450,
    description:
      "A sophisticated classic shirt with modern design and premium quality fabric. Perfect for both formal and casual occasions.",
    images: ["/src/public/a1.jpg", "/src/public/a2.jpg", "/src/public/a3.jpg"],
    colors: ["Black", "White", "Beige"],
    sizes: ["S", "M", "L", "XL"],
  };

  const handleColorSelect = (color) => {
    setSelectedColor(color);
  };

  const handleSizeSelect = (size) => {
    setSelectedSize(size);
  };

  const handleImageChange = (index) => {
    setCurrentImage(index);
  };

  return (
    <ProductSection id="product">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <ProductTitle>{product.name}</ProductTitle>
        </motion.div>

        <Grid container spacing={6}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <ProductImage
                src={product.images[currentImage]}
                alt={product.name}
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  gap: 2,
                  mt: 2,
                }}
              >
                {product.images.map((image, index) => (
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    key={index}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Button
                      onClick={() => handleImageChange(index)}
                      sx={{
                        width: "60px",
                        height: "60px",
                        p: 0,
                        border:
                          currentImage === index
                            ? "2px solid #ff0000"
                            : "1px solid #ddd",
                        borderRadius: "8px",
                        overflow: "hidden",
                        transition: "all 0.3s ease",
                      }}
                    >
                      <img
                        src={image}
                        alt={`${product.name} ${index + 1}`}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                        }}
                      />
                    </Button>
                  </motion.div>
                ))}
              </Box>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                elevation={3}
                sx={{
                  p: 4,
                  borderRadius: "16px",
                  background:
                    "linear-gradient(145deg,rgb(255, 255, 255) 0%, #f8f8f8 100%)",
                }}
              >
                <Typography
                  variant="h4"
                  gutterBottom
                  sx={{ fontWeight: "600" }}
                >
                  {product.name}
                </Typography>
                <Typography
                  variant="h3"
                  color="secondary"
                  gutterBottom
                  sx={{ fontWeight: "700" }}
                >
                  E£{product.price}
                </Typography>
                <Typography
                  variant="body1"
                  paragraph
                  sx={{ color: "#666", lineHeight: 1.8 }}
                >
                  {product.description}
                </Typography>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ mt: 4, fontWeight: "600" }}
                >
                  Select Color:
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
                  {product.colors.map((color) => (
                    <ColorButton
                      key={color}
                      selected={selectedColor === color}
                      onClick={() => handleColorSelect(color)}
                      sx={{
                        backgroundColor:
                          color === "Black"
                            ? "#000000"
                            : color === "White"
                            ? "#ffffff"
                            : color === "Beige"
                            ? "#f5f5dc"
                            : "#ff0000",
                      }}
                    />
                  ))}
                </Box>

                <Typography
                  variant="h6"
                  gutterBottom
                  sx={{ fontWeight: "600" }}
                >
                  Select Size:
                </Typography>
                <Box sx={{ display: "flex", gap: 1, mb: 4 }}>
                  {product.sizes.map((size) => (
                    <SizeButton
                      key={size}
                      selected={selectedSize === size}
                      onClick={() => handleSizeSelect(size)}
                    >
                      {size}
                    </SizeButton>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </ProductSection>
  );
};

export default ProductDetails;
