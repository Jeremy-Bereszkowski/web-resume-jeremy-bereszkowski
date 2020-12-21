import React from 'react'
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: "80%",
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: "0 auto",
    },
}))

export default function AboutMe(props) {
    const {data} = props
    const classes = useStyles()

    return (
        <HeaderSubHeaderBody
            header={data.header}
            subHeader={data.subHeader}
        >
            <Grid
                container
                direction={"row"}
                justify={"center"}
                alignItems={"center"}
                alignContent={"center"}
            >
                <Grid item xs={12} md={9}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"flex-start"}
                        className={classes.container}
                    >
                        <Grid item>
                            <h3>
                                {data.about.header}
                            </h3>
                        </Grid>
                        <Grid item>
                            <h4>
                                {data.about.subHeader}
                            </h4>
                        </Grid>
                        <Grid item>
                            <br/>
                            <br/>
                            <br/>
                        </Grid>
                        {
                            data.about.para.map((ele, key) => (
                                <Grid item key={key}>
                                    <h5>
                                        <b>
                                            {ele}
                                        </b>
                                    </h5>
                                </Grid>
                            ))
                        }
                        <Grid item>
                            <br/>
                            <br/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <Avatar className={classes.large}>

                    </Avatar>
                </Grid>
            </Grid>
        </HeaderSubHeaderBody>
    )
}

AboutMe.propTypes = {
    data: PropTypes.object,
}
