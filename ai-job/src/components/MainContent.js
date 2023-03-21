import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { motion } from "framer-motion";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    backgroundImage: `url(${process.env.PUBLIC_URL}/assets/ai_big.png)`,
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    flexDirection: "column",
    aspectRatio: "2046 / 1686",
  },
  mainText: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
  },
  bodyText: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
    fontSize: "1.2rem",
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
  },
  centerSection: {
    marginTop: "-35%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "800px",
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
              onClick={() =>
                window.open(
                  "https://5159732834495.gumroad.com/l/AI_Job",
                  "_blank",
                  "noopener,noreferrer"
                )
              }
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
