// must match deployment/service/puv-frontend/default.conf.template
// and web/console/app/src/setupProxy.js
import { isUndefined } from "./utils/isUndefinined";

declare const CONFIG: {
  REACT_APP_GH_MARKETPLACE_URL: string;
  REACT_APP_GH_APP_URL: string;
  REACT_APP_ACCOUNT_AUTH: string;
  REACT_APP_INTEGRATION_AUTH: string;
  REACT_APP_SONATYPE_AUTH_PROVIDER_URL: string;
  PUBLIC_URL: string;
  REACT_APP_ONBOARDING_FLAG_ENABLED: string;
  REACT_GOOGLE_RECAPTCHA_V2_SITE_KEY: string;
};

export function getConfig(key: keyof typeof CONFIG): string {
  if (!window.CONFIG) {
    throw new Error("Missing global CONFIG object");
  }
  if (isUndefined(window.CONFIG[key])) {
    throw new Error(`Missing global CONFIG key ${key}`);
  }
  return window.CONFIG[key];
}
