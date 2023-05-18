import React, { useEffect, useState } from "react";
import "./AnalysisResults.scss";
import { ResultSearchBox } from "./ResultFilter/ResultFilter";
import { FixRates } from "../../../../services/api/fixRateApi/fixRates";
import { pushToDL } from "../../../../services/analytics/dataLayer";
import { FilterToggleButton } from "./FilterToggleButton/FilterToggleButton";
import { UnknownUseQueryResult } from "../../../../services/api/rtk-query-types/UseQueryResult";
import { StringParam, useQueryParam } from "use-query-params";
import { useHistory, useLocation } from "react-router-dom";
import {
  LiftWebConsoleJobSummary,
  LiftWebConsolePatchSummary,
  LiftWebConsoleToolNoteDto,
  LiftWebConsoleToolNoteDtoPhaseEnum,
} from "../../../../generated/lift-web-console-sdk/src";
import { ResultIdentifier } from "../../../../services/api/sbomApi/sbomApi";
import { NoIssuesFound } from "./NoIssuesFound/NoIssuesFound";
import { FilterState } from "../../../../hooks/useFilterState";
import {
  FilteredNotes,
  useFilteredNotes,
} from "../../../../hooks/useFilteredNotes/useFilteredNotes";
import { IssuesArea } from "./IssueArea";
import { FacetSidebar } from "./FacetSidebar";
import { NxButton, NxFontAwesomeIcon } from "@sonatype/react-shared-components";
import { DownloadPatchDialog } from "./DownloadPatchDialog/DownloadPatchDialog";
import { useGetPatchSummaryQuery } from "../../../../services/api/jobsApi/jobsApi";
import { isQueryResultPending } from "../../../../services/api/utils/isQueryPendingOrErrored";
import { ResultPendingOrErrored } from "../../../ResultPendingOrErrored/ResultPendingOrErrored";
import { Undefinable } from "../../../../utils/nullable";
import { isNotNullOrUndefined } from "../../../../utils/isNotNullOrUndefined";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

export const AnalysisResults: React.FC<{
  resultIdentifier: ResultIdentifier;
  jobSummary: LiftWebConsoleJobSummary;
  toolNotes: LiftWebConsoleToolNoteDto[];
  fixRatesQuery: UnknownUseQueryResult<FixRates>;
}> = ({ fixRatesQuery, toolNotes, jobSummary, resultIdentifier }) => {
  const fixRates = fixRatesQuery.data;
  const [filterOpen, setFilterOpen] = useState(true);

  const filteredNotes = useFilteredNotes(fixRates || {}, toolNotes);
  const { filterState, notes } = filteredNotes;

  const history = useHistory();
  const location = useLocation();
  const [phase] = useQueryParam("ph", StringParam);

  useEffect(() => {
    if (
      phase === LiftWebConsoleToolNoteDtoPhaseEnum.PhaseIntroduced &&
      !hasIntroducedToolNotes()
    ) {
      history.push({
        search: getUrlWithoutSelectedPhase(),
      });
    }
  }, []);

  useToolTracking(toolNotes);

  if (isReportWithNoIssuesFound()) {
    return <NoIssuesFound />;
  }

  return (
    <>
      <ResultTabTopSection
        filterOpen={filterOpen}
        onFilterToggle={onFilterToggle}
        filterState={filterState}
        jobId={resultIdentifier.jobId}
        toolNotes={toolNotes}
      />

      <ResultTabBottomSection
        resultIdentifier={resultIdentifier}
        fixRatesQuery={fixRatesQuery}
        jobSummary={jobSummary}
        filteredNotes={filteredNotes}
        filterOpen={filterOpen}
      />
    </>
  );

  function hasIntroducedToolNotes(): boolean {
    return !!toolNotes.find(
      (tn) => tn.phase === LiftWebConsoleToolNoteDtoPhaseEnum.PhaseIntroduced
    );
  }

  function getUrlWithoutSelectedPhase() {
    const queryParams = new URLSearchParams(location.search);
    queryParams.delete("ph");

    return queryParams.toString();
  }

  function isReportWithNoIssuesFound(): boolean {
    return notes.length === 0 && !filterState.searchText;
  }

  function onFilterToggle(filterOpen: boolean) {
    setFilterOpen(!filterOpen);
  }
};

type ResultTabTopSectionProps = {
  filterOpen: boolean;
  onFilterToggle: (isOpen: boolean) => void;
  filterState: FilterState;
  jobId: string;
  toolNotes: LiftWebConsoleToolNoteDto[];
};
function ResultTabTopSection({
  filterOpen,
  onFilterToggle,
  filterState,
  jobId,
  toolNotes,
}: ResultTabTopSectionProps) {
  const [detailOpen, setDetailOpen] = useState(false);
  const getPatchQueryResult: UnknownUseQueryResult<LiftWebConsolePatchSummary> = useGetPatchSummaryQuery(
    jobId
  );
  if (isQueryResultPending(getPatchQueryResult)) {
    return <ResultPendingOrErrored queryResult={getPatchQueryResult} />;
  }

  const patchSummary: Undefinable<LiftWebConsolePatchSummary> =
    getPatchQueryResult.data;
  const hasPatch =
    isNotNullOrUndefined(patchSummary) && patchSummary.patchCount > 0;

  var data =
    "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(toolNotes));

  return (
    <>
      <div className="lift-result-tab__section">
        <FilterToggleButton
          className="lift-result-tab__filter-toggle-button-area"
          isOpen={filterOpen}
          onClick={() => onFilterToggle(filterOpen)}
        />
        <ResultSearchBox
          className="lift-result-tab__search-box-area"
          filterState={filterState}
        />

        {hasPatch && (
          <NxButton
            className="lift-result-tab__download-patch-button"
            variant="primary"
            onClick={(e) => {
              e.preventDefault();
              setDetailOpen(true);
            }}
            id="patchAvailableButton"
          >
            Auto-fix available
          </NxButton>
        )}

        <div className="lift-result-tab__export-report-area">
          <a
            className="nx-btn nx-btn--primary"
            href={"data:" + data}
            download="data.json"
          >
            <NxFontAwesomeIcon icon={faDownload} />
            <span className="bd-spacer" />
            Export issues list
          </a>
        </div>
      </div>

      {hasPatch && (
        <DownloadPatchDialog
          isOpen={detailOpen}
          onClose={() => setDetailOpen(false)}
          jobId={jobId}
        />
      )}
    </>
  );
}

export interface ResultTabBottomSectionProps {
  resultIdentifier: ResultIdentifier;
  fixRatesQuery: UnknownUseQueryResult<FixRates>;
  jobSummary: LiftWebConsoleJobSummary;
  filteredNotes: FilteredNotes;
  filterOpen: boolean;
}
function ResultTabBottomSection({
  resultIdentifier,
  filteredNotes,
  jobSummary,
  fixRatesQuery,
  filterOpen,
}: ResultTabBottomSectionProps) {
  return (
    <div className="lift-result-tab__section">
      {filterOpen && <FacetSidebar filteredNotes={filteredNotes} />}
      <IssuesArea
        resultIdentifier={resultIdentifier}
        fixRatesQuery={fixRatesQuery}
        jobSummary={jobSummary}
        filteredNotes={filteredNotes}
      />
    </div>
  );
}

function useToolTracking(toolNotes: LiftWebConsoleToolNoteDto[]) {
  useEffect(() => {
    const toolList: String[] = [
      ...new Set(toolNotes.map((toolNote) => toolNote.toolName)),
    ];
    const data = {
      event: "toolsInConsoleReport",
      toolList,
    };
    pushToDL(data);
  }, []);
}
