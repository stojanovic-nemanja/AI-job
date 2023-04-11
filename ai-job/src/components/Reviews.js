import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
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
    padding: theme.spacing(3),
    flexDirection: "column",
  },
  body: {
    marginBottom: theme.spacing(10),
    maxWidth: "1400px",
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(4),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(1),
    },
  },
  mainText: {
    paddingRight: theme.spacing(10),
    maxWidth: "50%",
    fontSize: "1.5rem",
    [theme.breakpoints.down("md")]: {
      fontSize: "2.8vw",
      paddingRight: theme.spacing(2),
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "3.8vw",
      paddingRight: theme.spacing(2),
    },
  },
  img: {
    maxWidth: "50%",

    display: "flex",
    alignItems: "center",
  },
  title: {
    marginTop: theme.spacing(7),
    marginBottom: theme.spacing(12),
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      marginBottom: theme.spacing(6),
      marginTop: theme.spacing(3),
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

function Reviews(props) {
  const { id } = props;

  const classes = useStyles();
  const { ref, inView } = useInView({
    root: null,
    threshold: 0.2,
  });
  const controls = useAnimation();
  useEffect(() => {
    if (inView) {
      // If the component is in view, trigger the animation
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <section className={classes.mainSection} id={id} ref={ref}>
      <motion.div
        className="container"
        variants={container}
        initial="hidden"
        animate={controls}
      >
        <motion.div variants={item}>
          <Typography variant="h1" className={classes.title}>
            Quote from our speaker
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <div className={classes.body}>
            <Typography variant="h1" className={classes.mainText}>
              <i>
                "I'm honored to be one of the speakers. <br /> <br /> I have
                been itching to share what I've learned about AI and how it will
                impact our lives. <br /> <br /> Today, AI is developing at an
                exponential rate, with ChatGPT, MidJourney, and many other AI
                startups. <br /> <br /> I will be sharing how we can prepare for
                the future of AI. You will be seeing me in the community as
                well."
              </i>{" "}
              <br /> <br /> - Andrey, Software Engineer at Microsoft
            </Typography>
            <img
              src="assets/ChatGPT.png"
              alt="ChatGPT"
              className={classes.img}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Reviews;
