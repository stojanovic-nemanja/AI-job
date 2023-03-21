import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "./themes/darkTheme";
import MainContent from "./components/MainContent";
import Header from "./components/Header";
import VideoSection from "./components/VideoSection";
import CssBaseline from "@material-ui/core/CssBaseline";
import Features from "./components/Features";
import Reviews from "./components/Reviews";
import Footer from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {" "}
      <CssBaseline />
      <Header />
      <MainContent />
      <VideoSection id="video-section" />
      <Features id="features" />
      <Reviews id="reviews" />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
