export interface ToolNote {
  jobId: string;
  toolName: string;
  title: string;
  phase: ToolNoteDtoPhaseEnum;
  column?: number;
  lineNumber?: number;
  file: string;
  description: string;
  detailsUrl?: string;
}

export interface JobSummary {
  numIssuesFixed: number;
  numIssuesTotal: number;
  sourceBranch: string;
  sourceCommit: string;

}

export const ToolNoteDtoPhaseEnum = {
  PhaseUnknown: 'PhaseUnknown',
  PhasePreexisting: 'PhasePreexisting',
  PhaseIntroduced: 'PhaseIntroduced',
  PhaseFixed: 'PhaseFixed'
} as const;
export type ToolNoteDtoPhaseEnum = typeof ToolNoteDtoPhaseEnum[keyof typeof ToolNoteDtoPhaseEnum];
