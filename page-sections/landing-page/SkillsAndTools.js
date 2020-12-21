import React from 'react'

import {makeStyles} from "@material-ui/core/styles"
import HeaderSubHeaderBody from "../../components/GridLayouts/HeaderSubHeaderBody";

const useStyles = makeStyles(theme => ({}))

export default function SkillsAndTools(props) {
    const classes = useStyles()

    return (
        <HeaderSubHeaderBody
            header={"Skills and Tools"}
            subHeader={"My preferred languages and dev tools"}
        >

        </HeaderSubHeaderBody>
    )
}
