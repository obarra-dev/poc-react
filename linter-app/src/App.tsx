import React from "react";

// TODO import history from "./history";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { NotFoundProvider } from "./components/NotFoundPage/NotFoundProvider";
//TODO import { Dashboard } from "./components/Dashboard/Dashboard";
// TODO import { NotFoundProvider } from "./components/NotFoundPage/NotFoundProvider";

// TODO <Router history={history}>

function App() {
  return <RouterProvider router={router} />;
}


/*

function App() {
  return (
            <NotFoundProvider>
              <RouterProvider router={router} />
            </NotFoundProvider>
  );
}

*/

export default App;
