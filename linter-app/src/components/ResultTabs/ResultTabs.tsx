import "./ResultTabs.scss";

import { AnalysisResultsTab } from "./AnalysisResultsTab/AnalysisResultsTab";
import { useState } from "react";
import { ResultIdentifier } from "../../utils/models";
import { JobStatusT } from "../../utils/status";
import { Undefinable } from "../../utils/nullable";


import { Box, Tabs, Tab } from "@mui/material";


interface TabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
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
          {children}
        </Box>
      )}
    </div>
  );
}

export interface ResultTabsProps {
  resultIdentifier: ResultIdentifier;
  jobStatus: Undefinable<JobStatusT>;
}

export function ResultTabs({
  resultIdentifier,
  jobStatus,
}: ResultTabsProps) {
  
  
  /* TODO
  const [tabOpenTime, setTabOpenTime] = useState(Date.now());

  const [currentQueryParamTabName, setCurrentQueryParamTabName] = useQueryParam(
    "tab",
    StringParam
  );

  const currentTabName: Tab = currentQueryParamTabName || "results";

  useTabTracking(currentTabName, tabOpenTime);
  useScrollTracking(currentTabName);

  */

  //const currentTabName: Tab = currentQueryParamTabName || "results";

  
  const [activeTabId, setActiveTabId] = useState(0);
  const { jobId } = resultIdentifier;

  function handleTabSelected (event: React.SyntheticEvent, newIndex: number): void {
    setActiveTabId(newIndex);
      // TODO setCurrentQueryParamTabName(tabName);
     // TODO setTabOpenTime(Date.now());
  }

  return (
    <div className="lift-result-tabs">
    <Box sx={{ width: '80%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={activeTabId} onChange={handleTabSelected} aria-label="basic tabs example">
          <Tab label="Issues" />
          <Tab label="Item Two"  />
        </Tabs>
      </Box>
      <TabPanel value={activeTabId} index={0}>
      <AnalysisResultsTab
              status={jobStatus}
              resultIdentifier={resultIdentifier}
            />
      </TabPanel>
      <TabPanel value={activeTabId} index={1}>
        Item Two
      </TabPanel>
    </Box>
    </div>
  );
}
