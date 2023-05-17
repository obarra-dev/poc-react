import React from 'react'
import ReactDOM from 'react-dom/client'
import { TrialReportPage } from './components/TrialReportPage/TrialReportPage.tsx'

const repoHost = "github.com";
const owner = "obarra";
const repo = "vscode-iq-plugin";
const jobId= "01H0KFFF2TJPANE3XFGMHGTMM7";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <TrialReportPage repoHost={repoHost} owner={owner} repo={repo} jobId={jobId}/>
  </React.StrictMode>,
)
