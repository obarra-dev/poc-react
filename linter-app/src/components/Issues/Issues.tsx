import { IssueCard } from "./IssueCard/IssueCard";
import { ResultIdentifier } from "../../utils/models";
import { Undefinable } from "../../utils/nullable";
import { JobSummary, ToolNote } from "../../utils/filterableNote";
// TODO import { NxPagination } from "@sonatype/react-shared-components";

export interface IssuesProps {
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  toolNotes: ToolNote[];
  className: Undefinable<string>;
}

export function Issues({
  resultIdentifier,
  jobSummary,
  toolNotes,
  className,
}: IssuesProps) {
  return (
    <div className={className}>
      {toolNotes.map((toolNote: ToolNote, ndx: number) => {
        return (
          <IssueCard
            className="lift-issues__issue-card"
            toolNote={toolNote}
            jobSummary={jobSummary}
            githubOwner={resultIdentifier.owner}
            githubRepo={resultIdentifier.repo}
            key={ndx}
          />
        );
      })}
    </div>
  );
}
