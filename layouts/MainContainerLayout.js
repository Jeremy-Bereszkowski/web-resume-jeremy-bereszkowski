import React from "react";

import {makeStyles} from "@material-ui/core/styles"

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

const useStyles = makeStyles({
    section: {
        width: "100%",
        background: grayColor[14],
        margin: "2vh 0 0 0",
    },
})

export default function MainContainerLayout(props) {
    const classes = useStyles()
    const {children} = props

    return (
        <div className={classes.section}>
            {children}
        </div>
    )
}
