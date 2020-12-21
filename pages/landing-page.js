import React from "react";

import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import HeaderFooterLayout from "layouts/HeaderFooterLayout";
import ParallaxLayout from "layouts/ParallaxLayout";
import MainContainerLayout from "layouts/MainContainerLayout";

import AboutMe from "page-sections/landing-page/AboutMe";
import EducationAndExperienceTimeline from "page-sections/landing-page/EducationAndExperienceTimeline";
import Projects from "page-sections/landing-page/Projects";
import SkillsAndTools from "page-sections/landing-page/SkillsAndTools";

import {grayColor} from "assets/jss/nextjs-material-kit-pro";
import background from "assets/img/bg7.jpg"
import data from "assets/data/pages/landing-data"

const useStyles = makeStyles({});

export default function LandingPage(props) {
    const classes = useStyles();

    return (
        <HeaderFooterLayout>
            <ParallaxLayout image={background} header={data.core.header} body={data.core.body}>
                <MainContainerLayout>
                    <Grid
                        container
                        spacing={10}
                        direction={"row"}
                        alignContent={"center"}
                        justify={"center"}
                    >
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <AboutMe data={data.aboutMe}/>
                        </Grid>
                        <Grid style={{backgroundColor: grayColor[12]}} item xs={12} sm={12} md={12} lg={12}>
                            <Projects />
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12}>
                            <SkillsAndTools />
                        </Grid>
                        <Grid style={{backgroundColor: grayColor[7]}} item xs={12} sm={12} md={12} lg={12}>
                            <EducationAndExperienceTimeline />
                        </Grid>
                    </Grid>
                </MainContainerLayout>
            </ParallaxLayout>
        </HeaderFooterLayout>
    )
}
