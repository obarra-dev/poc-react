import { LineNumberDisplay } from "./LineNumberDisplay";
import { ToolNote } from "../../../../utils/filterableNote";

export function NoteDetailInfo({ note }: NoteDetailInfoProps) {
  const file = note.file;
  const lineNumber = note.lineNumber;

  return (
    <div className="puv-result-issue-details-dialog__detail-info">
      <div className="puv-result-issue-details-dialog__detail-line-number">
        <h3 className="nx-h3">File</h3>
        <span>{file}</span>
      </div>

      <LineNumberDisplay
        lineNumber={lineNumber}
        className="puv-result-issue-details-dialog__detail-line-number"
      />
    </div>
  );
}

interface NoteDetailInfoProps {
  note: ToolNote;
}
