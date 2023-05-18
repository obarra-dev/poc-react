/*
 *  Copyright (c) 2023-present Sonatype, Inc. All rights reserved.
 *  "Sonatype" is a trademark of Sonatype, Inc.
 */

import { FilteredNotes } from "../../../../hooks/useFilteredNotes/useFilteredNotes";
import { FacetStringArray, ToolFacet } from "./ResultFilter/ResultFilter";
import React from "react";

export interface FacetSidebarProps {
  filteredNotes: FilteredNotes;
}
export function FacetSidebar({ filteredNotes }: FacetSidebarProps) {
  const { toolInfo, filterState, typesInfo } = filteredNotes;

  return (
    <div className="lift-result-tab__facets-area">
      <PhasesFilterFacet filteredNotes={filteredNotes} />
      {toolInfo.map((ti) => (
        <ToolFacet
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

interface PhaseFilterFacetProps {
  filteredNotes: FilteredNotes;
}
function PhasesFilterFacet({ filteredNotes }: PhaseFilterFacetProps) {
  const { phaseInfo, filterState } = filteredNotes;

  return Object.keys(phaseInfo).length > 1 ? (
    <FacetStringArray
      title="Phases"
      facetInfo={phaseInfo}
      control={filterState.phase}
    />
  ) : null;
}
