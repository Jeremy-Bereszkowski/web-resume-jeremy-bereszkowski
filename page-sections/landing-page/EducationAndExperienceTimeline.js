import React from 'react'
import PropTypes from "prop-types"
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';

import {makeStyles} from "@material-ui/core/styles"
import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';
import RoomIcon from '@material-ui/icons/Room';

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import useIsTouchDevice from "util/device-detect";

import {grayColor, whiteColor} from "assets/jss/nextjs-material-kit-pro";

import 'react-vertical-timeline-component/style.min.css';
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
    location: {
        marginTop: "0px!important",
        marginBottom: "0px!important",
        marginLeft: "4px!important",
        padding: 0,
        fontSize: "14dp",
    },
    locationRoot: {
        marginBottom: "4px!important",
    },
    date: {
        color: "white!important",
        fontWeight: "600!important",
        fontSize: "1rem!important",
        opacity: "1",
    },
    border: {
        padding: "0 20px"
    }
}))

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
            <br/>
            <br/>
            <br/>
            <div className={classes.border}>
                <VerticalTimeline animate={!animate}>
                    {cards.map((ele, key) => {
                        const icon = ele.icon === "school" ? <SchoolIcon/> : <WorkIcon />

                        const location = ele.location !== undefined ? (
                            <Grid
                                container
                                direction={"row"}
                                alignItems={"center"}
                                alignContent={"center"}
                                justify={"flex-start"}
                                className={classes.locationRoot}
                            >
                                <Grid item>
                                    <RoomIcon fontSize={"small"}/>
                                </Grid>
                                <Grid item>
                                    <h5 className={classes.location}>
                                        {ele.location}
                                    </h5>
                                </Grid>
                            </Grid>
                        ) : null

                        const paraList = ele.para !== undefined ? (
                            <ul>
                                {ele.para.map((ele, key) => (
                                    <li key={key}>
                                        <h6>{ele}</h6>
                                    </li>
                                ))}
                            </ul>
                        ) : null

                        const aside = ele.aside !== undefined ? (
                            <p>
                                {ele.aside}
                            </p>
                        ) : null

                        return (
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{background: grayColor[3], color: whiteColor}}
                                date={ele.date}
                                dateClassName={classes.date}
                                iconStyle={{background: grayColor[ele.color], color: whiteColor}}
                                icon={icon}
                                key={key}
                            >
                                {location}
                                <br/>
                                <h3 className="vertical-timeline-element-title">{ele.title}</h3>
                                <h4 className="vertical-timeline-element-subtitle">{ele.subTitle}</h4>
                                {paraList}
                                <br/>
                                {aside}
                            </VerticalTimelineElement>
                        )
                    })}
                    <VerticalTimelineElement
                        iconStyle={{ background: grayColor[5], color: whiteColor }}
                        icon={<StarIcon />}
                    />
                </VerticalTimeline>
            </div>

        </HeaderSubHeaderBody>
    )
}

EducationAndExperienceTimeline.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
}
