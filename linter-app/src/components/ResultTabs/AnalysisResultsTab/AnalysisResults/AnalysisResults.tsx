import React, { useEffect, useState } from "react";
// TODO import "./AnalysisResults.scss";
import { ResultIdentifier } from "../../../../services/api/sbomApi/sbomApi";

import { IssuesArea } from "./IssueArea";
import { JobSummary, ToolNote } from "../../../../utils/filterableNote";


export const AnalysisResults: React.FC<{
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  toolNotes: ToolNote[];
}> = ({ toolNotes, jobSummary, resultIdentifier }) => {

// TODO   const filteredNotes = useFilteredNotes(fixRates || {}, toolNotes);

let filteredNotes: any;

  /*TODO
  if (isReportWithNoIssuesFound()) {
    return <NoIssuesFound />;
  }
  */

  return (
    <>
      <ResultTabBottomSection
        resultIdentifier={resultIdentifier}
        jobSummary={jobSummary}
        filterOpen={true}
      />
    </>
  );
}

export interface ResultTabBottomSectionProps {
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  filterOpen: boolean;
}

function ResultTabBottomSection({
  resultIdentifier,
  jobSummary,
}: ResultTabBottomSectionProps) {
  return (
    <div className="lift-result-tab__section">
      <IssuesArea
        resultIdentifier={resultIdentifier}
        jobSummary={jobSummary}
        filteredNotes={filteredNotes}
      />
    </div>
  );
}
