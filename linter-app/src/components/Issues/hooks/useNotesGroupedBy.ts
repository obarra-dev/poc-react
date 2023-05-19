import { FilterableNote } from "../../../utils/filterableNote";
import { useMemo } from "react";

export interface GroupedNote extends FilterableNote {
  additionalInstances: FilterableNote[];
}

export function groupedNote(
  toolNote: FilterableNote,
  additionalInstances: FilterableNote[] = []
): GroupedNote {
  return {
    ...toolNote,
    additionalInstances,
  };
}

export const useNotesGroupedBy = (notes: FilterableNote[]) => {
  return useMemo((): GroupedNote[] => {
    const groupedNotes: GroupedNote[] = [];
    const groupedNotesByGroupKey: Map<string, GroupedNote> = new Map();

    notes.forEach((note) => {
      const groupByKey = `${note.tnToolTag}-${note.title}-${note.phase})`;

      if (groupedNotesByGroupKey.has(groupByKey)) {
        const existingGroupedNote = groupedNotesByGroupKey.get(groupByKey)!!;
        existingGroupedNote.additionalInstances.push(note);
      } else {
        const newGroupedNote = groupedNote(note);

        groupedNotes.push(newGroupedNote);
        groupedNotesByGroupKey.set(groupByKey, newGroupedNote);
      }
    });

    return groupedNotes;
  }, [notes]);
};
