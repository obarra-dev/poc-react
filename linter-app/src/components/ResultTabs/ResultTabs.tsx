import "./ResultTabs.scss";

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
  TECHNICAL_DEBT,
  TOOL_RESULTS,
} from "./allowedTabs";

import { Box, Tabs, Tab, Typography } from "@mui/material";

export interface ResultTabsProps {
  resultIdentifier: ResultIdentifier;
  jobStatus: Undefinable<JobStatusT>;
  enabledTabs: string[];
  allowPublicDependenciesAccess?: boolean;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
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

  const currentTabName = "results";
  
  const [activeTabId, setActiveTabId] = useState(2);
  const { jobId } = resultIdentifier;

  function handleChange (event: React.SyntheticEvent, newValue: number)  {
    setActiveTabId(newValue);
  };


  return (
    <Box sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTabId} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item Onebbb" />
          <Tab label="Item Two"  />
          <Tab label="Item Three"  />
        </Tabs>
      </Box>
      <TabPanel value={activeTabId} index={0}>
        Item Onevvv
      </TabPanel>
      <TabPanel value={activeTabId} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={activeTabId} index={2}>
        Item Three
      </TabPanel>
      
    </Box>
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
