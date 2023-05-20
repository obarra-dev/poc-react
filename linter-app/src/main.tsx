import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx';

import { Provider } from "react-redux";
import { store } from "./store/store";
import { ErrorBoundary } from './components/ErrorBoundary/ErrorBoundary.tsx';

// TODO  import * as serviceWorker from "./serviceWorker";
// TODO import { ErrorBoundary } from "./components/ErrorBoundary/ErrorBoundary";
// TODO import { getUniqueUserIdForSession } from "./services/analytics/analytics";
// TODO import { getConfig } from "./config";


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <ErrorBoundary> */}
      <Provider store={store}>
          <App />
      </Provider>
  </React.StrictMode>,
)
