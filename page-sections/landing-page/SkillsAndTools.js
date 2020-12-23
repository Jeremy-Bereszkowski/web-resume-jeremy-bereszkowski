import React from 'react'
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles"
import {Avatar} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";
import Jump from "react-reveal";

const useStyles = makeStyles(theme => ({
    card: {
        maxWidth: "300px",
        margin: "1vh auto"
    },
    avatar: {
        margin: "2vh 0",
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    centerText: {
        textAlign: "center",
    }
}))

export default function SkillsAndTools(props) {
    const classes = useStyles()
    const {header, subHeader, cards} = props

    return (
        <HeaderSubHeaderBody
            header={header}
            subHeader={subHeader}
        >
            <Grid
                container
                direction={"row"}
                alignItems={"flex-start"}
                justify={"space-evenly"}
            >
                {
                    cards.map((ele, key) => (
                        <Grid xs={12} md={3} item key={key}>
                            <Jump>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <Grid
                                            container
                                            direction={"column"}
                                            justify={"center"}
                                            alignItems={"center"}
                                        >
                                            <Grid item>
                                                <Avatar src={ele.logo} className={classes.avatar}/>
                                            </Grid>
                                            <Grid item>
                                                <h3 className={classes.centerText}>
                                                    {ele.title}
                                                </h3>
                                                {
                                                    ele.list.map((ele, key) => (
                                                        <h5 className={classes.centerText} key={key}>
                                                            {ele}
                                                        </h5>
                                                    ))
                                                }
                                            </Grid>
                                        </Grid>
                                    </CardActionArea>
                                </Card>
                            </Jump>
                        </Grid>
                    ))
                }
            </Grid>
        </HeaderSubHeaderBody>
    )
}

SkillsAndTools.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
}
