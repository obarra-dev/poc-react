

export interface ToolNote {
  jobId?: string;
  toolName: string;
  title: string;
  phase: ToolNoteDtoPhaseEnum;
}

export interface JobSummary {
  numIssuesFixed: number;
  numIssuesTotal: number;
  sourceBranch?: string;
}

export interface FilteredNotes {
  notes: FilterableNote[];
}

export interface FilterableNote extends ToolNote {
  tnPhaseText: string;
  tnToolTag: string;
}


export const ToolNoteDtoPhaseEnum = {
  PhaseUnknown: 'PhaseUnknown',
  PhasePreexisting: 'PhasePreexisting',
  PhaseIntroduced: 'PhaseIntroduced',
  PhaseFixed: 'PhaseFixed'
} as const;
export type ToolNoteDtoPhaseEnum = typeof ToolNoteDtoPhaseEnum[keyof typeof ToolNoteDtoPhaseEnum];