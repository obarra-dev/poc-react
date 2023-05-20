
import { createBrowserRouter } from "react-router-dom";

// TODO import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
// TODO import { ErrorPage } from "./components/ErrorPage/ErrorPage";

import { TrialReportPage } from "./components/TrialReportPage/TrialReportPage";

import { ResultIdentifier } from "./services/api/sbomApi/sbomApi";
import { NotFoundProvider } from "./components/NotFoundPage/NotFoundProvider";



export function trialRoute({ repoHost, owner, repo, jobId }: ResultIdentifier) {
  return `/trial/${repoHost}/${owner}/${repo}/${jobId}`;
}


function RoutPa() {
  return  <TrialReportPage/>
}
// TODO move NotFoundProvider to main
export const router = createBrowserRouter([
  {
    path: "/trial/:repoHost/:owner/:repo/:jobId",
    element:      <NotFoundProvider>
    <RoutPa/>
    </NotFoundProvider>
,
  },
  {
    path: "about",
    element: <div>About</div>,
  },
  {
    path: "/not-found",
    element: <h1>not found</h1>,
  },
  {
    path: "/error",
    element: <h1>Error</h1>,
  },
]);
