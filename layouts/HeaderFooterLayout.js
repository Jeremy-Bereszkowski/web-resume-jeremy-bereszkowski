import React from 'react'

import {makeStyles} from "@material-ui/core/styles"

import LandingHeader from "components/Header/Header";
import Footer from "components/Footer/Footer";

const topography = "/topography.svg"


const useStyles = makeStyles(theme => ({}))

export default function HeaderFooterLayout(props) {
    const classes = useStyles()
    const {children} = props

    return (
        <>
            <LandingHeader />
            <div style={{
                backgroundColor: "#DFDBE5",
                backgroundImage: "url("+topography+")",
                position: "fixed",
                zIndex: "0",
                width: "100vw",
                height: "100vh",
                opacity: "0.18",
            }}/>
            {children}
            <Footer />
        </>
    )
}
