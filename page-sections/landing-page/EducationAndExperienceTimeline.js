import React from 'react'
import PropTypes from "prop-types"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import useIsTouchDevice from "util/device-detect";

import {grayColor, whiteColor} from "assets/jss/nextjs-material-kit-pro";

import 'react-vertical-timeline-component/style.min.css';

const useStyles = makeStyles(theme => ({}))

export default function EducationAndExperienceTimeline(props) {
    const {header, subHeader, cards} = props
    const animate = useIsTouchDevice()
    const classes = useStyles()

    return (
        <HeaderSubHeaderBody
            header={header}
            subHeader={subHeader}
            headerColor={"light"}
        >
            <VerticalTimeline animate={!animate}>
                {
                    cards.map((ele, key) => {
                        const icon = ele.icon === "school" ? <SchoolIcon/> : <WorkIcon />

                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{background: grayColor[3], color: whiteColor}}
                                date={ele.date}
                                iconStyle={{background: grayColor[ele.color], color: whiteColor}}
                                icon={icon}
                                key={key}
                            >
                                <h3 className="vertical-timeline-element-title">{ele.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{ele.subTitle}</h4>
                                <p>
                                    {ele.para}
                                </p>
                            </VerticalTimelineElement>
                        )
                    })
                }
                <VerticalTimelineElement
                    iconStyle={{ background: grayColor[8], color: whiteColor }}
                    icon={<StarIcon />}
                />
            </VerticalTimeline>
        </HeaderSubHeaderBody>
    )
}

EducationAndExperienceTimeline.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
}
