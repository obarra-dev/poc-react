import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';

// TODO  import * as serviceWorker from "./serviceWorker";
// TODO import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
// TODO import { getUniqueUserIdForSession } from "./services/analytics/analytics";
// TODO import { getConfig } from "./config";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
        <App />
  </React.StrictMode>,
)
