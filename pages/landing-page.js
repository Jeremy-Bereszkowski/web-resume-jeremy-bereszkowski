import React from "react";
import classNames from "classnames"

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import ParallaxLayout from "layouts/ParallaxLayout";

import AboutMe from "page-sections/landing-page/AboutMe";
import EducationAndExperienceTimeline from "page-sections/landing-page/EducationAndExperienceTimeline";
import Projects from "page-sections/landing-page/Projects";
import SkillsAndTools from "page-sections/landing-page/SkillsAndTools";
import Hobbies from "page-sections/landing-page/Hobbies";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";
/*import background from "assets/img/bg7.jpg"*/
import data from "assets/data/pages/landing-data"
import Colours from "assets/strings/colours";

const background = "/background.jpg"

const useStyles = makeStyles({
    padding: {
        padding: "4vh 0",
    },
    lightGreyBackground: {
        backgroundColor: grayColor[12],
    },
    blueGreyBackground: {
        backgroundColor: Colours.primary,
    },
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
                    <Grid item className={classNames(classes.padding, classes.lightGreyBackground)}>
                        <Projects
                            header={data.projects.header}
                            subHeader={data.projects.subHeader}
                            cards={data.projects.cards}
                        />
                    </Grid>
                    <Grid item className={classes.padding}>
                        <SkillsAndTools
                            header={data.skills.header}
                            subHeader={data.skills.subHeader}
                            cards={data.skills.cards}
                        />
                    </Grid>
                    <Grid item className={classNames(classes.padding, classes.blueGreyBackground)}>
                        <EducationAndExperienceTimeline
                            header={data.education.header}
                            subHeader={data.education.subHeader}
                            cards={data.education.cards}
                        />
                    </Grid>
                    <Grid item className={classes.padding}>
                        <Hobbies
                            header={data.hobbies.header}
                            subHeader={data.hobbies.subHeader}
                            data={data.hobbies.data}
                        />
                    </Grid>
                </Grid>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
