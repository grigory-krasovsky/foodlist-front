import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {Button, Grid, Link, Stack} from "@mui/material";
import { useKeycloak } from "@react-keycloak/web";

export default function FoodlistNavbar() {

    const { keycloak, initialized } = useKeycloak();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const MyLink = props => <Link to="/" {...props} />

    return (
        <Grid container sx={{backgroundColor: 'primary.main'}}>
            <Grid xs={12} item height="7vh">
                {/*{!keycloak.authenticated && (*/}
                {/*    <Button*/}
                {/*        type="button"*/}
                {/*        className="text-blue-800"*/}
                {/*        onClick={() => {*/}
                {/*            keycloak.login();*/}
                {/*            window.location.href("localhost:3000/secured")*/}
                {/*        }}*/}
                {/*    >*/}
                {/*        Login*/}
                {/*    </Button>*/}
                {/*)}*/}

                {!!keycloak.authenticated && (
                    <Button
                        component={MyLink}
                        color={'warning'}

                        // sx={{height: '100%', width: '100%'}}
                        onClick={
                        () => {
                            keycloak.logout();

                        }
                    }
                    >
                        Logout ({keycloak.tokenParsed.preferred_username})
                    </Button>
                )}
            </Grid>
        </Grid>
    );
}