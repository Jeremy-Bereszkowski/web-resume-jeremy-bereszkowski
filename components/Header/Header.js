/*
* Header Core Component
* Defines header bar and on-scroll transition
* */

import React from "react";
import classNames from "classnames";

import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import SocialButtonGroup from "../Buttons/SocialButtonGroup";

import {
  defaultFont, grayColor,
  hexToRgb, whiteColor,
} from "assets/jss/nextjs-material-kit-pro";
import Colours from "assets/strings/colours";
import HeaderData from "assets/data/components/header";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: grayColor[15],
    width: "100%",
    backgroundColor: whiteColor,
    boxShadow:
        "0 4px 18px 0px rgba(" +
        hexToRgb(Colours.black) +
        ", 0.12), 0 7px 10px -5px rgba(" +
        hexToRgb(Colours.black) +
        ", 0.15)",
    transition: "all 150ms ease 0s",
    alignItems: "center",
    flexFlow: "row nowrap",
    justifyContent: "flex-start",
    position: "relative"
  },
  fixed: {
    position: "fixed"
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "4%",
    marginLeft: "4%",
    width: "100%",
    minHeight: "50px",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
    flexWrap: "nowrap"
  },
  title: {
    letterSpacing: "unset",
    "&,& a": {
      ...defaultFont,
      minWidth: "unset",
      lineHeight: "30px",
      fontSize: "18px",
      borderRadius: "3px",
      textTransform: "none",
      whiteSpace: "nowrap",
      color: "inherit",
    },
    color: "white",
    marginTop: "14px!important",
    marginBottom: "7px!important",
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: whiteColor
  },
  dark: {
    color: whiteColor,
    backgroundColor: grayColor[9] + " !important",
    boxShadow:
        "0 4px 20px 0px rgba(" +
        hexToRgb(Colours.black) +
        ", 0.14), 0 7px 12px -5px rgba(" +
        hexToRgb(grayColor[9]) +
        ", 0.46)"
  },
  invisible: {
    color: "transparent",
  },
});

export default function Header() {
  const classes = useStyles();
  const [brandClasses, setBrandClasses] = React.useState(classNames(classes.title, classes.invisible))
  const [transparent, setTransparent] = React.useState(true)
  const color = "transparent"
  const changeColorOnScroll = {
    height: 25,
    color: "dark"
  }

  React.useEffect(() => {
    if (changeColorOnScroll) {
      window.addEventListener("scroll", headerColorChange);
    }
    return function cleanup() {
      if (changeColorOnScroll) {
        window.removeEventListener("scroll", headerColorChange);
      }
    };
  });

  const headerColorChange = () => {
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll.height) {
      document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[color]);
      document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[changeColorOnScroll.color]);
      setBrandClasses(classes.title)
      setTransparent(false)
    } else {
      document.body
          .getElementsByTagName("header")[0]
          .classList.add(classes[color]);
      document.body
          .getElementsByTagName("header")[0]
          .classList.remove(classes[changeColorOnScroll.color]);
      setBrandClasses(classNames(classes.title, classes.invisible))
      setTransparent(true)
    }
  };

  const appBarClasses = classNames({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.fixed]: true
  });

  return (
      <AppBar className={appBarClasses}>
        <div className={classes.container}>
          {
            transparent ? (
                <Grid
                    container
                    direction={"row"}
                    justify={"flex-end"}
                    alignItems={"center"}
                >
                  <Grid item>
                    <SocialButtonGroup transparent={transparent}/>
                  </Grid>
                </Grid>
            ) : (
                <Grid
                    container
                    direction={"row"}
                    justify={"space-between"}
                    alignItems={"flex-start"}
                >
                  <Grid item>
                    <h2 className={brandClasses}>
                      {HeaderData.brand}
                    </h2>
                  </Grid>
                  <Grid item>
                    <SocialButtonGroup transparent={transparent}/>
                  </Grid>
                </Grid>
            )
          }
        </div>
      </AppBar>
  );
}
