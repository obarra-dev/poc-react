import classNames from "classnames";
import { GroupedNote } from "../hooks/useNotesGroupedBy";
import { JobSummary } from "../../../utils/filterableNote";

export function IssueCard({
  groupedNote,
  jobSummary,
  githubOwner,
  githubRepo,
  className,
}: IssueCardProps) {

  return (
    <>
      <div className={classNames("lift-issue-card", "nx-card", className)}>

        <div className="lift-issue-card__meta-data-area">
         {groupedNote.title}
        </div>
      </div>
    </>
  );
}

export interface IssueCardProps {
  groupedNote: GroupedNote;
  jobSummary: JobSummary;
  githubOwner?: string;
  githubRepo?: string;
  className?: string;
}
