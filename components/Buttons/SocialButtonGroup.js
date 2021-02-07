import React from 'react'
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import FooterButton from "./FooterButton";

import {defaultFont} from "../../assets/jss/nextjs-material-kit-pro";
import URLS from "../../assets/strings/urls";
import Colours from "../../assets/strings/colours";

const useStyles = makeStyles({
    title: {
        letterSpacing: "unset",
        "&,& a": {
            ...defaultFont,
            minWidth: "unset",
            lineHeight: "30px",
            fontSize: "18px",
            borderRadius: "3px",
            textTransform: "none",
            whiteSpace: "nowrap",
            color: "inherit",
        },
        color: "white",
        marginTop: "14px!important",
        marginBottom: "7px!important",
    },
    link: {
        "&:hover, &:focus": {
            color: Colours.primary
        }
    },
    margin: {
        marginLeft: "4px",
    }
});

export default function SocialButtonGroup(props) {
    const classes = useStyles();

    return (
        <Grid
            container
            direction={"row"}
            justify={"center"}
            alignContent={"center"}
            alignItems={"center"}
        >
            <Grid item>
                <Link>
                <FooterButton
                    href="https://www.linkedin.com/in/jeremy-bereszkowski-999ba016a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={classes.title}>
                        <a
                            className={classNames(classes.link, classes.margin)}
                            href={URLS.PAPER_RESUME}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CV
                        </a>
                    </h2>
                </FooterButton>
                </Link>
            </Grid>
            <Grid item>
                <FooterButton
                    href="https://www.linkedin.com/in/jeremy-bereszkowski-999ba016a/"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-linkedin-in"/>
                </FooterButton>
            </Grid>
            <Grid item>
                <FooterButton
                    href="https://github.com/s3539822"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <i className="fab fa-github"/>
                </FooterButton>
            </Grid>
        </Grid>
    )
}
