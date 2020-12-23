import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import ReactCardFlip from "react-card-flip";
import useHover from "@react-hook/hover";
import Colours from "../../assets/strings/colours";

const useStyles = makeStyles(theme => ({
    card: {
        width: "10vw",
        height: "10vw",
        borderRadius: "4px",
        backgroundColor: Colours.green,
        boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)"
    }
}))

export default function OnHoverFlipCard(props) {
    const classes = useStyles()

    const target = React.useRef(null)
    const isHovering = useHover(target, {enterDelay: 200, leaveDelay: 200})

    return (
        <div ref={target}>
            <ReactCardFlip  isFlipped={isHovering} flipDirection="horizontal">
                <div className={classes.card}>
                    <h2>
                        This is the front of the card.
                    </h2>
                </div>

                <div className={classes.card}>
                    <h2>
                        This is the back of the card.
                    </h2>
                </div>
            </ReactCardFlip>
        </div>
    )
}

OnHoverFlipCard.propTypes = {
}
