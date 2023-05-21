import classNames from "classnames";
import { GroupedNote } from "../hooks/useNotesGroupedBy";
import { FilterableNote, JobSummary } from "../../../utils/filterableNote";
import { IssueCardTitle } from "./IssueCardTitle/IssueCardTitle";
import { CustomMarkdown } from "../../CustomMarkdown/CustomMarkdown";
import { NoteCardMeta } from "./NoteCardMeta/NoteCardMeta";
import { faChevronRight, faTools } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { Link } from "@mui/material";
import { useState } from "react";
import { Undefinable } from "../../../utils/nullable";
import { IssueDetailsDialog } from "./IssueDetailsDialog/IssueDetailsDialog";



export function IssueCard({
  groupedNote,
  jobSummary,
  githubOwner,
  githubRepo,
  className,
}: IssueCardProps) {
  const [detailOpen, setDetailOpen] = useState(false);
  const [noteToOpen, setNoteToOpen] = useState<Undefinable<FilterableNote>>();

  return (
    <>
      <div className={classNames("lift-issue-card", "nx-card", className)}>
        <IssueCardTitle groupedNote={groupedNote} />

        <CustomMarkdown
          content={groupedNote.description.split("\n").slice(0, 2).join("\n")}
          className="lift-issue-card__markdown-description"
        />
        <div className="lift-issue-card__meta-data-area">
          <NoteCardMeta
            note={groupedNote}
            jobSummary={jobSummary}
            githubOwner={githubOwner}
            githubRepo={githubRepo}
          />

          <span className="lift-node-card-meta__tool-display">
            <FontAwesomeIcon icon={faTools} /> {groupedNote.toolName}
          </span>

          <Link
            className="lift-issue-card__show-details-link"
            href="#"
            onClick={(e) => {
              setNoteToOpen(groupedNote);
              e.preventDefault();
              setDetailOpen(true);
            }}
          >
            Show Details
            <FontAwesomeIcon icon={faChevronRight} />
          </Link>
        </div>
{
  /**
   

        <IssueCardInstanceExpansion
          groupedNote={groupedNote}
          jobSummary={jobSummary}
          githubOwner={githubOwner}
          githubRepo={githubRepo}
          setNoteToOpen={setNoteToOpen}
          setDetailOpen={setDetailOpen}
        />

           */
}
      </div>

      <IssueDetailsDialog
        note={noteToOpen}
        jobSummary={jobSummary}
        githubOwner={githubOwner}
        githubRepo={githubRepo}
        isOpen={detailOpen}
        onClose={() => setDetailOpen(false)}
      />
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
