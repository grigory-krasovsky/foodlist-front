import React, {useState} from "react";
import {Button, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import './index.css'
import Box from "@mui/material/Box";

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
            <Grid container height={'93.5vh'} direction={'column'}>
                {DAYS.map((item, index) => {
                    return targetDay === item ?
                        <Grid item xs={12} width={"76%"} border={"solid"}>

                        </Grid>
                        :
                        <Grid item xs={12} width={"4%"} className={'outer'}>
                            <Button
                                color={'success'}
                                sx={{height: '100%', width: '100%'}}
                                onClick={() => setTargetDay(item)}>
                                <Typography className={'rotate inner'}>
                                    {item.name}
                                </Typography>
                            </Button>
                        </Grid>
                })}
            </Grid>
        </>
    )
}