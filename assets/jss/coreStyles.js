import Colours from "../strings/colours";
import {blackColor, hexToRgb, whiteColor} from "./nextjs-material-kit-pro";

const extraSmallFont = {
    fontSize: "calc(16px + (20 - 16) * ((100vw - 300px) / (3000 - 300)))"
}

const smallFont = {
    fontSize: "calc(16px + (24 - 10) * ((100vw - 300px) / (3000 - 300)))"
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
    color: Colours.primary,
    margin: "0",
    textTransform: "uppercase",
    textAlign: "center",
}

const sectionHeaderText = {
    ...mediumFont,
    ...sectionText,
    fontWeight: "400",
}

const sectionSubHeaderText = {
    ...smallFont,
    ...sectionText,
    fontWeight: "350",
}

const sectionHeight = {
    minHeight: "55vh"
}

const greenHrThick = {
    borderTop: "7px solid " + Colours.secondary,
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

    sectionHeight,

    greenHrThick,
}
