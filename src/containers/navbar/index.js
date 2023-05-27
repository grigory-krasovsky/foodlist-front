import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button, Grid, Link, Stack} from "@mui/material";
import {useKeycloak} from "@react-keycloak/web";

export default function FoodlistNavbar() {

    const {keycloak} = useKeycloak();

    const isLoggedIn = keycloak.authenticated === true;
    const isLoggedOut = keycloak.authenticated === 'undefined' || keycloak.authenticated === false;

    return (
        <Grid container sx={{backgroundColor: 'primary.main'}}>
            <Grid xs={12} item height="7vh" container justifyContent='flex-end'>

                {isLoggedOut && (
                    <Box display={'flex'}>
                        <Button
                            color={'warning'}
                            onClick={() => {
                                keycloak.login();
                            }}
                        >
                            Login
                        </Button>
                    </Box>

                )}

                {isLoggedIn && (
                    <Box display={'flex'}>
                        <Button
                            color={'warning'}
                            onClick={
                                () => {
                                    keycloak.logout();

                                }
                            }
                        >
                            Logout test ({keycloak.tokenParsed.preferred_username})
                        </Button>
                    </Box>
                )}
            </Grid>
        </Grid>
    );
}