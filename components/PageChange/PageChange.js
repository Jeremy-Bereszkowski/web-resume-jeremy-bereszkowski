import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";

import Colours from "../../assets/strings/colours";

const useStyles = makeStyles({
  progress: {
    color: Colours.info,
    width: "6rem !important",
    height: "6rem !important"
  },
  wrapperDiv: {
    margin: "100px auto",
    padding: "0px",
    maxWidth: "360px",
    textAlign: "center",
    position: "relative",
    zIndex: "9999",
    top: "0"
  },
  iconWrapper: {
    display: "block"
  },
  title: {
    color: Colours.grayColor[1],
    textDecoration: "none",
    fontWeight: "700",
    marginTop: "30px",
    marginBottom: "25px",
    minHeight: "32px",
  }
});

export default function PageChange(props) {
  const classes = useStyles();
  return (
      <div>
        <div className={classes.wrapperDiv}>
          <div className={classes.iconWrapper}>
            <CircularProgress className={classes.progress} />
          </div>
          <h4 className={classes.title}>
            Loading...
          </h4>
        </div>
      </div>
  );
}
