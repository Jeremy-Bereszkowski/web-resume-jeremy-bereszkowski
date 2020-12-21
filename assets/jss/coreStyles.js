import Colours from "../strings/colours";
import {blackColor, grayColor, hexToRgb, title, whiteColor} from "./nextjs-material-kit-pro";

const extraSmallFont = {
    fontSize: "calc(16px + (20 - 16) * ((100vw - 300px) / (3000 - 300)))"
}

const smallFont = {
    fontSize: "calc(16px + (22 - 16) * ((100vw - 300px) / (3000 - 300)))"
}

const mediumFont = {
    fontSize: "calc(22px + (40 - 22) * ((100vw - 300px) / (3000 - 300)))"
}

const largeFont = {
    fontSize: "calc(36px + (56 - 36) * ((100vw - 300px) / (3000 - 300)))"
}

const parallaxHeaderText = {
    ...largeFont,
    fontWeight: "700",
    color: whiteColor,
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
}

const parallaxSubHeaderText = {
    ...extraSmallFont,
    fontWeight: "350",
    color: whiteColor,
    textDecoration: "none",
    textTransform: "uppercase",
    textAlign: "center",
}

const sectionText = {
    color: Colours.green,
    margin: "0",
    textTransform: "uppercase",
    textAlign: "center",
}

const sectionHeaderText = {
    ...mediumFont,
    ...sectionText,
    fontWeight: "350",
}

const sectionSubHeaderText = {
    ...smallFont,
    ...sectionText,
    fontWeight: "250",
}



const darkColor = {
    "&:before": {
        background: "rgba(" + hexToRgb(blackColor) + ", 0.5)"
    },
    "&:after,&:before": {
        position: "absolute",
        zIndex: "1",
        width: "100%",
        height: "100%",
        display: "block",
        left: "0",
        top: "0",
        content: "''"
    }
}

const blackHrThin = {
    marginTop: "4vh",
    marginBottom: "4vh",
    borderTop: "1px solid black"
}

const greenHrThick = {
    borderTop: "7px solid " + Colours.green,
    marginLeft: "10%",
    marginRight: "10%",
}

export {
    extraSmallFont,
    smallFont,
    mediumFont,
    largeFont,

    parallaxHeaderText,
    parallaxSubHeaderText,

    sectionHeaderText,
    sectionSubHeaderText,

    darkColor,

    blackHrThin,
    greenHrThick,
}
