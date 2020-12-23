import React from 'react'
import PropTypes from "prop-types"
import ReactCardFlip from "react-card-flip";
import useHover from "@react-hook/hover";

import {makeStyles} from "@material-ui/core/styles"

import Colours from "assets/strings/colours";
import {Grid} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    card: {
        width: "100%",
        maxWidth: "260px",
        minWidth: "100%",
        height: "100%",
        minHeight: "100%",
        maxHeight: "260px",
        borderRadius: "4px",
        backgroundColor: Colours.secondary,
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
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
                        direction={"row"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        <Grid item>
                            <h2>
                                {backText}
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
