import React, { useEffect, useState } from "react";
// TODO import "./AnalysisResults.scss";
import { ResultIdentifier } from "../../../../utils/models";

import { IssuesArea } from "./IssueArea";
import { JobSummary, ToolNote } from "../../../../utils/filterableNote";

export const AnalysisResults: React.FC<{
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  toolNotes: ToolNote[];
}> = ({ toolNotes, jobSummary, resultIdentifier }) => {
  // TODO   const filteredNotes = useFilteredNotes(fixRates || {}, toolNotes);

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
        toolNotes={toolNotes}
      />
    </>
  );
};

export interface ResultTabBottomSectionProps {
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  toolNotes: ToolNote[];
}

function ResultTabBottomSection({
  resultIdentifier,
  jobSummary,
  toolNotes,
}: ResultTabBottomSectionProps) {
  return (
    <div className="lift-result-tab__section">
      <IssuesArea
        resultIdentifier={resultIdentifier}
        jobSummary={jobSummary}
        toolNotes={toolNotes}
      />
    </div>
  );
}
