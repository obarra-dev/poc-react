import { GroupedNote } from "../../hooks/useNotesGroupedBy";
import { Tooltip } from "@mui/material";

// TODO SHOW PhaseDisplay, tag gruped
export function IssueCardTitle({ groupedNote }: IssueCardTitleProps) {
  return (
    <div className="lift-issue-card__title">
      <div className="lift-issue-card__header">
        <Tooltip title={groupedNote.title}>
          <h2 className="lift-issue-card__title-text nx-h2">
            {groupedNote.title}
          </h2>
        </Tooltip>     
      </div>
    </div>
  );
}

export interface IssueCardTitleProps {
  groupedNote: GroupedNote;
}
