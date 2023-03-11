import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import PersonIcon from "@material-ui/icons/Person";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

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
  iconWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  },
  icon: {
    marginRight: theme.spacing(1),
  },
  centerSection: {
    marginTop: "-500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "45%",
  },
}));

function MainContent() {
  const classes = useStyles();

  return (
    <section className={classes.mainSection}>
      <div className={classes.centerSection}>
        <Typography variant="h1" className={classes.mainText}>
          AI Is Coming For Your Job: Prepare Yourself Now with Our Community
        </Typography>
        <Typography variant="body1" className={classes.mainText}>
          AI is coming for your job. Copywriting, programming, designing and
          more. We're here to help you navigate the changing job landscape in
          the age of AI. Our community provides news, resources, insights, and
          support to help.
        </Typography>
        <Button variant="contained" color="secondary">
          Join us now!
        </Button>
      </div>
    </section>
  );
}

export default MainContent;
