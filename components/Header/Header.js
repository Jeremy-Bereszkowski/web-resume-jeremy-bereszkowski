import React from "react";
import classNames from "classnames";

import {Grid} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";

import SocialButtonGroup from "../Buttons/SocialButtonGroup";

import Colours from "../../assets/strings/colours";
import {hexToRgb} from "../../assets/jss/hexToRgb";

const useStyles = makeStyles({
  appBar: {
    display: "flex",
    border: "0",
    borderRadius: "3px",
    padding: "0.625rem 0",
    marginBottom: "20px",
    color: Colours.grayColor[15],
    width: "100%",
    backgroundColor: Colours.white,
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
    position: "fixed"
  },
  container: {
    paddingRight: "15px",
    paddingLeft: "15px",
    marginRight: "4%",
    marginLeft: "4%",
    width: "100%",
    minHeight: "50px",
  },
  transparent: {
    backgroundColor: "transparent !important",
    boxShadow: "none",
    paddingTop: "25px",
    color: Colours.white
  },
});

export default function Header() {
  const classes = useStyles();
  const appBarClasses = classNames(classes.appBar, classes.transparent);

  return (
      <AppBar className={appBarClasses}>
        <Grid
            container
            direction={"row"}
            justify={"flex-end"}
            alignItems={"center"}
            className={classes.container}
        >
          <Grid item>
            <SocialButtonGroup/>
          </Grid>
        </Grid>
      </AppBar>
  );
}
