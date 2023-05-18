
import { createBrowserRouter } from "react-router-dom";

// TODO import { NotFoundPage } from "./components/NotFoundPage/NotFoundPage";
// TODO import { ErrorPage } from "./components/ErrorPage/ErrorPage";

import { TrialReportPage } from "./components/TrialReportPage/TrialReportPage";

import { ResultIdentifier } from "./services/api/sbomApi/sbomApi";



export function trialRoute({ repoHost, owner, repo, jobId }: ResultIdentifier) {
  return `/trial/${repoHost}/${owner}/${repo}/${jobId}`;
}


export const router = createBrowserRouter([
  {
    path: "/trial/:repoHost/:owner/:repo/:jobId",
    element: <TrialReportPage/>,
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
