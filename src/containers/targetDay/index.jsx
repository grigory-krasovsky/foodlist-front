import React, {useState} from "react";
import Typography from "@mui/material/Typography";
import {Button, Grid, Slide} from "@mui/material";
import Box from "@mui/material/Box";

export default function TargetDay(props) {

    const [currentMeal, setCurrentMeal] = useState("Breakfast")
    const containerRef = React.useRef(null);


    const MEALS = [
        {"name": "Breakfast"},
        {"name": "Lunch"},
        {"name": "Dinner"}
    ]

    return (
        <>
            <Grid container direction={'column'} height={'93vh'} sx={{backgroundColor: "lightblue"}}>
                <Grid item xs={12} width={"4vw"} className={'outer-rotation'} sx={{backgroundColor: "turquoise"}}>
                    <Typography className={'rotate inner-rotation'}>
                        {props.dayName}
                    </Typography>

                </Grid>
                <Grid container>
                    <Grid xs={3} ref={containerRef}>
                        {MEALS.map((meal) => {
                            return (
                                currentMeal !== meal.name ?
                                    <Grid item height={'5vh'} sx={{backgroundColor: "white"}}>
                                        <Button
                                            color={'success'}
                                            sx={{height: '100%', width: '100%'}}
                                            onClick={() => setCurrentMeal(meal.name)}
                                        >
                                            {meal.name}
                                        </Button>
                                    </Grid> :
                                    <Grid item height={'83vh'} sx={{backgroundColor: "darkorange"}}>
                                        meal menu
                                    </Grid>

                            )
                        })}
                    </Grid>
                </Grid>
            </Grid>
            }
        </>

    )
}