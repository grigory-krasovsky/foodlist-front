import React from "react";
import Typography from "@mui/material/Typography";
import {Button, Grid, List, ListItem, Stack} from "@mui/material";
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
                        <Grid item xs={3} id={'test4'}>
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
                        </Grid>
                        <Box
                            maxWidth={'53vw'}
                            sx={{backgroundColor: "lightblue"}}>

                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    m: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 'fit-content',
                                    maxHeight: '23vh',
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                    mt: '10vh'
                                }}
                            >
                                <List>
                                    <ListItem>
                                        1) Tomatoes
                                    </ListItem>
                                    <ListItem>
                                        2) Eggs
                                    </ListItem>
                                    <ListItem>
                                        3) Tomatoes eggs tomatoes eggs tomatoes
                                    </ListItem>
                                    <ListItem>
                                        4) Tomatoes eggs tomatoes
                                    </ListItem>
                                </List>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                d
                            </Box>

                            <Box
                                sx={{
                                    backgroundColor: 'white',
                                    m: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 'fit-content',
                                    maxHeight: '56vh',
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                }}
                            >
                                <List>
                                    <ListItem>
                                        1) Tomatoes
                                    </ListItem>
                                    <ListItem>
                                        2) Eggs
                                    </ListItem>
                                    <ListItem>
                                        3) Tomatoes eggs tomatoes eggs tomatoes
                                    </ListItem>
                                    <ListItem>
                                        4) Tomatoes eggs tomatoes
                                    </ListItem>
                                </List>

                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                dLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                ddLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                ddLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                ddLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea
                                commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                                esse cillum
                                dolore eu fugiat nulla pariatur.
                                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
                                d
                            </Box>

                        </Box>
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
                      overflowY: "scroll"
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