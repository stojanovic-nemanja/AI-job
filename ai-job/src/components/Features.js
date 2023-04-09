import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import AnnouncementIcon from "@material-ui/icons/Announcement";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    backgroundColor: "#000000",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    flexDirection: "column",
  },
  mainText: {
    marginBottom: theme.spacing(4),
    textAlign: "center",
    maxWidth: "600px",
    // change size of text
    fontSize: "2.5rem",
  },
  aboveText: {
    marginTop: theme.spacing(6),
    marginBottom: theme.spacing(2),
    color: "#00EBAA",
    maxWidth: "800px",
  },
  par1: {
    textAlign: "center",
    marginBottom: theme.spacing(6),
    maxWidth: "780px",
    color: "#808080",
  },
  bottom: {
    marginBottom: theme.spacing(4),
    maxWidth: "1400px",
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },

    padding: theme.spacing(4),
  },
  botEl: {
    maxWidth: "33%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
      marginBottom: theme.spacing(5),
    },

    marginRight: theme.spacing(4),
  },
  iconStyle: {
    width: 40,
    height: 40,
    color: "#00EBAA",
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(0),
    },
  },
  titleEl: {
    fontSize: "1.4rem",
  },
  textEl: {
    fontSize: "1rem",
    color: "#808080",
  },
  mainTextComp: {
    marginBottom: theme.spacing(2),
    textAlign: "center",
    maxWidth: "600px",
    // change size of text
    fontSize: "2.1rem",
  },
  par1Comp: {
    textAlign: "center",
    marginBottom: theme.spacing(6),
    maxWidth: "500px",
    color: "#808080",
  },
  logos: {
    maxWidth: "1400px",
    marginBottom: theme.spacing(7),
  },
  logo: {
    maxWidth: "33%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "100%",
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

function Features(props) {
  const { id } = props;

  const classes = useStyles();

  const { ref, inView } = useInView({
    root: null,
    rootMargin: "500px 0px",
  });
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
          <Typography variant="h6" className={classes.aboveText}>
            Our vision
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <Typography variant="h2" className={classes.mainText}>
            We want to equip you with the skills to thrive in the age of AI
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <Typography variant="h6" className={classes.par1}>
            We are building a community that will help you get there. Our
            community helps you navigate the changing job landscape in the age
            of AI, providing news, resources, insights, and support to help you
            stay ahead of the curve.
          </Typography>
        </motion.div>
        <motion.div className={classes.bottom} variants={item}>
          <div className={classes.botEl}>
            <NotificationsActiveIcon className={classes.iconStyle} /> <br />
            <Typography className={classes.titleEl}>News</Typography>
            <Typography className={classes.textEl}>
              We offer regular updates and analysis on the latest advancements,
              trends, and impact of AI in various industries. Our curated
              content provides members with valuable insights to help them stay
              informed and make informed decisions about their career or
              business.
            </Typography>
          </div>
          <div className={classes.botEl}>
            <AnnouncementIcon className={classes.iconStyle} /> <br />
            <Typography className={classes.titleEl}>Resources</Typography>
            <Typography className={classes.textEl}>
              The resources section of our community offers a variety of tools,
              tutorials, and guides to help members learn new skills, stay
              updated on the latest technologies and trends, and prepare for the
              impact of AI on their industries.
            </Typography>
          </div>
          <div className={classes.botEl}>
            <AccountCircleIcon className={classes.iconStyle} /> <br />
            <Typography className={classes.titleEl}>Expert Talks</Typography>
            <Typography className={classes.textEl}>
              Our community offers weekly expert speaker series from industry
              leaders such as Microsoft, providing members with valuable
              insights into the future of work and AI, and access to exclusive
              knowledge and resources.
            </Typography>
          </div>
        </motion.div>
        <motion.div variants={item}>
          <Typography variant="h2" className={classes.mainTextComp}>
            Speakers that worked at companies
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <Typography variant="h6" className={classes.par1Comp}>
            Professionals and experts from the field give talks on the latest
            trends and technologies in AI.
          </Typography>
        </motion.div>
        <motion.div variants={item}>
          <div className={classes.logos}>
            <img
              src="assets/microsoft_logo.png"
              alt="logo"
              width="440"
              height="auto"
              className={classes.logo}
            />
            <img
              src="assets/hycu.png"
              alt="logo"
              width="440"
              height="auto"
              className={classes.logo}
            />
            <img
              src="assets/hpe.png"
              alt="logo"
              width="440"
              height="auto"
              className={classes.logo}
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Features;
