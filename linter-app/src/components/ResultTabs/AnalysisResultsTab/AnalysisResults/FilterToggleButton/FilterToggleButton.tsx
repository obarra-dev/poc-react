import React, { MouseEventHandler } from "react";
import { NxButton } from "@some/react-test-components";
import { faAngleDoubleLeft, faFilter } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames";
import "./FilterToggleButton.scss";
import { LiftIcon } from "../../../../LiftIcon/LiftIcon";

export function FilterToggleButton({
  onClick,
  isOpen,
  className,
}: FilterToggleButtonProps) {
  return (
    <NxButton
      onClick={onClick}
      className={classNames(
        { "lift-filter-toggle-button__container--open": isOpen },
        "lift-filter-toggle-button__container",
        className
      )}
      color="info"
    >
      <StatusIndicatorIcons />
    </NxButton>
  );

  function StatusIndicatorIcons() {
    if (isOpen) {
      return (
        <>
          <LiftIcon icon={faAngleDoubleLeft} />
          <LiftIcon icon={faFilter} />
        </>
      );
    } else {
      return <LiftIcon icon={faFilter} />;
    }
  }
}

export interface FilterToggleButtonProps {
  onClick: MouseEventHandler;
  isOpen: boolean;
  className?: string;
}
