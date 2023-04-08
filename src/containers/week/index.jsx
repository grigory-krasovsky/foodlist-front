import React, {useState} from "react";
import {Button, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import TargetDay from "../targetDay";



export default function Week() {

    const [days, setDays] = useState([{
        name: "Monday",
        currentMeal: "Breakfast"
    },
        {
            name: "Tuesday",
            currentMeal: "Breakfast"
        },
        {
            name: "Wednesday",
            currentMeal: "Breakfast"
        },
        {
            name: "Thursday",
            currentMeal: "Breakfast"
        },
        {
            name: "Friday",
            currentMeal: "Breakfast"
        },
        {
            name: "Saturday",
            currentMeal: "Breakfast"
        },
        {
            name: "Sunday",
            currentMeal: "Breakfast"
        }])

    const [targetDay, setTargetDay] = useState(days[0]);
    const [currentIndex, setCurrentIndex] = useState();
    const [leftMotion, setLeftMotion] = useState(false);

    const handleDayClick = (item, index) => {
        setTargetDay(item)
        setLeftMotion(currentIndex <= index);
        setCurrentIndex(index);
    }

    return (
        <>
            <Grid container height={'93vh'} direction={'column'} sx ={{backgroundColor: 'orange'}}>
                {days.map((day, index) => {
                    return targetDay === day ?
                        <Grid item xs={12} width={"76%"} >
                            <TargetDay
                                days = {days}
                                setDays = {setDays}
                                index = {index}
                                leftMotion = {leftMotion}
                            />
                        </Grid>
                        :
                        <Grid item xs={12} width={"4vw"} className={'outer-rotation'}>
                            <Button
                                color={'success'}
                                sx={{height: '100%', width: '100%'}}
                                onClick={() => {
                                    handleDayClick(day, index)
                                }}>
                                <Typography className={'rotate inner-rotation'}>
                                    {day.name}
                                </Typography>
                            </Button>
                        </Grid>
                })}
            </Grid>
        </>
    )
}