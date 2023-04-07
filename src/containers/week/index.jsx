import React, {useState} from "react";
import {Button, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import TargetDay from "../targetDay";

const DAYS = [
    {
        name: "Monday"
    },
    {
        name: "Tuesday"
    },
    {
        name: "Wednesday"
    },
    {
        name: "Thursday"
    },
    {
        name: "Friday"
    },
    {
        name: "Saturday"
    },
    {
        name: "Sunday"
    }
]

export default function Week() {

    const [targetDay, setTargetDay] = useState(DAYS[0]);


    return (
        <>
            <Grid container height={'93vh'} direction={'column'} sx ={{backgroundColor: 'orange'}}>
                {DAYS.map((item, index) => {
                    return targetDay === item ?
                        <Grid item xs={12} width={"76%"} >
                            <TargetDay
                                dayName = {item.name}
                            />
                        </Grid>
                        :
                        <Grid item xs={12} width={"4vw"} className={'outer-rotation'}>
                            <Button
                                color={'success'}
                                sx={{height: '100%', width: '100%'}}
                                onClick={() => setTargetDay(item)}>
                                <Typography className={'rotate inner-rotation'}>
                                    {item.name}
                                </Typography>
                            </Button>
                        </Grid>
                })}
            </Grid>
        </>
    )
}