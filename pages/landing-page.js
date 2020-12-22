import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import ParallaxLayout from "layouts/ParallaxLayout";

import AboutMe from "page-sections/landing-page/AboutMe";
import EducationAndExperienceTimeline from "page-sections/landing-page/EducationAndExperienceTimeline";
import Projects from "page-sections/landing-page/Projects";
import SkillsAndTools from "page-sections/landing-page/SkillsAndTools";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";
import background from "assets/img/bg7.jpg"
import data from "assets/data/pages/landing-data"
import useIsTouchDevice from "../util/device-detect";

const useStyles = makeStyles({
    padding: {
        padding: "4vh 0",
    }
});

export default function LandingPage(props) {
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout image={background} header={data.core.header} body={data.core.body}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item className={classes.padding}>
                        <AboutMe
                            header={data.aboutMe.header}
                            subHeader={data.aboutMe.subHeader}
                            data={data.aboutMe.about}
                        />
                    </Grid>
                    <Grid item className={classes.padding} style={{backgroundColor: grayColor[12]}}>
                        <Projects
                            header={data.projects.header}
                            subHeader={data.projects.subHeader}
                            cards={data.projects.cards}
                        />
                    </Grid>
                    <Grid item className={classes.padding}>
                        <SkillsAndTools />
                    </Grid>
                    <Grid item className={classes.padding} style={{backgroundColor: grayColor[7]}}>
                        <EducationAndExperienceTimeline
                            header={data.education.header}
                            subHeader={data.education.subHeader}
                            cards={data.education.cards}
                        />
                    </Grid>
                </Grid>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
