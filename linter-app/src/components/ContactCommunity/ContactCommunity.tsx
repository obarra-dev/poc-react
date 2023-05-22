import { ExternalLink } from "../ExternalLink/ExternalLink";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { sanitoryErrMsg } from "../../utils/errors";
import "./ContactCommunity.scss";
import { NullableAndUndefinable } from "../../utils/nullable";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";

export function ContactCommunity({ error, eventLabel }: ContactCommunityProps) {
  // TODO  <puvIcon  className="puv-contact-community__external-link-icon" icon={faExternalLinkAlt} /> in externa lin
  return (
    <>
      {sanitoryErrMsg(error)}.
      <ExternalLink
        className="nx-text-link puv-contact-community__external-link-container"
        eventLabel={eventLabel}
        to="https://react.dev/community"
      >
        Visit the community
      </ExternalLink>
      for help.
    </>
  );
}

interface ContactCommunityProps {
  error: NullableAndUndefinable<Error | FetchBaseQueryError | SerializedError>;
  eventLabel: string;
}
