import { Tooltip } from "@mui/material";
import { ToolNote } from "../../../../utils/filterableNote";

// TODO SHOW PhaseDisplay, tag gruped
export function IssueCardTitle({ toolNote }: IssueCardTitleProps) {
  return (
    <div className="puv-issue-card__title">
      <div className="puv-issue-card__header">
        <Tooltip title={toolNote.title}>
          <h2 className="puv-issue-card__title-text nx-h2">
            {toolNote.title}
          </h2>
        </Tooltip>
      </div>
    </div>
  );
}

export interface IssueCardTitleProps {
  toolNote: ToolNote;
}
