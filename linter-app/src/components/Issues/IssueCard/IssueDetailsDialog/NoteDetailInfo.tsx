import { LineNumberDisplay } from "./LineNumberDisplay";
import { FilterableNote } from "../../../../utils/filterableNote";

export function NoteDetailInfo({ note }: NoteDetailInfoProps) {
  const file = note.file;
  const lineNumber = note.lineNumber;

  return (
    <div className="lift-result-issue-details-dialog__detail-info">
      <div className="lift-result-issue-details-dialog__detail-line-number">
        <h3 className="nx-h3">File</h3>
        <span>{file}</span>
      </div>

      <LineNumberDisplay
        lineNumber={lineNumber}
        className="lift-result-issue-details-dialog__detail-line-number"
      />
    </div>
  );
}

interface NoteDetailInfoProps {
  note: FilterableNote;
}
