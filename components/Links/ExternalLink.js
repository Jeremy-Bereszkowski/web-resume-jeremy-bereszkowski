import React from 'react'
import PropTypes from 'prop-types'

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";

import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    spacing: {
        margin: "0 4px 0 0",
    },
    footerBrand: {
        color: "white",
        margin: "0",
        "&:hover": {
            color: Colours.primary,
        }
    },
})

export default function DataLink(props) {
    const {data, label, mobile, mail} = props
    const classes = useStyles()

    const href = mail ? "mailto:"+data : mobile ? "tel:"+data : data

    return (
        <Grid
            container
            direction={"row"}
            justify={"flex-end"}
            alignItems={"center"}
        >
            <Grid item>
                <h4 className={classes.spacing}>
                    {label}
                </h4>
            </Grid>
            <Grid item>
                <a href={href}>
                    <h4 className={classes.footerBrand}>
                        {data}
                    </h4>
                </a>
            </Grid>
        </Grid>
    )
}

DataLink.defaultProps = {
    mobile: false,
    mail: false,
}

DataLink.propTypes = {
    data: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    href: PropTypes.string.isRequired,
    mobile: PropTypes.bool,
    mail: PropTypes.bool,
}
