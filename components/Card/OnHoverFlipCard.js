import React from 'react'
import PropTypes from "prop-types"
import ReactCardFlip from "react-card-flip";
import useHover from "@react-hook/hover";
import { useInView } from 'react-intersection-observer';

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"

import Colours from "assets/strings/colours";

const useStyles = makeStyles(theme => ({
    card: {
        width: "260px",
        height: "260px",
        borderRadius: "4px",
        backgroundColor: Colours.secondary,
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
    },
    container: {
        height: "100%",
        width: "100%"
    }
}))

export default function OnHoverFlipCard(props) {
    const {frontImage, backText, flipDirection} = props
    const classes = useStyles()

    const [ref, inView] = useInView({
        triggerOnce: false,
        threshold: .8,
    });

    const target = React.useRef([])
    const isHovering = useHover(target, {enterDelay: 250, leaveDelay: 100})

    const flipped = isHovering ? false : inView

    return (
        <div ref={target}>
            <div style={{margin: "10px"}} ref={ref}>
                <ReactCardFlip  isFlipped={flipped} flipDirection={flipDirection}>
                    <div className={classes.card}>
                        <img src={frontImage} style={{width: "80%", height: "80%", margin: "10% 10%"}}/>
                    </div>

                    <div className={classes.card}>
                        <Grid
                            container
                            direction={"column"}
                            justify={"center"}
                            alignItems={"center"}
                            className={classes.container}
                        >
                            <Grid item>
                                <h2 style={{color: "black"}}>
                                    <b>
                                        {backText}
                                    </b>
                                </h2>
                            </Grid>
                        </Grid>
                    </div>
                </ReactCardFlip>
            </div>
        </div>
    )
}

OnHoverFlipCard.propTypes = {
    frontImage: PropTypes.string,
    backText: PropTypes.string,
    flipDirection: PropTypes.string,
}
