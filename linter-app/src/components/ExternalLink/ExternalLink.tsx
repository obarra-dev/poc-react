import { InternalLink, InternalLinkProps } from "../InternalLink/InternalLink";

export const ExternalLink = ({
  eventLabel = "Default Label",
  to = "",
  children,
  ...rest
}: ExternalLinkProps) => {
  return (
    <InternalLink
      to={to}
      eventLabel={eventLabel}
      eventAction="External Link"
      target="_blank"
      rel="noopener noreferrer"
      children={children}
      {...rest}
    />
  );
};

export type ExternalLinkProps = Partial<InternalLinkProps>;
