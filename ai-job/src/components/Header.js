import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useScrollTrigger } from "@material-ui/core";
import { Link } from "react-scroll";

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true, //Whether or not there is a little delay when the user is scrolling.
    threshold: 0, //0 means trigger the event listener as soon as the user starts scrolling.
    //Default to 100 which means scrolling further down before the even listener triggers. It controls how far the user has to start scrolling to trigger the effect.
  });
  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0, //0 means flat i.e. elevation of zero. 4 means elevation of 4 to show the floating state.
  });
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#110912",
  },
  toolbar: {
    justifyContent: "center",
  },
  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "1400px",
  },
  left1: {
    display: "flex",
    width: "40%",
  },
  center1: {
    display: "flex",
    width: "40%",
    // space elements inside by 10px
    "& > *": {
      marginLeft: theme.spacing(1),
    },
  },
  right1: {
    display: "flex",
    width: "20%",
  },
}));

export default function Header() {
  const handleVideoSection = () => {
    console.log("Bla123");
    const element = document.getElementById("video-section");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleFeatures = () => {
    const element = document.getElementById("features");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReviews = () => {
    const element = document.getElementById("reviews");
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <div className={classes.center}>
              <div className={classes.left1}>
                <Typography
                  variant="h6"
                  className={classes.title}
                  color="secondary"
                >
                  AI Society
                </Typography>
              </div>
              <div className={classes.center1}>
                <Link to="video-section" smooth={true} duration={500}>
                  <Button color="secondary">Video</Button>
                </Link>
                <Button color="secondary" onClick={handleFeatures}>
                  Features
                </Button>
                <Button color="secondary" onClick={handleReviews}>
                  Quote
                </Button>
              </div>
              <div className={classes.right1}>
                <Button
                  color="secondary"
                  variant="outlined"
                  onClick={() =>
                    window.open(
                      "https://5159732834495.gumroad.com/l/AI_Job",
                      "_blank",
                      "noopener,noreferrer"
                    )
                  }
                >
                  JOIN THE COMMUNITY
                </Button>
              </div>
            </div>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </div>
  );
}
