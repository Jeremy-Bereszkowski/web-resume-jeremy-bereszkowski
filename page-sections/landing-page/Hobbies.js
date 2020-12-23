import React from 'react'
import Flip from "react-reveal";
import Roll from "react-reveal";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";
import ReactCardFlip from "react-card-flip";
import OnHoverFlipCard from "../../components/Card/OnHoverFlipCard";

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: "90%",
        /*margin: "0 auto 0 auto",*/
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: "0 auto",
    },
}))

export default function Hobbies(props) {
    const {header, subHeader, data} = props
    const classes = useStyles()


    return (
        <HeaderSubHeaderBody
            header={header}
            subHeader={subHeader}
        >
            <Grid
                container
                direction={"row"}
                justify={"space-evenly"}
                alignItems={"center"}
                alignContent={"center"}
            >
                <Grid item>
                    <OnHoverFlipCard />
                </Grid>
                <Grid item>
                    <OnHoverFlipCard />
                </Grid>
                <Grid item>
                    <OnHoverFlipCard />
                </Grid>
            </Grid>
        </HeaderSubHeaderBody>
    )
}

Hobbies.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    data: PropTypes.object,
}
