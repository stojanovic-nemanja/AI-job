import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import { useScrollTrigger } from "@material-ui/core";
import Box from "@material-ui/core/Box";
import { Link } from "react-scroll";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

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
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    width: "40%",
    // space elements inside by 10px
    "& > *": {
      marginLeft: theme.spacing(1),
    },
  },
  right1: {
    display: "flex",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    width: "20%",
  },
  rightMobile1: {
    display: "none",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
    },
    justifyContent: "right",
    alignItems: "right",
    width: "60%",
  },
  menuItem: {
    color: "white",
    marginBottom: theme.spacing(0),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(0),
    paddingTop: theme.spacing(1),
  },
  menuItemCommunity: {
    marginBottom: theme.spacing(0),
    paddingBottom: theme.spacing(1),
    marginTop: theme.spacing(0),
    paddingTop: theme.spacing(1),
    backgroundColor: "#ff4081",
  },
}));

export default function Header() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleVideoSection = () => {
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
    <Box className={classes.root}>
      <ElevationScroll>
        <AppBar position="fixed" className={classes.appBar}>
          <Toolbar className={classes.toolbar}>
            <Box className={classes.center}>
              <Box className={classes.left1}>
                <Typography
                  variant="h6"
                  className={classes.title}
                  color="secondary"
                >
                  AI Society
                </Typography>
              </Box>
              <Box className={classes.center1}>
                <Button color="secondary" onClick={handleVideoSection}>
                  Video
                </Button>
                <Button color="secondary" onClick={handleFeatures}>
                  Features
                </Button>
                <Button color="secondary" onClick={handleReviews}>
                  Quote
                </Button>
              </Box>
              <Box className={classes.right1}>
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
              </Box>
              <Box className={classes.rightMobile1}>
                <IconButton onClick={handleOpenNavMenu}>
                  <MenuIcon color="secondary" />
                </IconButton>

                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  <Link to="video-section" smooth={true} duration={500}>
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      className={classes.menuItem}
                    >
                      Video
                    </MenuItem>
                  </Link>
                  <Link to="features" smooth={true} duration={500}>
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      className={classes.menuItem}
                    >
                      Features
                    </MenuItem>
                  </Link>
                  <Link to="reviews" smooth={true} duration={500}>
                    <MenuItem
                      onClick={handleCloseNavMenu}
                      className={classes.menuItem}
                    >
                      Reviews
                    </MenuItem>
                  </Link>

                  <MenuItem
                    onClick={() => {
                      handleCloseNavMenu();
                      window.open(
                        "https://5159732834495.gumroad.com/l/AI_Job",
                        "_blank",
                        "noopener,noreferrer"
                      );
                    }}
                    className={classes.menuItemCommunity}
                  >
                    Join the community
                  </MenuItem>
                </Menu>
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
    </Box>
  );
}
