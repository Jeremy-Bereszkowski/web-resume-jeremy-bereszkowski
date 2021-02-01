import React from 'react'
import PropTypes from "prop-types"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

import BlockButton from "components/Buttons/BlockButton";
import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import Colours from "assets/strings/colours";

import useIsTouchDevice from "util/device-detect";

import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles(theme => ({
    date: {
        color: Colours.ternary,
        fontWeight: "600!important",
        fontSize: "1rem!important",
    }
}))

export default function Projects(props) {
    const {header, subHeader, cards} = props
    const classes = useStyles()

    const animate = useIsTouchDevice()

    return (
        <HeaderSubHeaderBody
            header={header}
            subHeader={subHeader}
            headerColor={"ternary"}
        >
            <br/>
            <br/>
            <br/>
            <VerticalTimeline animate={!animate}>
                {
                    cards.map((ele, key) => {
                        const leftButton = ele.href1 !== undefined ? (
                            <Grid item>
                                <BlockButton color={"ternary"} href={ele.href1}>
                                    {ele.text1}
                                </BlockButton>
                            </Grid>
                        ) : null
                        const rightButton = ele.href2 !== undefined ? (
                            <Grid item>
                                <BlockButton color={"ternary"} href={ele.href2}>
                                    {ele.text2}
                                </BlockButton>
                            </Grid>
                        ) : null
                        const buttonGroup = leftButton || rightButton !== null ? (
                            <Grid item>
                                <Grid
                                    container
                                    direction={"row"}
                                    justify={"flex-end"}
                                    alignItems={"center"}
                                >
                                    {leftButton}
                                    {rightButton}
                                </Grid>
                            </Grid>
                        ) : null
                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                date="2020"
                                dateClassName={classes.date}
                                iconStyle={{ background: ele.color, color: '#fff' }}
                                icon={<StarIcon />}
                                key={key}
                            >
                                <Grid
                                    container
                                    direction={"column"}
                                    justify={"center"}
                                    alignItems={"flex-start"}
                                >
                                    <Grid item>
                                        <h3 className="vertical-timeline-element-title">
                                            {ele.title}
                                        </h3>
                                    </Grid>
                                    <Grid item>
                                        <h4 className="vertical-timeline-element-subtitle">
                                            {ele.subTitle}
                                        </h4>
                                    </Grid>
                                    <Grid item>
                                        <p>
                                            {ele.para}
                                        </p>
                                    </Grid>
                                    <Grid item>
                                        <br/>
                                    </Grid>
                                    {buttonGroup}
                                </Grid>
                            </VerticalTimelineElement>
                        )
                    })
                }
            </VerticalTimeline>
        </HeaderSubHeaderBody>
    )
}

Projects.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
}
