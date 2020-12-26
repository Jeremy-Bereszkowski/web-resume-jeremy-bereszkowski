import React from "react";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import Grid from "@material-ui/core/Grid";

import Parallax from "components/Parallax/Parallax";

import {whiteColor} from "assets/jss/nextjs-material-kit-pro";
import {greenHrThick, parallaxHeaderText} from "assets/jss/coreStyles";
import {parallaxSubHeaderText} from "assets/jss/coreStyles";
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    container: {
        color: whiteColor,
        paddingRight: "15px",
        paddingLeft: "15px",
        paddingBottom: "25px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "90vw",
        maxWidth: "1200px",
        zIndex: "2",
        border: "solid 2px " + Colours.primary
    },
    title: {
        ...parallaxHeaderText,
        marginTop: "30px",
        minHeight: "32px",
    },
    titleSubHeading: {
        ...parallaxSubHeaderText,
        margin: "0",
    },
    greenHr: {
        ...greenHrThick,
    },
})

export default function ParallaxLayout(props) {
    const classes = useStyles()

    const {children, image, header, body} = props

    return (
        <>
            <Parallax image={image} filter="dark">
                <div className={classes.container}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignContent={"center"}
                    >
                        <Grid >
                            <h1 className={classes.title}>{header}</h1>
                        </Grid>
                    </Grid>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignContent={"stretch"}
                    >
                        <Grid item>
                            <hr size={30} className={classes.greenHr}/>
                        </Grid>
                        <Grid item>
                            <h4 className={classes.titleSubHeading}>
                                {body}
                            </h4>
                        </Grid>
                    </Grid>
                </div>
            </Parallax>
            {children}
        </>
    )
}

ParallaxLayout.propTypes = {
    image: PropTypes.string,
    header: PropTypes.string,
    body: PropTypes.string,
}
