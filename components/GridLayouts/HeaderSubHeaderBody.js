import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import {sectionHeaderText, sectionSubHeaderText} from "../../assets/jss/coreStyles";

const useStyles = makeStyles(theme => ({
    sectionHeaderText,
    sectionSubHeaderText,
    container: {
        maxWidth: "40%",
        margin: "0 auto",
    }
}))

export default function HeaderSubHeaderBody(props) {
    const {header, subHeader, children} = props
    const classes = useStyles()

    return (
        <Grid
            container
            direction={"column"}
            justify={"center"}
            alignItems={"stretch"}
            className={classes.container}
        >
            <Grid item>
                <h1 className={classes.sectionHeaderText}>
                    {header}
                </h1>
            </Grid>
            <Grid item>
                <h2 className={classes.sectionSubHeaderText}>
                    {subHeader}
                </h2>
            </Grid>
            <Grid item>
                {children}
            </Grid>
        </Grid>
    )
}

HeaderSubHeaderBody.propTypes = {
    children: PropTypes.node,
    header: PropTypes.string,
    subHeader: PropTypes.string,
}

