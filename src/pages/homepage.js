import React from 'react';
import {useKeycloak} from "@react-keycloak/web";
import Week from "../containers/week";
import {Grid} from "@mui/material";


const Homepage = () => {
    const {keycloak} = useKeycloak();

    // <Grid container sx={{backgroundColor: 'primary.main'}}>
    //     <Grid xs={12} item height="7vh">
    //         navbar
    //     </Grid>
    // </Grid>

    return (
        <Grid container sx={{backgroundColor: 'primary.main'}}>
            <Grid xs={12} item height="7vh">
                {!keycloak.authenticated && (
                    <button
                        type="button"
                        className="text-blue-800"
                        onClick={() => {
                            keycloak.login();
                        }}
                    >
                        Login
                    </button>
                )}

                {!!keycloak.authenticated && (
                    <>
                        <button
                            type="button"
                            className="text-blue-800"
                            onClick={() => keycloak.logout()}
                        >
                            Logout test ({keycloak.tokenParsed.preferred_username})
                        </button>
                    </>
                )}
            </Grid>

        </Grid>
    );
};

export default Homepage;
