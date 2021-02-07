import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import SocialButtonGroup from "components/Buttons/SocialButtonGroup";

import {grayColor, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import FooterData from "assets/data/components/footer";
import Colours from "assets/strings/colours";
import {email, phone} from "../../assets/data/global";
import DataLink from "../Links/ExternalLink";

const useStyles = makeStyles({
    footer: {
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingRight: "25px",
        paddingLeft: "25px",
        width: "100%",
        "& h4, & h5": {
            color: whiteColor,
            textDecoration: "none"
        },
        position: "absolute",
        zIndex: "8"
    },
    footerBrand: {
        color: Colours.white,
        margin: "0",
        "&:hover": {
            color: Colours.primary,
        }
    },
    dark: {
        background:
            "radial-gradient(ellipse at center," +
            grayColor[4] +
            " 0," +
            grayColor[5] +
            " 100%)",
        backgroundSize: "550% 450%",
        color: whiteColor,
        "& i": {
            color: whiteColor
        },
        "& a, & h3, & h5": {
            opacity: ".86",
            "&:visited": {
                color: whiteColor
            },
            "&:focus, &:hover": {
                opacity: 1
            }
        },
    }
});

export default function Footer() {
    const classes = useStyles();
    const footerClasses = classNames({
        [classes.footer]: true,
        [classes["dark"]]: true,
    });

    return (
        <footer className={footerClasses}>
            <Grid
                container
                spacing={3}
                direction={"row"}
                justify={"space-around"}
                alignContent={"center"}
                alignItems={"center"}
            >
                <Grid item xs={12} md={3}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        <Grid item>
                            <Grid
                                container
                                direction={"column"}
                                justify={"flex-start"}
                                alignItems={"flex-start"}
                            >
                                <Grid item>
                                    <h3 className={classes.footerBrand}>
                                        {FooterData.left.header}
                                    </h3>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={3}>
                    <SocialButtonGroup />
                </Grid>
                <Grid item xs={12} md={3}>
                    <Grid
                        container
                        direction={"column"}
                        justify={"center"}
                        alignItems={"center"}
                    >
                        <Grid item>
                            <Grid
                                container
                                direction={"column"}
                                justify={"flex-end"}
                                alignItems={"flex-end"}
                            >
                                <Grid item>
                                    <DataLink
                                        data={email}
                                        mail={true}
                                        label={FooterData.right.email}
                                    />
                                </Grid>
                                <Grid item>
                                    <DataLink
                                        data={phone}
                                        mobile={true}
                                        label={FooterData.right.phone}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}
