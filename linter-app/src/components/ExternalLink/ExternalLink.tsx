import { InternalLink, InternalLinkProps } from "../InternalLink/InternalLink";

export function ExternalLink({
  eventLabel = "Default Label",
  to = "",
  children,
  ...rest
}: ExternalLinkProps)  {
  return (
    <InternalLink
      eventLabel={eventLabel}
      eventAction="External Link"
      to={to}
      children={children}
      target="_blank"
      rel="noopener noreferrer"
      {...rest}
    />
  );
};

export type ExternalLinkProps = Partial<InternalLinkProps>;
