import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';

// TODO  import * as serviceWorker from "./serviceWorker";
// TODO import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
// TODO import { getUniqueUserIdForSession } from "./services/analytics/analytics";
// TODO import { getConfig } from "./config";


const repoHost = "github.com";
const owner = "obarra";
const repo = "vscode-iq-plugin";
const jobId= "01H0KFFF2TJPANE3XFGMHGTMM7";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
        <App />
  </React.StrictMode>,
)
