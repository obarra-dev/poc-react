import { ResultIdentifier } from "../../../../services/api/sbomApi/sbomApi";
import { FilteredNotes, JobSummary } from "../../../../utils/filterableNote";

import { Issues } from "../../../Issues/Issues";

export interface IssuesAreaProps {
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  filteredNotes: FilteredNotes;
}
export function IssuesArea({
  resultIdentifier,
  filteredNotes,
  jobSummary,
}: IssuesAreaProps) {
  const { notes } = filteredNotes;

  return (
    <div className="lift-result-tab__issues-area">
     <Issues
          resultIdentifier={resultIdentifier}
          notes={notes}
          jobSummary={jobSummary}
          className={"lift-result-tab__issues-list"}
        />
    </div>
  );

}
