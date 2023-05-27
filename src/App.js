import React from "react";
import './App.css';
import {ReactKeycloakProvider} from "@react-keycloak/web";
import keycloak from "./keycloak";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PrivateRoute from "./helpers/PrivateRoute";
import FoodlistNavbar from "./containers/navbar";
import Week from "./containers/week";
import './styles/common.css'
import Homepage from "./pages/homepage";


function App() {
    return (
        <>
            <ReactKeycloakProvider authClient={keycloak}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            exact
                            path="/"
                            element={<Homepage/>}
                        />
                        <Route
                            path="/secured"
                            element={
                                <PrivateRoute>
                                    <Week/>
                                </PrivateRoute>
                            }
                        />
                    </Routes>

                </BrowserRouter>
            </ReactKeycloakProvider>
        </>

    );
}

export default App;
