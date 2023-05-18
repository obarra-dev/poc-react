export const RESULTS = "results";
export const DEPENDENCIES = "dependencies";
export const TECHNICAL_DEBT = "technical-debt";
export const BOM_DR = "BOM_DR";
export const TOOL_RESULTS = "tool-results";
export const LOGS = "logs";

export const allowedTabs = [
  RESULTS,
  DEPENDENCIES,
  TECHNICAL_DEBT,
  BOM_DR,
  TOOL_RESULTS,
  LOGS,
];
export type Tab = typeof allowedTabs[number];
