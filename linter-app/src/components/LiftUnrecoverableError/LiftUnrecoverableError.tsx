import React, { ReactNode } from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import "./LiftUnrecoverableError.scss";
import { LiftIcon } from "../LiftIcon/LiftIcon";

export function LiftUnrecoverableError({
  children,
}: LiftUnrecoverableErrorProps) {
  return (
    <div className="nx-alert nx-alert--error" role="alert">
      <LiftIcon
        icon={faExclamationCircle}
        aria-label="error"
        aria-hidden={false}
      />
      {children}
    </div>
  );
}

interface LiftUnrecoverableErrorProps {
  children?: ReactNode;
}
