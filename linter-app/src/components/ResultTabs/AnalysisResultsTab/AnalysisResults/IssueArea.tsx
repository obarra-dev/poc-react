import { ResultIdentifier } from "../../../../utils/models";
import { JobSummary, ToolNote } from "../../../../utils/filterableNote";

import { Issues } from "../../../Issues/Issues";

export interface IssuesAreaProps {
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  toolNotes: ToolNote[];
}
export function IssuesArea({
  resultIdentifier,
  toolNotes,
  jobSummary,
}: IssuesAreaProps) {
  return (
    <div className="lift-result-tab__issues-area">
      <Issues
        resultIdentifier={resultIdentifier}
        toolNotes={toolNotes}
        jobSummary={jobSummary}
        className={"lift-result-tab__issues-list"}
      />
    </div>
  );
}
