import { useEffect } from "react";
import { ContactCommunity } from "../ContactCommunity/ContactCommunity";
import { UnrecoverableError } from "../UnrecoverableError/UnrecoverableError";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

export function UnrecoverableErrorDefault({
  error,
}: UnrecoverableErrorDefaultProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.debug(pathname);
    //TODO analytics.sendAnalyticsEvent("unrecoverable-error-shown", { error: `${error}`,pathname, });
  }, []);

  return (
    <UnrecoverableError>
      <ContactCommunity error={error} eventLabel="supportEmail" />
    </UnrecoverableError>
  );
}

interface UnrecoverableErrorDefaultProps {
  error?: Error | FetchBaseQueryError | SerializedError;
}
