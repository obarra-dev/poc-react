export const RESULTS = "results";
export const DEPENDENCIES = "dependencies";

export const allowedTabs = [
  RESULTS,
  DEPENDENCIES,
];
export type Tab = typeof allowedTabs[number];
