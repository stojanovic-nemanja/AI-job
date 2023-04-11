import { createTheme } from "@material-ui/core/styles";
import createBreakpoints from "@material-ui/core/styles/createBreakpoints";

const breakpoints = createBreakpoints({});

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
      default: "#1F1B22",
    },
    text: {
      primary: "#fff",
      secondary: "#bdbdbd",
    },
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontSize: "2.5vw",
      [breakpoints.down("lg")]: {
        fontSize: "3.2vw",
      },
      [breakpoints.down("md")]: {
        fontSize: "4.0vw",
      },
      [breakpoints.down("sm")]: {
        fontSize: "5.4vw",
      },
      [breakpoints.down("xs")]: {
        fontSize: "9.5vw",
      },

      fontWeight: 500,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 500,
      marginBottom: "1rem",
      [breakpoints.down("xs")]: {
        fontSize: "9.5vw",
      },
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 500,
      marginBottom: "1rem",
    },
    body1: {
      fontSize: "1.0vw",
      [breakpoints.down("lg")]: {
        fontSize: "1.25vw",
      },
      [breakpoints.down("md")]: {
        fontSize: "1.7vw",
      },
      [breakpoints.down("sm")]: {
        fontSize: "3vw",
      },
      [breakpoints.down("xs")]: {
        fontSize: "5.0vw",
      },
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
