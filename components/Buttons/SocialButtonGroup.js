import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";

import FooterButton from "./FooterButton";

const useStyles = makeStyles(theme => ({}))

export default function SocialButtonGroup(props) {
    const classes = useStyles()

    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignContent={"center"}
            alignItems={"center"}
        >
            <Grid item>
                <FooterButton
                    href="https://www.linkedin.com/in/jeremy-bereszkowski-999ba016a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in"/>
                </FooterButton>
            </Grid>
            <Grid item>
                <FooterButton
                    href="https://github.com/s3539822"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"/>
                </FooterButton>
            </Grid>
        </Grid>
    )
}
