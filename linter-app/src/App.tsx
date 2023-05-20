import React from "react";

// TODO import history from "./history";

import { RouterProvider } from "react-router-dom";
import { router } from "./Routes";
import { NotFoundProvider } from "./components/NotFoundPage/NotFoundProvider";
//TODO import { Dashboard } from "./components/Dashboard/Dashboard";
// TODO import { NotFoundProvider } from "./components/NotFoundPage/NotFoundProvider";

// TODO <Router history={history}>

/*
const App: React.FC = () => {
  return (
            <NotFoundProvider>
              <RouterProvider router={router} />
            </NotFoundProvider>
  );
};
*/

function App() {
  return  (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App;
