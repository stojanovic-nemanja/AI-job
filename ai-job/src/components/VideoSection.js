import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    backgroundColor: "#100911",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(2),
    flexDirection: "column",
  },
  mainText: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(8),
    textAlign: "center",
  },
  video: {
    marginBottom: theme.spacing(14),
    maxWidth: "100%",
    width: "1240px",
    height: "auto",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  newLine: {
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
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

function VideoSection(props) {
  const { id } = props;
  const classes = useStyles();

  const { ref, inView } = useInView({
    root: null,
    rootMargin: "500px 0px",
  });
  // text that also displays new line
  var text = "Job automation is coming. Are you ready?";

  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      // If the component is in view, trigger the animation
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={classes.mainSection} id={id}>
      <motion.div
        className={classes.mainSection}
        variants={container}
        initial="hidden"
        animate={controls}
        ref={ref}
      >
        <motion.div variants={item}>
          <Typography variant="h1" className={classes.mainText}>
            Job automation is coming. &nbsp;
            <div className={classes.newLine}></div>
            Are you ready?
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <video controls poster="assets/Elon.png" className={classes.video}>
            <source src="assets/Elon.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default VideoSection;
