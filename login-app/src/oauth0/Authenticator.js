import * as Auth0 from "auth0-js";
import config from '../auth_config.json';


export const auth0 = new Auth0.WebAuth({
    domain: config.domain,
    clientID: config.clientId,
    redirectUri: config.redirectUri,
    // audience: config.audience,
    responseType: "id_token token",
    scope: "openid profile email"
  });
  