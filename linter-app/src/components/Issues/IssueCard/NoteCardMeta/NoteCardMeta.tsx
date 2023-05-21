import "./NoteCardMeta.scss";
import { ExternalLink } from "../../../ExternalLink/ExternalLink";
import { faFileAlt, faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { isNotNullOrUndefined } from "../../../../utils/isNotNullOrUndefined";
import { Nullable, Undefinable } from "../../../../utils/nullable";
import { isNullOrUndefined } from "../../../../utils/isNullOrUndefined";
import { FilterableNote, JobSummary, ToolNote } from "../../../../utils/filterableNote";
import { Tooltip } from "@mui/material";

export function NoteCardMeta({
  note,
  jobSummary,
  githubOwner,
  githubRepo,
}: NoteCardMetaProps) {
  const ref = getCommitHash();
  const fileLink = makeGitHubFileLink(githubOwner, githubRepo, ref, note);

  const file = note.file || "";
  const paths = file.split("/");
  const tnFile =
    paths.length > 2 ? `${paths[0]}/.../${paths[paths.length - 1]}` : file;
  const colNum = note.column;

  return (
    <div className="lift-node-card-meta">
      <div className="lift-node-card-meta__file-info">
        {fileLink ? (
          <Tooltip title={file}>
            <span>
              <ExternalLink
                to={fileLink}
                eventLabel="githubSource"
                className="lift-node-card-meta__file-link"
              >
                <FontAwesomeIcon
                  className="lift-node-card-meta__file-icon"
                  icon={faLink}
                />{" "}
                {tnFile} {note.lineNumber}
                {colNum !== undefined && colNum > 0 ? `:${colNum}` : null}
              </ExternalLink>
            </span>
          </Tooltip>
        ) : (
          <div className="lift-node-card-meta__file-no-link">
            <FontAwesomeIcon
              className="lift-node-card-meta__line-number-icon"
              icon={faFileAlt}
            />{" "}
            {tnFile} {note.lineNumber}
            {note.column !== undefined && note.column > 0
              ? `:${note.column}`
              : null}
          </div>
        )}
      </div>
    </div>
  );

  function makeGitHubFileLink(
    owner: Undefinable<string>,
    repo: Undefinable<string>,
    ref: Undefinable<string>,
    { lineNumber, file }: ToolNote
  ): Nullable<string> {
    if (
      isNullOrUndefined(githubOwner) ||
      isNullOrUndefined(githubRepo) ||
      isNullOrUndefined(ref)
    ) {
      return null;
    }

    return isNotNullOrUndefined(lineNumber)
      ? `https://github.com/${owner}/${repo}/blob/${ref}/${file}#L${lineNumber}`
      : `https://github.com/${owner}/${repo}/blob/${ref}/${file}`;
  }

  function getCommitHash() {
      return jobSummary.sourceCommit;
  }
}

interface NoteCardMetaProps {
  note: FilterableNote;
  jobSummary: JobSummary;
  githubOwner?: string;
  githubRepo?: string;
}
