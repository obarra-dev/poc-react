import React, { MouseEventHandler } from "react";
import { NxSelectableTag } from "@sonatype/react-shared-components";

export function ResultFilterTag({ display, onClick }: ResultFilterTagProps) {
  return (
    <NxSelectableTag onClick={onClick} selected={true} onSelect={() => {}}>
      {display}
    </NxSelectableTag>
  );
}

export interface ResultFilterTagProps {
  display: string;
  onClick: MouseEventHandler;
}
