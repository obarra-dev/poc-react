import { ReactNode } from "react";

import "./ResultPageTitle.scss";
import classNames from "classnames";

export const ResultPageTitle = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <div className={classNames("result-page-title", className)}>
    <h1 className="nx-h1 result-page-header">{children}</h1>
  </div>
);
