import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import {Grid} from "@material-ui/core";
import StarIcon from '@material-ui/icons/Star';

import BlockButton from "components/Buttons/BlockButton";
import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import useIsTouchDevice from "util/device-detect";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles(theme => ({}))

export default function EducationAndExperienceTimeline(props) {
    const classes = useStyles()

    const animate = useIsTouchDevice() ? false : true

    return (
        <HeaderSubHeaderBody
            header={"Product and Projects"}
            subHeader={"My previous work"}
            headerColor={"light"}
        >
            <VerticalTimeline animate={animate}>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020"
                    iconStyle={{ background: grayColor[3], color: '#fff' }}
                    icon={<StarIcon />}
                >

                    <h3 className="vertical-timeline-element-title">MoveWell Physiotherapy</h3>
                    <h4 className="vertical-timeline-element-subtitle">NextJS</h4>
                    <p>
                        A static SPA built in NextJS using MaterialUI for a Physiotherapy Practice based in Melbourne, Australia. Continuous integration is provided by GitHub and Vercel, hosting is provided by Vercel.
                    </p>
                    <br/>
                    <Grid
                        container
                        direction={"row"}
                        justify={"flex-start"}
                        alignItems={"center"}
                    >
                        <Grid item>
                            <BlockButton color={"green"} href={"https://move-well-physio.vercel.app/"}>
                                App Demo
                            </BlockButton>
                        </Grid>
                        <Grid item>
                            <BlockButton color={"green"} href={"https://github.com/s3539822/MoveWellPhysio"}>
                                Source Code
                            </BlockButton>
                        </Grid>
                    </Grid>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2020"
                    iconStyle={{ background: grayColor[3], color: '#fff' }}
                    icon={<StarIcon />}
                >
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"flex-start"}
                    >
                        <Grid item>
                            <h3 className="vertical-timeline-element-title">PICD Software Managment Tool</h3>
                        </Grid>
                        <Grid item>
                            <h4 className="vertical-timeline-element-subtitle">ReactJS, ExpressJS, SQL, Docker</h4>
                        </Grid>
                        <Grid item>
                            <p>
                                A static SPA built in ReactJS using an ExpressJS backend to communicate with a SQL database. The project was containerized using docker and is hosted via GitHub packages.
                            </p>
                        </Grid>
                        <Grid item>
                            <br/>
                        </Grid>
                        <Grid item>
                            <Grid
                                container
                                direction={"row"}
                                justify={"flex-end"}
                                alignItems={"center"}
                            >
                                <Grid item>
                                    <BlockButton color={"green"}>
                                        App Demo
                                    </BlockButton>
                                </Grid>
                                <Grid item>
                                    <BlockButton color={"green"}>
                                        Source Code
                                    </BlockButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </HeaderSubHeaderBody>
    )
}
