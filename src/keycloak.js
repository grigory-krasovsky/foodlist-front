import Keycloak from "keycloak-js";
const keycloak = new Keycloak({
    url: "http://localhost:18080",
    realm: "foodlist-realm",
    clientId: "foodlist",
});

export default keycloak;