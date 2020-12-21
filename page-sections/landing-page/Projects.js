import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import StarIcon from '@material-ui/icons/Star';

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";

import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles(theme => ({}))

export default function EducationAndExperienceTimeline(props) {
    const classes = useStyles()

    return (
        <HeaderSubHeaderBody
            header={"Product and Projects"}
            subHeader={"My previous work"}
            headerColor={"light"}
        >
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016-2022"
                    iconStyle={{ background: grayColor[3], color: '#fff' }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">M. Brodribb Pty Ltd</h3>
                    <h4 className="vertical-timeline-element-subtitle">Office Manager</h4>
                    <p>
                        Data entry and
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016-2022"
                    iconStyle={{ background: grayColor[3], color: '#fff' }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Engineering (Computer Systems and Networking) with Honours/Bachelor of Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Double Bachelor Degree</h4>
                    <p>

                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    date="2014"
                    iconStyle={{ background: grayColor[3], color: '#fff' }}
                    icon={<StarIcon />}
                >
                    <h3 className="vertical-timeline-element-title">MoveWell Physiotherapy</h3>
                    <h4 className="vertical-timeline-element-subtitle">NextJS</h4>
                    <p>
                        A static SPA built in NextJS using MaterialUI for a Physiotherapy Practice based in Melbourne, Australia. Continuous integration is provided by GitHub and Vercel, hosting is provided by Vercel.
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </HeaderSubHeaderBody>
    )
}
