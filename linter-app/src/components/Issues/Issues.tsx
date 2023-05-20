import { IssueCard } from "./IssueCard/IssueCard";
import { useState } from "react";
import { ResultIdentifier } from "../../utils/models";
import { Undefinable } from "../../utils/nullable";
import { FilterableNote, JobSummary } from "../../utils/filterableNote";
import { GroupedNote, useNotesGroupedBy } from "./hooks/useNotesGroupedBy";
// TODO import { NxPagination } from "@sonatype/react-shared-components";

export interface IssuesProps {
  resultIdentifier: ResultIdentifier;
  jobSummary: JobSummary;
  notes: FilterableNote[];
  className: Undefinable<string>;
}

export function Issues({
  resultIdentifier,
  jobSummary,
  notes,
  className,
}: IssuesProps) {
  const notesGroupedBy = useNotesGroupedBy(notes);
  const pageSize = 20;
  const [page, setPage] = useState<number>(0);
  const visibleNotes = notesGroupedBy.slice(
    page * pageSize,
    (page + 1) * pageSize
  );

  return (
    <div className={className}>
      {visibleNotes.map((groupedNote: GroupedNote, ndx: number) => {
        return (
          <IssueCard
            className="lift-issues__issue-card"
            groupedNote={groupedNote}
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
