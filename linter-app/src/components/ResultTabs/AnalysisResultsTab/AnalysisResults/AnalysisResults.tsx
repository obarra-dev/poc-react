import React, { useEffect, useState } from "react";
// TODO import "./AnalysisResults.scss";
import { ResultIdentifier } from "../../../../services/api/sbomApi/sbomApi";

import { IssuesArea } from "./IssueArea";
import { FilteredNotes, JobSummary, ToolNote } from "../../../../utils/filterableNote";


export const AnalysisResults: React.FC<{
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  toolNotes: ToolNote[];
}> = ({ toolNotes, jobSummary, resultIdentifier }) => {

// TODO   const filteredNotes = useFilteredNotes(fixRates || {}, toolNotes);

const filteredNotes: FilteredNotes = { notes : []};

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
        filteredNotes={filteredNotes}
      />
    </>
  );
}

export interface ResultTabBottomSectionProps {
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  filteredNotes: FilteredNotes;
}

function ResultTabBottomSection({
  resultIdentifier,
  jobSummary,
  filteredNotes,
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
