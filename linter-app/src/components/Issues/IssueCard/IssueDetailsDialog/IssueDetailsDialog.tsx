import { NoteCardMeta } from "../NoteCardMeta/NoteCardMeta";
import { NoteDetailInfo } from "./NoteDetailInfo";
import "./IssueDetailsDialog.scss";
import { Undefinable } from "../../../../utils/nullable";
import { faTools } from "@fortawesome/free-solid-svg-icons";
import { isUndefined } from "../../../../utils/isUndefinined";
import { CustomMarkdown } from "../../../CustomMarkdown/CustomMarkdown";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CustomModal, CustomModalCloseHandler } from "../../../CustomModal/CustomModal";
import { JobSummary, ToolNote } from "../../../../utils/filterableNote";

export function IssueDetailsDialog({
  toolNote,
  jobSummary,
  githubOwner,
  githubRepo,
  onClose,
  isOpen,
}: ResultIssueDetailsDialogProps) {
  if (isUndefined(toolNote)) {
    return null;
  }

  const toolNoteDescription =
  toolNote.description + buildMoreDetailsLinkForMarkdown(toolNote.detailsUrl);

  return (
    <CustomModal isOpen={isOpen} onClose={onClose} title={toolNote.title}>
      <div className="lift-issue-details-dialog__status">
        <div className="lift-issue-details-dialog__status-row">
          <div className="lift-issue-details-dialog__tool-type-display">
            <h3 className="nx-h3">Tool</h3>
          </div>
        </div>

        <div className="lift-issue-details-dialog__tool-text lift-issue-details-dialog__status-row">
          {toolNote.toolName}
        </div>
      </div>

      <NoteDetailInfo note={toolNote} />

      <div className="lift-issue-details-dialog__description">
        <h3 className="nx-h3">Description</h3>
        <CustomMarkdown
          content={toolNoteDescription}
          className="lift-issue-details-dialog__tool-note-markdown"
        />
      </div>

      <div className="lift-issue-details-dialog__footer">
        <NoteCardMeta
          toolNote={toolNote}
          jobSummary={jobSummary}
          githubOwner={githubOwner}
          githubRepo={githubRepo}
        />

        <span className="lift-node-card-meta__tool-display">
          <FontAwesomeIcon icon={faTools} /> {toolNote.toolName}
        </span>
      </div>
    </CustomModal>
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
  toolNote: Undefinable<ToolNote>;
  jobSummary: JobSummary;
  githubOwner?: string;
  githubRepo?: string;
  onClose: CustomModalCloseHandler;
  isOpen: boolean;
}
