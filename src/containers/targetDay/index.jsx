import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {Button, Grid, Slide} from "@mui/material";
import { motion, useAnimationControls } from "framer-motion"

export default function TargetDay(props) {

    const [currentMeal, setCurrentMeal] = useState("")

    const MEALS = [
        {"name": "Breakfast"},
        {"name": "Lunch"},
        {"name": "Dinner"}
    ]

    const handleChangeMeal = (mealName) => {
        let newDays = [...props.days];
        newDays[props.index]["currentMeal"] = mealName;
        props.setDays(newDays);
    }

    return (
        <>
            <motion.div
                initial={props.leftMotion ? {  x: "-5vh" } : {  x: "5vh" }}
                animate={{ x: 0 }}
            >
                <Grid container direction={'column'} height={'93vh'} sx={{backgroundColor: "lightblue"}}>
                    <Grid item xs={12} width={"4vw"} className={'outer-rotation'} sx={{backgroundColor: "turquoise"}}>
                        <Typography className={'rotate inner-rotation'}>
                            {props.days[props.index].name}
                        </Typography>

                    </Grid>
                    <Grid container>
                        <Grid item xs={3}>
                            {MEALS.map((meal) => {
                                return (
                                    props.days[props.index].currentMeal !== meal.name ?
                                        <MealTitle
                                            handleChangeMeal = {handleChangeMeal}
                                            meal = {meal}
                                        /> : <MealMenu/>
                                )
                            })}
                        </Grid>
                    </Grid>
                </Grid>
            </motion.div>

        </>

    )
}

const MealMenu = () => {
    return <motion.div
        // initial={{ opacity: 0 }}
        // animate={{ opacity: 1 }}
        // transition={{ duration: 0.5 }}
    >
        <Grid item height={'83vh'} sx={{backgroundColor: "darkorange"}}>
            meal menu
        </Grid>
    </motion.div>
}

const MealTitle = (props) => {
    return (
        <motion.div
            // initial={{ opacity: 0 }}
            // animate={{ opacity: 1 }}
            // transition={{ duration: 1 }}
        >
            <Grid item height={'5vh'} sx={{backgroundColor: "white"}}>
                <Button
                    color={'success'}
                    sx={{height: '100%', width: '100%'}}
                    onClick={() => props.handleChangeMeal(props.meal.name)}
                >
                    {props.meal.name}
                </Button>
            </Grid>
        </motion.div>
    )
}