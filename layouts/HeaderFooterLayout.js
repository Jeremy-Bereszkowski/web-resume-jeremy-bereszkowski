import React from 'react'

import LandingHeader from "components/Header/Header";
import Footer from "components/Footer/Footer";

const topography = "/topography.svg"

export default function HeaderFooterLayout(props) {
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
