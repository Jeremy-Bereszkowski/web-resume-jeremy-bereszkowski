import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";
import Colours from "assets/strings/colours";

import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles(theme => ({}))

export default function EducationAndExperienceTimeline(props) {
    const classes = useStyles()

    return (
        <HeaderSubHeaderBody
            header={"Work Experience and Education"}
            subHeader={"My previous work history and education"}
            headerColor={"light"}
        >
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: grayColor[3], color: '#fff' }}
                    date="2018-present"
                    iconStyle={{ background: grayColor[12], color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">M. Brodribb Pty Ltd</h3>
                    <h4 className="vertical-timeline-element-subtitle">Office Manager</h4>
                    <p>
                        Data entry specialist,
                        Book keeping,
                        Office manager
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: grayColor[3], color: '#fff' }}
                    date="2018-2019"
                    iconStyle={{ background: grayColor[12], color: '#fff' }}
                    icon={<WorkIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Synergo Teknologi</h3>
                    <h4 className="vertical-timeline-element-subtitle">Software Developer</h4>
                    <p>
                        Software Development intern
                    </p>
                    <p>
                        Based in Jakarta, Indonesia.
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: grayColor[3], color: '#fff' }}
                    date="2016-present"
                    iconStyle={{ background: grayColor[10], color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelor of Engineering (Computer Systems and Networking) with Honours/Bachelor of Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Double Bachelor Degree</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: grayColor[3], color: '#fff' }}
                    date="2014"
                    iconStyle={{ background: grayColor[10], color: '#fff' }}
                    icon={<SchoolIcon />}
                >
                    <h3 className="vertical-timeline-element-title">The King David School</h3>
                    <h4 className="vertical-timeline-element-subtitle">Melbourne, Australia</h4>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    iconStyle={{ background: Colours.green, color: '#fff' }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </HeaderSubHeaderBody>
    )
}
