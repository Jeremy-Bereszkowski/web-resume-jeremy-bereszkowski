import React from 'react'
import Jump from "react-reveal";
import PropTypes from "prop-types";

import {makeStyles} from "@material-ui/core/styles"
import {Avatar} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import CardActionArea from "@material-ui/core/CardActionArea";
import Card from "@material-ui/core/Card";

import HeaderSubHeaderBody from "components/GridLayouts/HeaderSubHeaderBody";

import {sectionHeight} from "assets/jss/coreStyles";
import useIsTouchDevice from "../../util/device-detect";

const useStyles = makeStyles(theme => ({
    sectionHeight,
    card: {
        maxWidth: "300px",
        margin: "1vh auto"
    },
    avatar: {
        margin: "2vh 0",
        width: theme.spacing(10),
        height: theme.spacing(10),
    },
    centerText: {
        textAlign: "center",
    }
}))

export default function SkillsAndTools(props) {
    const classes = useStyles()
    const {header, subHeader, cards} = props

    let windowScrollTop = 0;
    const [transform, setTransform] = React.useState(
        "translate3d(0," + windowScrollTop + "px,0)"
    );
    React.useEffect(() => {
        if (window.innerWidth >= 768) {
            window.addEventListener("scroll", resetTransform);
        }
        return function cleanup() {
            if (window.innerWidth >= 768) {
                window.removeEventListener("scroll", resetTransform);
            }
        };
    });
    const resetTransform = () => {
        var windowScrollTop = window.pageYOffset / 3;
        setTransform("translate3d(0," + windowScrollTop + "px,0)");
    };

    const RenderCard = ({ele}) => (
        <Card className={classes.card}>
            <CardActionArea>
                <Grid
                    container
                    direction={"column"}
                    justify={"center"}
                    alignItems={"center"}
                >
                    <Grid item>
                        <Avatar src={ele.logo} className={classes.avatar}/>
                    </Grid>
                    <Grid item>
                        <h3 className={classes.centerText}>
                            {ele.title}
                        </h3>
                        {
                            ele.list.map((ele, key) => (
                                <h5 className={classes.centerText} key={key}>
                                    {ele}
                                </h5>
                            ))
                        }
                    </Grid>
                </Grid>
            </CardActionArea>
        </Card>
    )

    const RenderContent = () => (
        <Grid
            container
            direction={"row"}
            alignItems={"center"}
            justify={"space-evenly"}
            className={classes.sectionHeight}
        >
            {
                cards.map((ele, key) => (
                    <Grid xs={12} sm={6} md={6} lg={3} item key={key}>
                        {
                            useIsTouchDevice() ?
                                <Jump>
                                    <RenderCard ele={ele}/>
                                </Jump>
                                :
                                <RenderCard ele={ele}/>
                        }
                    </Grid>
                ))
            }
        </Grid>
    )

    return (
        useIsTouchDevice() ?
            <HeaderSubHeaderBody
                header={header}
                subHeader={subHeader}
            >
                <RenderContent />
            </HeaderSubHeaderBody>
            :
            <HeaderSubHeaderBody
                header={header}
                subHeader={subHeader}
                style={{transform: transform, marginTop: "-50vh", marginBottom: "100vh", zIndex: "-1"}}
            >
                <RenderContent />
            </HeaderSubHeaderBody>
    )
}

SkillsAndTools.propTypes = {
    header: PropTypes.string.isRequired,
    subHeader: PropTypes.string.isRequired,
    cards: PropTypes.array.isRequired,
}
