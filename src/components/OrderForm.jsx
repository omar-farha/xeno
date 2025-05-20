import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Paper,
  Snackbar,
  Alert,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { motion } from "framer-motion";

const OrderSection = styled(motion(Box))(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "#f8f8f8",
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

const FormContainer = styled(motion(Paper))(({ theme }) => ({
  padding: theme.spacing(6),
  maxWidth: "700px",
  margin: "0 auto",
  borderRadius: "20px",
  background: "linear-gradient(145deg, #ffffff 0%, #f8f8f8 100%)",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
}));

const StyledTextField = styled(TextField)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  "& .MuiOutlinedInput-root": {
    borderRadius: "12px",
    transition: "all 0.3s ease",
    "&:hover fieldset": {
      borderColor: "#ff0000",
    },
    "&.Mui-focused fieldset": {
      borderColor: "#ff0000",
    },
  },
  "& .MuiInputLabel-root": {
    color: "#666",
  },
}));

const SubmitButton = styled(Button)(({ theme }) => ({
  backgroundColor: "#000000",
  color: "#ffffff",
  padding: theme.spacing(2, 6),
  borderRadius: "30px",
  fontSize: "1.1rem",
  fontWeight: "600",
  textTransform: "uppercase",
  letterSpacing: "0.1em",
  transition: "all 0.3s ease",
  "&:hover": {
    backgroundColor: "#ff0000",
    transform: "translateY(-2px)",
    boxShadow: "0 5px 15px rgba(255,0,0,0.3)",
  },
}));

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    color: "",
    size: "",
    quantity: 1,
  });

  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Math.max(1, Number(value)) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://cors-anywhere.herokuapp.com/https://script.google.com/macros/s/AKfycbzTvmHV4zem6TqgVkKmJDB-2sjAgLIf7EIAJbrP0et0wpThWxaDRG5Ox3TwE67FO7o/exec",
        {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        setSnackbar({
          open: true,
          message: "Order submitted successfully!",
          severity: "success",
        });

        setFormData({
          name: "",
          email: "",
          phone: "",
          address: "",
          color: "",
          size: "",
          quantity: 1,
        });
      } else {
        throw new Error("Network response was not ok.");
      }
    } catch (error) {
      setSnackbar({
        open: true,
        message: "Error submitting order. Please try again.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  return (
    <OrderSection
      id="order"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <Container>
        <Typography
          variant="h3"
          align="center"
          gutterBottom
          sx={{
            fontWeight: "700",
            mb: 6,
            textTransform: "uppercase",
            letterSpacing: "0.1em",
          }}
        >
          Place Your Order
        </Typography>

        <FormContainer
          elevation={3}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <form onSubmit={handleSubmit}>
            <StyledTextField
              fullWidth
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <StyledTextField
              fullWidth
              label="Email Address"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <StyledTextField
              fullWidth
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <StyledTextField
              fullWidth
              label="Delivery Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              multiline
              rows={3}
            />
            <StyledTextField
              fullWidth
              label="Selected Color"
              name="color"
              value={formData.color}
              onChange={handleChange}
              required
            />
            <StyledTextField
              fullWidth
              label="Selected Size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
            />
            <StyledTextField
              fullWidth
              label="Quantity"
              name="quantity"
              type="number"
              inputProps={{ min: 1 }}
              value={formData.quantity}
              onChange={handleChange}
              required
            />
            <Box sx={{ textAlign: "center", mt: 4 }}>
              <SubmitButton
                type="submit"
                variant="contained"
                disabled={loading}
              >
                {loading ? "Processing..." : "Place Order"}
              </SubmitButton>
            </Box>
          </form>
        </FormContainer>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </OrderSection>
  );
};

export default OrderForm;
