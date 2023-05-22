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
    <div className={classNames("puv-line-number-display", className)}>
      <h3 className="puv-line-number-display-header nx-h3">Line</h3>

      <div className="puv-line-number-display__value">{lineNumber}</div>
    </div>
  );
}

interface LineNumberDisplayProps {
  lineNumber: NullableAndUndefinable<number>;
  className?: string;
}
