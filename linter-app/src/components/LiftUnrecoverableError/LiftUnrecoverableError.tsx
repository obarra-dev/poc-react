import { ReactNode } from "react";
import { faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import "./LiftUnrecoverableError.scss";

export function LiftUnrecoverableError({
  children,
}: LiftUnrecoverableErrorProps) {
  return (
    <div className="nx-alert nx-alert--error" role="alert">
       <FontAwesomeIcon icon={faExclamationCircle} />
      {children}
    </div>
  );
}

interface LiftUnrecoverableErrorProps {
  children?: ReactNode;
}
