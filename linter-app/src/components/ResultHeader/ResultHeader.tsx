import { ResultPageTitle } from "../ResultPage/ResultPageTitle/ResultPageTitle";
import "./ResultHeader.scss";
import { PropsWithChildren } from "react";
import { isNotNullOrUndefined } from "../../utils/isNotNullOrUndefined";
import { ExternalLink } from "../ExternalLink/ExternalLink";

export type ResultHeaderProps = PropsWithChildren<{
  title: string;
  url?: string;
}>;

export function ResultHeader({ title, url, children }: ResultHeaderProps) {
  return (
    <div className="puv-results-title-container">
      <span className="puv-results-title">
        <ResultPageTitle>
          {isNotNullOrUndefined(url) ? (
            <ExternalLink href={url}>{title}</ExternalLink>
          ) : (
            title
          )}
        </ResultPageTitle>
      </span>

      <div className="puv-results-details">{children}</div>
    </div>
  );
}
