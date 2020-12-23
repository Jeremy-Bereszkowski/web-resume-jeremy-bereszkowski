import React from 'react'
import PropTypes from "prop-types"
import ReactCardFlip from "react-card-flip";
import useHover from "@react-hook/hover";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles"

import Colours from "assets/strings/colours";

const useStyles = makeStyles(theme => ({
    card: {
        width: "260px",
        height: "260px",
        borderRadius: "4px",
        backgroundColor: Colours.primary,
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

    const target = React.useRef(null)
    const isHovering = useHover(target, {enterDelay: 200, leaveDelay: 200})

    return (
        <div style={{margin: "10px"}} ref={target}>
            <ReactCardFlip  isFlipped={isHovering} flipDirection={flipDirection}>
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
                            <h2>
                                <b>
                                    {backText}
                                </b>
                            </h2>
                        </Grid>
                    </Grid>
                </div>
            </ReactCardFlip>
        </div>
    )
}

OnHoverFlipCard.propTypes = {
    frontImage: PropTypes.string,
    backText: PropTypes.string,
    flipDirection: PropTypes.string,
}
