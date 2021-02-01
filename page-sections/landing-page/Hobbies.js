import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";
import OnHoverFlipCard from "components/Card/OnHoverFlipCard";

import {sectionHeight} from "assets/jss/coreStyles";

const useStyles = makeStyles(theme => ({
    sectionHeight,
    container: {
        maxWidth: "90%",
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
            headerColor={"ternary"}
        >
            <Grid
                container
                direction={"row"}
                justify={"space-evenly"}
                alignItems={"center"}
                alignContent={"center"}
                className={classes.sectionHeight}
            >
                {
                    data.map((ele, key) => (
                        <Grid xs={12} sm={6} md={6} lg={3} item key={key}>
                            <Grid
                                container
                                direction={"row"}
                                justify={"center"}
                                alignItems={"center"}
                                alignContent={"center"}
                            >
                                <Grid item>
                                    <OnHoverFlipCard frontImage={ele.image} backText={ele.text} flipDirection={ele.flipDirection}/>
                                </Grid>
                            </Grid>
                        </Grid>
                    ))
                }
            </Grid>
        </HeaderSubHeaderBody>
    )
}

Hobbies.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    data: PropTypes.array,
}
