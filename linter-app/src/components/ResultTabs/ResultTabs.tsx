import "./ResultTabs.scss";
import {
  NxTab,
  NxTabList,
  NxTabPanel,
  NxTabs,
} from "@sonatype/react-shared-components";
// import { AnalysisResultsTab } from "./AnalysisResultsTab/AnalysisResultsTab";
import { PropsWithChildren, useState } from "react";
import { ResultIdentifier } from "../../services/api/sbomApi/sbomApi";
import { JobStatusT } from "../../utils/status";
import { isNotNullOrUndefined } from "../../utils/isNotNullOrUndefined";
import { Undefinable } from "../../utils/nullable";
import {
  BOM_DR,
  DEPENDENCIES,
  LOGS,
  RESULTS,
  Tab,
  TECHNICAL_DEBT,
  TOOL_RESULTS,
} from "./allowedTabs";

export interface ResultTabsProps {
  resultIdentifier: ResultIdentifier;
  jobStatus: Undefinable<JobStatusT>;
  enabledTabs: Tab[];
  allowPublicDependenciesAccess?: boolean;
}

export function ResultTabs({
  enabledTabs,
  resultIdentifier,
  jobStatus,
  allowPublicDependenciesAccess = false,
}: ResultTabsProps) {
  const [tabOpenTime, setTabOpenTime] = useState(Date.now());
  
  /*
  const [currentQueryParamTabName, setCurrentQueryParamTabName] = useQueryParam(
    "tab",
    StringParam
  );
  */

  //const currentTabName: Tab = currentQueryParamTabName || "results";

  const currentTabName: Tab = "results";
  

  const { jobId } = resultIdentifier;

  return (
    <div className="lift-result-tabs">
      <NxTabs
        activeTab={getTabIndexByName(currentTabName)}
        onTabSelect={handleTabSelect}
      >
        <NxTabList className="lift-result-tabs__tabs">
          {isTabEnabled(RESULTS) ? <ResultTab>Issues</ResultTab> : null}
        </NxTabList>

        {isTabEnabled(RESULTS) ? (
          <NxTabPanel>
            <h2>barra</h2>
          </NxTabPanel>
        ) : null}
      </NxTabs>
    </div>
  );

  function handleTabSelect(index: number): void {
    const tabName: string = getTabNameByIndex(index) as string;
    // TODO setCurrentQueryParamTabName(tabName);
    setTabOpenTime(Date.now());
  }

  function getTabNameByIndex(tabId: number): string | null {
    if (tabId < 0 || tabId >= enabledTabs.length) {
      return null;
    }

    return enabledTabs[tabId];
  }

  function getTabIndexByName(inputTabName: Tab): number {
    const index = enabledTabs.indexOf(inputTabName);
    return index < 0 ? 0 : index;
  }

  function isTabEnabled(tab: Tab): boolean {
    return isNotNullOrUndefined(enabledTabs.find((entry) => entry === tab));
  }
}

function ResultTab({
  children,
  isBeta = false,
}: PropsWithChildren<{ isBeta?: boolean }>) {
  return (
    <NxTab>
      {children}
      {isBeta ? (
        <>
          {" "}
          <div className="lift-result-tabs__new-tab-label">Beta</div>
        </>
      ) : null}
    </NxTab>
  );
}
