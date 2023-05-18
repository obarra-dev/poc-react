/*
 *  Copyright (c) 2023-present Sonatype, Inc. All rights reserved.
 *  "Sonatype" is a trademark of Sonatype, Inc.
 */

import { ResultIdentifier } from "../../../../services/api/sbomApi/sbomApi";
import { UnknownUseQueryResult } from "../../../../services/api/rtk-query-types/UseQueryResult";
import { FixRates } from "../../../../services/api/fixRateApi/fixRates";
import { LiftWebConsoleJobSummary } from "../../../../generated/lift-web-console-sdk/src";
import { FilteredNotes } from "../../../../hooks/useFilteredNotes/useFilteredNotes";
import { Issues } from "../../../Issues/Issues";
import {
  InlineFilterRemoval,
  InlineSearchRemoval,
  InlineToolRemoval,
} from "./ResultFilter/ResultFilter";
import React from "react";
import { FilterState } from "../../../../hooks/useFilterState";

export interface IssueAreaProps {
  resultIdentifier: ResultIdentifier;
  fixRatesQuery: UnknownUseQueryResult<FixRates>;
  jobSummary: LiftWebConsoleJobSummary;
  filteredNotes: FilteredNotes;
}
export function IssuesArea({
  resultIdentifier,
  filteredNotes,
  fixRatesQuery,
  jobSummary,
}: IssueAreaProps) {
  const { notes, filterState } = filteredNotes;

  return (
    <div className="lift-result-tab__issues-area">
      {showTags() && <TagArea filteredNotes={filteredNotes} />}
      {hasIssues() ? (
        <Issues
          resultIdentifier={resultIdentifier}
          notes={notes}
          fixRatesQuery={fixRatesQuery}
          jobSummary={jobSummary}
          className={"lift-result-tab__issues-list"}
        />
      ) : (
        <NoIssues filterState={filterState} />
      )}
    </div>
  );

  function showTags(): boolean {
    return (
      filterState.searchText !== undefined ||
      filterState.tool.selected.size !== undefined ||
      filterState.phase.selected.size !== undefined ||
      filterState.allTypes.selected.size !== undefined
    );
  }

  function hasIssues(): boolean {
    return notes.length !== 0;
  }
}

interface TagAreaProps {
  filteredNotes: FilteredNotes;
}
function TagArea({ filteredNotes }: TagAreaProps) {
  const { filterState, phaseInfo, typesInfo, toolInfo } = filteredNotes;
  return (
    <div className="lift-result-tab__tag-area">
      <InlineSearchRemoval filterState={filterState} />
      <InlineFilterRemoval info={phaseInfo} control={filterState.phase} />
      {toolInfo
        .filter((ti) => !!typesInfo[ti.key])
        .map((ti) => (
          <InlineToolRemoval
            toolInfo={ti}
            toolControl={filterState.tool}
            typeInfo={typesInfo[ti.key]}
            typeControl={filterState.allTypes}
            key={ti.key}
          />
        ))}
    </div>
  );
}

function NoIssues({ filterState }: { filterState: FilterState }) {
  return (
    <div className="lift-result-tab__no-matching-issues-for-search">
      {hasMatchingIssuesForSearch()
        ? "No issues match search"
        : "No issues to report"}
    </div>
  );

  function hasMatchingIssuesForSearch(): boolean {
    return filterState.searchText !== "";
  }
}
