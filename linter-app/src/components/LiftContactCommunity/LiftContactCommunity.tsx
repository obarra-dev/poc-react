import { ExternalLink } from "../ExternalLink/ExternalLink";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { sanitoryErrMsg } from "../../utils/errors";
import "./LiftContactCommunity.scss";
import { NullableAndUndefinable } from "../../utils/nullable";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { LiftIcon } from "../LiftIcon/LiftIcon";

export function LiftContactCommunity({
  error,
  eventLabel,
}: LiftContactCommunityProps) {
  // TODO  <LiftIcon  className="lift-contact-community__external-link-icon" icon={faExternalLinkAlt} /> in externa lin
  return (
    <>
      {sanitoryErrMsg(error)}.
      <ExternalLink
        className="nx-text-link lift-contact-community__external-link-container"
        eventLabel={eventLabel}
        to="https://community.sonatype.com/c/sonatype-lift/50"
      >
        Visit the community
       
      </ExternalLink>
      for help.
    </>
  );
}

interface LiftContactCommunityProps {
  error: NullableAndUndefinable<Error | FetchBaseQueryError | SerializedError>;
  eventLabel: string;
}
