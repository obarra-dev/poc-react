import React, { useEffect, useState } from "react";
// TODO import "./AnalysisResults.scss";
import { ResultIdentifier } from "../../../../utils/models";

import { IssuesArea } from "./IssueArea";
import { FilterableNote, FilteredNotes, JobSummary, ToolNote, ToolNoteDtoPhaseEnum } from "../../../../utils/filterableNote";


export const AnalysisResults: React.FC<{
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  toolNotes: ToolNote[];
}> = ({ toolNotes, jobSummary, resultIdentifier }) => {
function transform(t: ToolNote ) : FilterableNote {
  return {...t, tnPhaseText: "tnPhaseText", tnToolTag: "tnToolTag"};
}

const filteredNotes: FilteredNotes = { notes : toolNotes.map(transform)};

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
