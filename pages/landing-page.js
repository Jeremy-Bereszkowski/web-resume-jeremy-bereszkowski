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
import data from "assets/data/pages/landing-data"
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    padding: {
        padding: "4vh 0",
        display: "absolute",
        zIndex: "7",
    },
    baseBackground: {
        backgroundColor: grayColor[14],
    },
    lightGreyBackground: {
        backgroundColor: Colours.secondary,
    },
    blueGreyBackground: {
        backgroundColor: Colours.contrast,
    },
});

export default function LandingPage(props) {
    React.useEffect(() => {
        window.scrollTo(0, 0);
        document.body.scrollTop = 0;
    });
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout image={data.core.background} header={data.core.header} body={data.core.body}>
                <Grid
                    container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                >
                    <Grid item className={classNames(classes.padding, classes.baseBackground)}>
                        <AboutMe
                            header={data.aboutMe.header}
                            subHeader={data.aboutMe.subHeader}
                            data={data.aboutMe.about}
                            avatar={data.aboutMe.avatar}
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
                        <Projects
                            header={data.projects.header}
                            subHeader={data.projects.subHeader}
                            cards={data.projects.cards}
                        />
                    </Grid>
                    <Grid item className={classNames(classes.padding, classes.lightGreyBackground)}>
                        <SkillsAndTools
                            header={data.skills.header}
                            subHeader={data.skills.subHeader}
                            cards={data.skills.cards}
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
