import { createTheme } from "@material-ui/core/styles";

const darkTheme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#64b5f6",
    },
    secondary: {
      main: "#ff4081",
    },
    background: {
      paper: "#424242",
      default: "#303030",
    },
    text: {
      primary: "#fff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.5,
      marginBottom: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.5,
      marginBottom: "1rem",
    },
  },
});

export default darkTheme;
