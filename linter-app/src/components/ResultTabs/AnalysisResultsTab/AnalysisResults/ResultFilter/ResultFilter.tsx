import React from "react";
import "../AnalysisResults.scss";
import { StringFacetInfo } from "../../../../../hooks/useNoteAggregate";
import { ResultFilterTag } from "./ResultFilterTag";
import {
  NxCheckbox,
  NxFilterInput,
  NxOverflowTooltip,
  NxTreeView,
  NxTreeViewChild,
  useToggle,
} from "@sonatype/react-shared-components";
import classNames from "classnames";
import "./ResultFilter.scss";
import { FacetControl, FilterState } from "../../../../../hooks/useFilterState";

export function ResultSearchBox({
  filterState,
  className,
}: ResultSearchBoxProps) {
  const { searchText, setSearchText } = filterState;
  return (
    <NxFilterInput
      className={classNames("lift-result-filter__search-box", className)}
      placeholder="Filter"
      autoFocus
      value={searchText || ""}
      onChange={(value: string) => {
        setSearchText(value, "replaceIn");
      }}
    />
  );
}

export interface ResultSearchBoxProps {
  filterState: FilterState;
  className?: string;
}

export const FacetStringArray: React.FC<{
  title: any;
  facetInfo: StringFacetInfo[];
  control: FacetControl;
}> = ({ title, facetInfo, control }) => {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <NxTreeView
      isOpen={isOpen}
      triggerContent={title}
      onToggleCollapse={toggleIsOpen}
    >
      {facetInfo.map((info) => (
        <FacetDisplay info={info} control={control} key={info.key} />
      ))}
    </NxTreeView>
  );
};

export const FacetDisplay: React.FC<{
  info: StringFacetInfo;
  control: FacetControl;
}> = ({ control: { toggle, selected }, info: { key, display, total } }) => {
  const facetSelected = selected.has(key);
  const classesForCount = classNames(
    "lift-result-filter__occurrence-count",
    "nx-counter",
    getAdditionalClassesFromStateForCounter()
  );

  return (
    <NxTreeViewChild>
      <div className="lift-result-filter__occurrence-wrapper">
        <NxCheckbox
          className="lift-result-filter__occurrence-filter"
          isChecked={facetSelected}
          onChange={() => toggle(key)}
          overflowTooltip={false}
        >
          <NxOverflowTooltip>
            <span className={"lift-result-filter__filter-name"}>{display}</span>
          </NxOverflowTooltip>
        </NxCheckbox>

        <span className={classesForCount}>{total}</span>
      </div>
    </NxTreeViewChild>
  );

  function getAdditionalClassesFromStateForCounter(): string | null {
    if (facetSelected) {
      return "nx-counter--active";
    } else {
      return null;
    }
  }
};

export const ToolFacet: React.FC<{
  toolInfo: StringFacetInfo;
  typeInfo: StringFacetInfo[];
  toolControl: FacetControl;
  typeControl: FacetControl;
}> = ({ toolInfo, typeInfo, toolControl, typeControl }) => {
  const [isOpen, toggleIsOpen] = useToggle(true);

  return (
    <NxTreeView
      isOpen={isOpen}
      triggerContent={toolInfo.display}
      onToggleCollapse={toggleIsOpen}
    >
      <FacetDisplay
        info={{ ...toolInfo, display: "All Types" }}
        control={toolControl}
      />

      {typeInfo.map((info) => (
        <FacetDisplay info={info} control={typeControl} key={info.key} />
      ))}
    </NxTreeView>
  );
};

export const InlineFilterRemoval: React.FC<{
  info: StringFacetInfo[];
  control: FacetControl;
}> = ({ info, control: { selected, toggle } }) => (
  <>
    {info
      .filter(({ key }) => selected.has(key))
      .map(({ key, display }) => (
        <ResultFilterTag
          display={display}
          onClick={() => toggle(key)}
          key={key}
        />
      ))}
  </>
);

export const InlineToolRemoval = ({
  toolInfo,
  typeInfo,
  toolControl,
  typeControl,
}: InlineToolRemovalProps) => {
  const selectedInfo = typeInfo.filter(({ key }) =>
    typeControl.selected.has(key)
  );

  return (
    <>
      {toolControl.selected.has(toolInfo.key) ? (
        <ResultFilterTag
          display={`All ${toolInfo.display}`}
          onClick={() => toolControl.toggle(toolInfo.key)}
        />
      ) : null}
      {selectedInfo.map(({ key, display }) => (
        <ResultFilterTag
          key={key}
          display={display}
          onClick={() => typeControl.toggle(key)}
        />
      ))}
    </>
  );
};

export interface InlineToolRemovalProps {
  toolInfo: StringFacetInfo;
  typeInfo: StringFacetInfo[];
  toolControl: FacetControl;
  typeControl: FacetControl;
}

export const InlineSearchRemoval = ({
  filterState,
}: InlineSearchRemovalProps) => {
  const { searchText, setSearchText } = filterState;

  if (!searchText) {
    return null;
  }

  return (
    <ResultFilterTag display={searchText} onClick={() => setSearchText("")} />
  );
};

export interface InlineSearchRemovalProps {
  filterState: FilterState;
}
