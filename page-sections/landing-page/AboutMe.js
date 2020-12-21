import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import HeaderSubHeaderBody from "../../components/GridLayouts/HeaderSubHeaderBody";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles(theme => ({}))

export default function AboutMe(props) {
    const classes = useStyles()

    return (
        <HeaderSubHeaderBody
            header={"About Me"}
            subHeader={"A small introduction about myself"}
        >
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignItems={"center"}
            >
                <Grid item xs={12} md={9}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"flex-start"}
                    >
                        <Grid item>
                            <h2>
                                Jeremy Bereszkowski
                            </h2>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Avatar>

                    </Avatar>
                </Grid>
            </Grid>
        </HeaderSubHeaderBody>
    )
}
