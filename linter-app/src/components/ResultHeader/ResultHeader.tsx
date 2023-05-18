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
    <div className="lift-results-title-container">
      <span className="lift-results-title">
        <ResultPageTitle>
          {isNotNullOrUndefined(url)? (
            <ExternalLink href={url}>{title}</ExternalLink>
          ) : (
            title
          )}
        </ResultPageTitle>
      </span>

      <div className="lift-results-details">{children}</div>
    </div>
  );
}
