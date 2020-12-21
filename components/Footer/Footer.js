import React from "react";
import classNames from "classnames";

import {makeStyles} from "@material-ui/core/styles";
import {Grid} from "@material-ui/core";

import FooterButton from "components/Buttons/FooterButton";

import {grayColor, hexToRgb, whiteColor} from "assets/jss/nextjs-material-kit-pro";
import FooterData from "assets/data/components/footer";
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    footer: {
        paddingTop: "40px",
        paddingBottom: "40px",
        paddingRight: "25px",
        paddingLeft: "25px",
        marginRight: "auto",
        marginLeft: "auto",
        width: "100%",
        "& ul": {
            marginTop: "auto",
            marginBottom: "auto"
        },
        "& ul li": {
            display: "inline-block",
        },
        "& h4, & h5": {
            color: whiteColor,
            textDecoration: "none"
        },
    },
    footerBrand: {
        color: Colours.green,
        fontFamily: "Roboto Slab,Times New Roman,serif",
        margin: "0",
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
        "& p": {
            color: grayColor[0]
        },
        "& i": {
            color: whiteColor
        },
        "& a": {
            color: whiteColor,
            opacity: ".86",
            "&:visited": {
                color: whiteColor
            },
            "&:focus, &:hover": {
                opacity: 1
            }
        },
        "& hr": {
            borderColor: "rgba(" + hexToRgb(whiteColor) + ",0.2)"
        }
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
                        <Grid item>
                            <h5 className={classes.footerBrand}>
                                {FooterData.left.address}
                            </h5>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction={"row"}
                        justify={"center"}
                        alignContent={"center"}
                        alignItems={"center"}
                    >
                        <Grid item>
                            <FooterButton
                                href="https://www.facebook.com/movewellmelbourne"
                                target="_blank"
                            >
                                <i className="fab fa-facebook" />
                            </FooterButton>
                        </Grid>
                        <Grid item>
                            <FooterButton
                                href="https://www.instagram.com/movewellmelbourne/"
                                target="_blank"
                            >
                                <i className="fab fa-instagram" />
                            </FooterButton>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item>
                    <Grid
                        container
                        direction={"column"}
                        justify={"flex-end"}
                        alignItems={"flex-end"}
                    >
                        <Grid item>
                            <h3 className={classes.footerBrand}>
                                {FooterData.right.email}
                            </h3>
                        </Grid>
                        <Grid item>
                            <h5 className={classes.footerBrand}>
                                {FooterData.right.phone}
                            </h5>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </footer>
    )
}
