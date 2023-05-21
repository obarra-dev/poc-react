import { NoteCardMeta } from "../NoteCardMeta/NoteCardMeta";
import { NoteDetailInfo } from "./NoteDetailInfo";
import "./IssueDetailsDialog.scss";
import {
  LiftDialogCloseHandler,
  LiftModal,
} from "../../../LiftModal/LiftModal";
import { Undefinable } from "../../../../utils/nullable";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { isUndefined } from "../../../../utils/isUndefinined";
import { FilterableNote, JobSummary } from "../../../../utils/filterableNote";
import { CustomMarkdown } from "../../../CustomMarkdown/CustomMarkdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function IssueDetailsDialog({
  note,
  jobSummary,
  githubOwner,
  githubRepo,
  onClose,
  isOpen,
}: ResultIssueDetailsDialogProps) {
  if (isUndefined(note)) {
    return null;
  }

  const toolNoteDescription =
    note.description + buildMoreDetailsLinkForMarkdown(note.detailsUrl);

  return (
    <LiftModal isOpen={isOpen} onClose={onClose} title={note.title}>
      <div className="lift-issue-details-dialog__status">
        <div className="lift-issue-details-dialog__status-row">
          <div className="lift-issue-details-dialog__tool-type-display">
            <h3 className="nx-h3">Tool</h3>
          </div>
        </div>

        <div className="lift-issue-details-dialog__tool-text lift-issue-details-dialog__status-row">
          {note.toolName}
        </div>
      </div>

      <NoteDetailInfo note={note} />

      <div className="lift-issue-details-dialog__description">
        <h3 className="nx-h3">Description</h3>
        <CustomMarkdown
          content={toolNoteDescription}
          className="lift-issue-details-dialog__tool-note-markdown"
        />
      </div>

      <div className="lift-issue-details-dialog__footer">
        <NoteCardMeta
          note={note}
          jobSummary={jobSummary}
          githubOwner={githubOwner}
          githubRepo={githubRepo}
        />

        <span className="lift-node-card-meta__tool-display">
          <FontAwesomeIcon icon={faTools} /> {note.toolName}
        </span>
      </div>
    </LiftModal>
  );

  function buildMoreDetailsLinkForMarkdown(
    detailsUrl: Undefinable<string>
  ): string {
    if (isUndefined(detailsUrl)) {
      return "";
    }

    return ` <a href="${detailsUrl}" target="_blank" rel="noopener noreferrer">(More Details)</a>`;
  }
}

interface ResultIssueDetailsDialogProps {
  note: Undefinable<FilterableNote>;
  jobSummary: JobSummary;
  githubOwner?: string;
  githubRepo?: string;
  onClose: LiftDialogCloseHandler;
  isOpen: boolean;
}
