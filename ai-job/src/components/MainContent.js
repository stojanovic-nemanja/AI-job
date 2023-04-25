import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { motion } from "framer-motion";
import ReactPixel from "react-facebook-pixel";

const options = {
  autoConfig: true, // set pixel's autoConfig. More info: https://developers.facebook.com/docs/facebook-pixel/advanced/
  debug: false, // enable logs
};
ReactPixel.init("246426464555298", undefined, options);

ReactPixel.pageView(); // For tracking page view

const useStyles = makeStyles((theme) => ({
  mainSection: {
    overflow: "hidden",
    position: "relative",
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(3),
    flexDirection: "column",
    aspectRatio: "2046 / 1686",
    [theme.breakpoints.down("xs")]: {
      aspectRatio: "633 / 1471",
    },
  },
  mainSectionBackgroundImage: {
    opacity: 1,
    display: "block",
    [theme.breakpoints.down("md")]: {
      opacity: 0.3,
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "auto",
  },
  mainSectionBackgroundImage2: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "auto",
    opacity: 0.3,
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.down("xs")]: {
      display: "block",
    },
  },

  mainText: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  bodyText: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  buttonMiddle: {
    textAlign: "center",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonClass: {
    height: "60px",
    width: "250px",
    fontSize: "1.2rem",
    [theme.breakpoints.down("lg")]: {
      height: "55px",
      width: "220px",
      fontSize: "1.2rem",
    },
    [theme.breakpoints.down("md")]: {
      height: "50px",
      width: "200px",
      fontSize: "1.0rem",
    },
    [theme.breakpoints.down("sm")]: {
      height: "45px",
      width: "170px",
      fontSize: "1.0rem",
    },
    [theme.breakpoints.down("xs")]: {
      height: "40px",
      width: "150px",
      fontSize: "0.9rem",
    },
  },
  centerSection: {
    position: "relative",
    display: "flex",
    flexDirection: "column",
    maxWidth: "40vw",
    marginTop: "15vw",
    [theme.breakpoints.down("lg")]: {
      maxWidth: "50vw",
    },
    [theme.breakpoints.down("md")]: {
      maxWidth: "70vw",
    },
    [theme.breakpoints.down("sm")]: {
      maxWidth: "90vw",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "40vw",
      maxWidth: "80vw",
    },
  },
}));

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

function MainContent() {
  const classes = useStyles();

  return (
    <section className={classes.mainSection}>
      <img
        className={classes.mainSectionBackgroundImage}
        alt=""
        src="/assets/ai_big.png"
      />
      <img
        className={classes.mainSectionBackgroundImage2}
        alt=""
        src="/assets/ai_small.png"
      />
      <div className={classes.centerSection}>
        <motion.div
          className="container"
          variants={container}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={item}>
            <Typography variant="h1" className={classes.mainText}>
              AI is coming for your job: Prepare yourself now with our community
            </Typography>
          </motion.div>

          <motion.div variants={item}>
            <Typography variant="body1" className={classes.bodyText}>
              You're about to be replaced. We're here to help you navigate the
              changing job landscape in the age of AI. Our community provides
              news, resources, insights, and support to help.
            </Typography>
          </motion.div>
          <motion.div variants={item} className={classes.buttonMiddle}>
            <Button
              variant="contained"
              color="secondary"
              className={classes.buttonClass}
              onClick={() => {
                ReactPixel.track("Button");
                window.open(
                  "https://5159732834495.gumroad.com/l/AI_Job",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
            >
              Join us now!
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

export default MainContent;
