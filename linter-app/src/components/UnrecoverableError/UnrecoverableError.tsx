import { ReactNode } from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./UnrecoverableError.scss";

export function UnrecoverableError({ children }: UnrecoverableErrorProps) {
  return (
    <div className="nx-alert nx-alert--error" role="alert">
      <FontAwesomeIcon icon={faExclamationCircle} />
      {children}
    </div>
  );
}

interface UnrecoverableErrorProps {
  children?: ReactNode;
}
