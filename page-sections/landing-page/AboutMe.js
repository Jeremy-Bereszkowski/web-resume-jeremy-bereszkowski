import React from 'react'
import Flip from "react-reveal";
import Roll from "react-reveal";
import PropTypes from "prop-types"

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

const useStyles = makeStyles(theme => ({
    container: {
        maxWidth: "90%",
    },
    large: {
        width: theme.spacing(30),
        height: theme.spacing(30),
        margin: "0 auto",
    },
    height: {
        minHeight: "55vh"
    }
}))

export default function AboutMe(props) {
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
                justify={"center"}
                alignItems={"center"}
                alignContent={"center"}
                className={classes.height}
            >
                <Grid item>
                    <Flip left>
                        <Grid
                            container
                            direction={"column"}
                            justify={"center"}
                            alignItems={"flex-start"}
                            alignContent={"center"}
                        >
                            <Grid item className={classes.container}>
                                <h3>
                                    {data.header}
                                </h3>
                            </Grid>
                            <Grid item className={classes.container}>
                                <h4>
                                    {data.subHeader}
                                </h4>
                            </Grid>
                            <Grid item className={classes.container}>
                                <br/>
                                <br/>
                                <br/>
                            </Grid>
                            {
                                data.para.map((ele, key) => (
                                    <Grid item key={key} className={classes.container}>
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
                    </Flip>
                </Grid>
                <Grid item>
                    <Roll right>
                        <Avatar className={classes.large}/>
                    </Roll>
                </Grid>
            </Grid>
        </HeaderSubHeaderBody>
    )
}

AboutMe.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    data: PropTypes.object,
}
