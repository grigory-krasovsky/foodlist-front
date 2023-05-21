import { useKeycloak } from "@react-keycloak/web";
import {Navigate} from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { keycloak } = useKeycloak();

    const isLoggedIn = keycloak.authenticated === true;
    const isLoggedOut = keycloak.authenticated === false;

    return <>
        {isLoggedIn && children}
        {isLoggedOut && <Navigate to={"/"}/>}
    </>
};

export default PrivateRoute;