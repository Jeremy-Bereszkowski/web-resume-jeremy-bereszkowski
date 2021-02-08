import React from 'react'
import PropTypes from "prop-types";
import classNames from "classnames"

import {makeStyles} from "@material-ui/core/styles"
import Button from "@material-ui/core/Button";

import {hexToRgb} from "assets/jss/hexToRgb";
import Colours from "assets/strings/colours";

const useStyles = makeStyles({
    button: {
        minHeight: "auto",
        minWidth: "auto",
        boxShadow:
            "0 2px 2px 0 rgba(" +
            hexToRgb(Colours.grayColor[0]) +
            ", 0.14), 0 3px 1px -2px rgba(" +
            hexToRgb(Colours.grayColor[0]) +
            ", 0.2), 0 1px 5px 0 rgba(" +
            hexToRgb(Colours.grayColor[0]) +
            ", 0.12)",
        border: "none",
        borderRadius: "3px",
        position: "relative",
        padding: "12px 30px",
        margin: ".3125rem 1px",
        fontSize: "12px",
        fontWeight: "400",
        textTransform: "uppercase",
        letterSpacing: "0",
        willChange: "box-shadow, transform",
        transition:
            "box-shadow 0.2s cubic-bezier(0.4, 0, 1, 1), background-color 0.2s cubic-bezier(0.4, 0, 0.2, 1)",
        lineHeight: "1.42857143",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        touchAction: "manipulation",
        cursor: "pointer",

    },
    dark: {
        "&,&:focus,&:hover": {
            color: Colours.primary,
            backgroundColor: Colours.grayColor[3]
        },
        "&:hover,&:focus": {
            color: Colours.primary,
            backgroundColor: Colours.white,
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(Colours.grayColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(Colours.black) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(Colours.grayColor[0]) +
                ", 0.2)"
        }
    },
    green: {
        "&,&:focus,&:hover": {
            color: Colours.white,
            backgroundColor: Colours.primary,
        },
        "&:hover,&:focus": {
            color: Colours.primary,
            backgroundColor: Colours.white,
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(Colours.grayColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(Colours.black) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(Colours.grayColor[0]) +
                ", 0.2)"
        }
    },
    ternary: {
        "&,&:focus,&:hover": {
            color: Colours.white,
            backgroundColor: Colours.ternary,
        },
        "&:hover,&:focus": {
            color: Colours.ternary,
            backgroundColor: Colours.white,
            boxShadow:
                "0 14px 26px -12px rgba(" +
                hexToRgb(Colours.grayColor[0]) +
                ", 0.42), 0 4px 23px 0px rgba(" +
                hexToRgb(Colours.black) +
                ", 0.12), 0 8px 10px -5px rgba(" +
                hexToRgb(Colours.grayColor[0]) +
                ", 0.2)"
        }
    },
})

const BlockButton = React.forwardRef((props, ref) => {
    const {children, color, ...rest} = props
    const classes = useStyles()

    let buttonClasses = classes.button
    switch (color) {
        case "dark":
            buttonClasses = classNames(classes.button, classes.dark);
            break;
        case "ternary":
            buttonClasses = classNames(classes.button, classes.ternary);
            break;
        case "green":
            buttonClasses = classNames(classes.button, classes.green);
            break;
    }

    return (
        <Button
            {...rest}
            ref={ref}
            className={buttonClasses}
            target="_blank"
            rel="noopener noreferrer"
        >
            {children}
        </Button>
    )
})

BlockButton.propTypes = {
    children: PropTypes.node,
    color: PropTypes.oneOf([
        "green",
        "dark",
        "ternary",
    ])
};

export default BlockButton
