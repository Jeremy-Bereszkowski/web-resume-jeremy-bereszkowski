import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"

import 'react-vertical-timeline-component/style.min.css';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import Grid from "@material-ui/core/Grid";
import HeaderSubHeaderBody from "../../components/GridLayouts/HeaderSubHeaderBody";

const useStyles = makeStyles(theme => ({}))

export default function EducationAndExperienceTimeline(props) {
    const classes = useStyles()

    return (
        <HeaderSubHeaderBody
            header={"Work Experience and Education"}
            subHeader={"My previous work history and education"}
        >
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    date="2016-2022"
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
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
                    iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Engineering (Computer Systems and Networking) with Honours/Bachelor of Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Double Bachelor Degree</h4>
                    <p>

                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    date="2014"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">The King David School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </HeaderSubHeaderBody>
    )
}
