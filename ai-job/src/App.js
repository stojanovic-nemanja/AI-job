import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import darkTheme from "./themes/darkTheme";
import MainContent from "./components/MainContent";
import CssBaseline from "@material-ui/core/CssBaseline";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      {" "}
      <CssBaseline />
      <MainContent />
    </ThemeProvider>
  );
}

export default App;
