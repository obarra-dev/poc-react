import classNames from "classnames";
import { NullableAndUndefinable } from "../../../../utils/nullable";

export function LineNumberDisplay({
  lineNumber,
  className,
}: LineNumberDisplayProps) {
  if (!lineNumber) {
    return null;
  }

  return (
    <div className={classNames("lift-line-number-display", className)}>
      <h3 className="lift-line-number-display-header nx-h3">Line</h3>

      <div className="lift-line-number-display__value">{lineNumber}</div>
    </div>
  );
}

interface LineNumberDisplayProps {
  lineNumber: NullableAndUndefinable<number>;
  className?: string;
}
