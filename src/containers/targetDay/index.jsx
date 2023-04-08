import React from "react";
import Typography from "@mui/material/Typography";
import {Button, Grid} from "@mui/material";
import {motion} from "framer-motion"
import Box from "@mui/material/Box";
import SearchContainer from "./searchContainer";

export default function TargetDay(props) {

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
                initial={props.leftMotion ? {x: "-4vw"} : {x: "4vw"}}
                animate={{x: 0}}
                transition={{duration: 1}}
            >
                <Grid container direction={'column'} height={'93vh'} sx={{backgroundColor: "lightblue"}} id={"test"}>
                    <Grid container>
                        <Grid item width={"4vw"} className={'outer-rotation'} sx={{backgroundColor: "turquoise"}}>
                            <motion.div
                                initial={{opacity: 0}}
                                animate={{opacity: 1}}
                                transition={{duration: 1}}
                            >
                            <Typography className={'rotate inner-rotation'}>
                                {props.days[props.index].name.toUpperCase()}
                            </Typography>
                            </motion.div>
                        </Grid>
                        <Grid item xs={3}>
                            {MEALS.map((meal, i) => {
                                return (
                                    props.days[props.index].currentMeal !== meal.name ?
                                        <MealTitle
                                            key={i}
                                            handleChangeMeal={handleChangeMeal}
                                            meal={meal}
                                        /> : <MealMenu
                                            key={i}
                                            meal={meal}
                                        />
                                )
                            })}
                        </Grid><Grid item justifyContent="center"
                                     alignItems="center"
                                     display={'flex'}
                                     sx={{backgroundColor: "brown"}}
                                     xs={7}>
                        <SearchContainer/>
                    </Grid>
                    </Grid>

                </Grid>
            </motion.div>

        </>

    )
}

const MealTitle = (props) => {
    return (
        <Grid item height={'5vh'} sx={{backgroundColor: "white"}}>
            <Button
                color={'success'}
                sx={{height: '100%', width: '100%'}}
                onClick={() => props.handleChangeMeal(props.meal.name)}
            >
                {props.meal.name}
            </Button>
        </Grid>
    )
}

const MealMenu = (props) => {
    return (
        <>
            <Box height={'5vh'} sx={{backgroundColor: "gray"}} display="flex"
                 justifyContent="center"
                 alignItems="center">
                <Typography>
                    {props.meal.name.toUpperCase()}
                </Typography>
            </Box>
            <Grid item height={'78vh'} sx={{backgroundColor: "darkorange"}}
                  style={{
                      overflow: "hidden",
                      overflowY: "scroll" // added scroll
                  }}>

                <Box height='100px'
                     sx={{backgroundColor: "black"}}>

                </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box><Box height='100px'
                           sx={{backgroundColor: "black"}}>

            </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box><Box height='100px'
                           sx={{backgroundColor: "black"}}>

            </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box><Box height='100px'
                           sx={{backgroundColor: "black"}}>

            </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box><Box height='100px'
                           sx={{backgroundColor: "black"}}>

            </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box><Box height='100px'
                           sx={{backgroundColor: "black"}}>

            </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box><Box height='100px'
                           sx={{backgroundColor: "black"}}>

            </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box><Box height='100px'
                           sx={{backgroundColor: "black"}}>

            </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box><Box height='100px'
                           sx={{backgroundColor: "black"}}>

            </Box>
                <Box height='100px'
                     sx={{backgroundColor: "white"}}>

                </Box>
            </Grid>
        </>
    )
}