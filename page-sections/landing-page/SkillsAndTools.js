import React from 'react'
import PropTypes from "prop-types";
import {animated, useSpring} from 'react-spring'

import {makeStyles} from "@material-ui/core/styles"
import {Avatar} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import {sectionHeight} from "assets/jss/coreStyles";
import useIsTouchDevice from "../../util/device-detect";

const useStyles = makeStyles(theme => ({
    sectionHeight,
    card: {
        maxWidth: "300px",
        margin: "1vh auto",
        "&:hover": {
            boxShadow: "0px 30px 100px -10px rgba(0, 0, 0, 0.4)"
        }
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

const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

export default function SkillsAndTools(props) {
    const classes = useStyles()
    const {header, subHeader, cards} = props

    return (
        <HeaderSubHeaderBody
            header={header}
            subHeader={subHeader}
            headerColor={"light"}
        >
            <Grid
                container
                direction={"row"}
                alignItems={"center"}
                justify={"space-evenly"}
                className={classes.sectionHeight}
            >
                {
                    cards.map((ele, key) => {
                        const [animatedProps, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

                        const rootCard = (
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
                        )

                        const animCard = (
                            <animated.div
                                onMouseMove={({clientX: x, clientY: y}) => set({xys: calc(x, y)})}
                                onMouseLeave={() => set({xys: [0, 0, 1]})}
                                style={{transform: animatedProps.xys.interpolate(trans)}}
                            >
                                {rootCard}
                            </animated.div>
                        )

                        const card = useIsTouchDevice() ? rootCard : animCard

                        return (
                            <Grid xs={12} sm={6} md={6} lg={3} item key={key}>
                                {card}
                            </Grid>
                        )
                    })
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
