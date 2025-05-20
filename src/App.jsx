import React from "react";
import { ThemeProvider, createTheme } from "@mui/material";
import { CacheProvider } from "@emotion/react";
import createCache from "@emotion/cache";
import rtlPlugin from "stylis-plugin-rtl";
import { prefixer } from "stylis";
import Hero from "./components/Hero";
import ProductDetails from "./components/ProductDetails";
import OrderForm from "./components/OrderForm";
import Footer from "./components/Footer";

const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

const theme = createTheme({
  direction: "rtl",
  palette: {
    primary: {
      main: "#000000",
    },
    secondary: {
      main: "#ff0000",
    },
    background: {
      default: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Cairo, sans-serif",
  },
});

function App() {
  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <div className="app">
          {/* <Hero /> */}
          <ProductDetails />
          <OrderForm />
          <Footer />
        </div>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
