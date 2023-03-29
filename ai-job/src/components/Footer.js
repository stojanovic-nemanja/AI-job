import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  mainSection: {
    backgroundColor: "#1F1B22",
    backgroundPosition: "center center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: theme.spacing(3),
    flexDirection: "column",
  },
}));

function Reviews() {
  const classes = useStyles();

  return (
    <section className={classes.mainSection}>
      AI Society Copyright © 2023.
    </section>
  );
}

export default Reviews;
