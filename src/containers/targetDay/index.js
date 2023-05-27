import React, {useEffect, useState} from "react";
import Typography from "@mui/material/Typography";
import {Button, Chip, Grid, List, ListItem, Stack} from "@mui/material";
import {motion} from "framer-motion"
import Box from "@mui/material/Box";
import {getCourses} from "../../api/actions";

export default function TargetDay(props) {


    const [meals, setMeals] = useState([
        {
            name: "Breakfast",
            courses: []
        },
        {
            name: "Lunch",
            courses: []
        },
        {
            name: "Dinner",
            courses: []
        }
    ]);

    const [currentCourse, setCurrentCourse] = useState(null);
    const [currentMeal, setCurrentMeal] = useState(null);
    const [courseArray, setCourseArray] = useState([
        {
            id: "",
            ingredients: [{id: "", name: "", uuid: ""}],
            name: "",
            recipe: {},
            uuid: ""
        }
    ]);

    useEffect(() => {

        getCourses(setCourseArray);

    }, []);


    const [recipe, setRecipe] = useState(courseArray[0]);

    const handleChangeMeal = (mealName) => {
        let newDays = [...props.days];
        newDays[props.index]["currentMeal"] = mealName;
        props.setDays(newDays);
    }

    const handleCourseChipClick = (course) => {
        setCurrentCourse(course)
    }

    const handleAddCourse = () => {
        // let newMeals = [...meals].filter(course => course.id !== currentCourse.id);
        // newCourseArray.push(currentCourse);
        // setCourseArray(newCourseArray);
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
                            {meals.map((meal, i) => {
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

                            {currentCourse && <Stack direction={'row'}>
                                <Box
                                    sx={{
                                        backgroundColor: 'white',
                                        display: "flex",
                                        flexDirection: "column",
                                        height: 'fit-content',
                                        maxHeight: '23vh',
                                        overflow: "hidden",
                                        overflowY: "scroll",
                                        mt: '10vh',
                                        // p: '1vh',
                                        borderTopLeftRadius: '10px',
                                        borderBottomLeftRadius: '10px',
                                    }}
                                    ml={2}
                                >
                                    <Typography
                                        p={2}
                                        align={'justify'}>
                                        {currentCourse.text}

                                    </Typography>

                                </Box>
                                <Box minWidth={'15vw'}
                                     sx={{
                                         backgroundColor: "white",
                                         borderTopRightRadius: '10px',
                                         borderBottomRightRadius: '10px',
                                     }}
                                     mt={'10vh'}
                                     mr={2}
                                     pt={2}
                                     pr={2}
                                     pl={2}
                                >
                                    <Grid container spacing={2} justifyContent={'end'} alignItems={'end'}
                                          sx={{
                                              backgroundColor: 'white',
                                              height: '100%'
                                          }}>
                                        <Grid item>
                                            <Button
                                                color={'info'}
                                                variant={'contained'}
                                                onClick={handleAddCourse}
                                                sx={{borderRadius: '10px'}}>
                                                Add course
                                            </Button>
                                        </Grid>
                                        {/*<Grid item>*/}
                                        {/*    <Button color={'info'} variant={'contained'} sx={{borderRadius: '10px'}}>*/}
                                        {/*        test*/}
                                        {/*    </Button>*/}
                                        {/*</Grid>*/}
                                    </Grid>


                                </Box>
                            </Stack>}


                            <Box
                                sx={{
                                    minWidth: '51vw',
                                    backgroundColor: 'white',
                                    m: 2,
                                    display: "flex",
                                    flexDirection: "column",
                                    height: 'fit-content',
                                    maxHeight: '56vh',
                                    overflow: "hidden",
                                    overflowY: "scroll",
                                    borderRadius: "10px"
                                }}
                            >
                                <Stack spacing={0} direction={'row'} sx={{flexWrap: 'wrap'}}>
                                    {courseArray.map(course => (
                                        <Chip sx={{m: 2}}
                                              key={course.uuid}
                                              label={course.name}
                                              onClick={() => handleCourseChipClick(course)}
                                              size={'medium'}>
                                        </Chip>
                                    ))}
                                </Stack>

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
            </Grid>
        </>
    )
}