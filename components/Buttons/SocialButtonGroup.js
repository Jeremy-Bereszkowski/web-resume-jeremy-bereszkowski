import React from 'react'

import {Grid, Tooltip} from "@material-ui/core";

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';

import FooterButton from "./FooterButton";

import URLS from "../../assets/strings/urls";

const data = [
    {
        href: URLS.PAPER_RESUME,
        icon: <CloudDownloadIcon/>,
        tip: "Download CV",
    },
    {
        href: URLS.LINKEDIN_PROFILE,
        icon: <LinkedInIcon/>,
        tip: "LinkedIn Profile",
    },
    {
        href: URLS.GITHUB_PROFILE,
        icon: <GitHubIcon/>,
        tip: "GitHub Profile",
    }
]

export default function SocialButtonGroup() {
    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignContent={"center"}
            alignItems={"center"}
        >
            {data.map((ele, key) =>
                <Grid item key={key}>
                    <Tooltip title={ele.tip}>
                        <FooterButton
                            href={ele.href}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            {ele.icon}
                        </FooterButton>
                    </Tooltip>
                </Grid>
            )}
        </Grid>
    )
}
