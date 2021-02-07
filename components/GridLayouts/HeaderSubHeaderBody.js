import React from 'react'
import PropTypes from "prop-types"
import classNames from "classnames"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";

import {sectionHeaderText, sectionSubHeaderText} from "assets/jss/coreStyles";
import Colours from "../../assets/strings/colours";

const useStyles = makeStyles(theme => ({
    sectionHeaderText,
    sectionSubHeaderText,
    container: {
        maxWidth: "1600px",
        margin: "0 auto",
    },
    light: {
        color: "white"
    },
    green: {
        color: Colours.contrast,
    },
    ternary: {
        color: Colours.ternary,
    },
    gold: {
        color: Colours.quadry,
    },
}))

export default function HeaderSubHeaderBody(props) {
    const {header, subHeader, headerColor, children} = props
    const classes = useStyles()

    /*const headerClass = headerColor === "light" ? classNames(classes.sectionHeaderText, classes.light) : headerColor === "green" ? classNames(classes.sectionHeaderText, classes.green) : headerColor === "ternary" ? classNames(classes.sectionHeaderText, classes.ternary) : classes.sectionHeaderText*/
    /*const subHeaderClass = headerColor === "light" ? classNames(classes.sectionSubHeaderText, classes.light) : headerColor === "green" ? classNames(classes.sectionSubHeaderText, classes.green) : headerColor === "ternary" ? classNames(classes.sectionSubHeaderText, classes.ternary) : classes.sectionSubHeaderText*/

    let headerClass = classes.sectionHeaderText
    let subHeaderClass = classes.sectionSubHeaderText

    switch (headerColor) {
        case "light":
            headerClass = classNames(classes.sectionHeaderText, classes.light)
            subHeaderClass = classNames(classes.sectionSubHeaderText, classes.light)
            break;
        case "green":
            headerClass = classNames(classes.sectionHeaderText, classes.green)
            subHeaderClass = classNames(classes.sectionSubHeaderText, classes.green)
            break;
        case "ternary":
            headerClass = classNames(classes.sectionHeaderText, classes.ternary)
            subHeaderClass = classNames(classes.sectionSubHeaderText, classes.ternary)
            break;
        case "gold":
            headerClass = classNames(classes.sectionHeaderText, classes.gold)
            subHeaderClass = classNames(classes.sectionSubHeaderText, classes.gold)
            break;
    }

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"stretch"}
            className={classes.container}
        >
            <Grid item>
                <h1 className={headerClass}>
                    {header}
                </h1>
            </Grid>
            <Grid item>
                <h2 className={subHeaderClass}>
                    {subHeader}
                </h2>
            </Grid>
            <Grid item>
                <br/>
            </Grid>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    )
}

HeaderSubHeaderBody.defaultProp = {
    headerColor: "dark",
}

HeaderSubHeaderBody.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    subHeader: PropTypes.string,
    headerColor: PropTypes.oneOf([
        "light",
        "dark",
        "green",
        "ternary"
    ])
}

