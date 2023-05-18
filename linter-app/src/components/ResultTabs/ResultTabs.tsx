import "./ResultTabs.scss";
import {
  NxButton,
  NxTab,
  NxTabList,
  NxTabPanel,
  NxTabs,
} from "@some/react-test-components";
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
  
  const [activeTabId, setActiveTabId] = useState(0);
  const { jobId } = resultIdentifier;

  return (
    <section className="nx-tile">
      <header className="nx-tile-header">
        <div className="nx-tile-header__title"><h2 className="nx-h2">Tile Header</h2></div>
      </header>
      <div className="nx-tile-content">
        <NxTabs activeTab={activeTabId} onTabSelect={setActiveTabId}>
          <NxTabList aria-label="Tabs in a tile">
            <NxTab>Tab</NxTab>
            <NxTab>Tab with longer name</NxTab>
            <NxTab>Another Tab 3 much longer name when will it truncate nobody knows</NxTab>
            <NxTab>Fourth Tab</NxTab>
          </NxTabList>
          <NxTabPanel>Tab 1</NxTabPanel>
          <NxTabPanel>Tab 2</NxTabPanel>
          <NxTabPanel>Tab 3</NxTabPanel>
          <NxTabPanel>Tab 4</NxTabPanel>
        </NxTabs>
      </div>
      <footer className="nx-footer">
        <div className="nx-btn-bar">
          <NxButton variant="primary">Button</NxButton>
        </div>
      </footer>
    </section>
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
