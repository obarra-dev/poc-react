import React, { useEffect } from "react";

import { LiftContactCommunity } from "../LiftContactCommunity/LiftContactCommunity";
import { LiftUnrecoverableError } from "../LiftUnrecoverableError/LiftUnrecoverableError";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query";
import { SerializedError } from "@reduxjs/toolkit";
import { useLocation } from "react-router-dom";

export function LiftUnrecoverableErrorDefault({
  error,
}: LiftUnrecoverableErrorDefaultProps) {
  const { pathname } = useLocation();

  useEffect(() => {
    console.debug(pathname);
   // analytics.sendAnalyticsEvent("lift-unrecoverable-error-shown", { error: `${error}`,pathname, });
  }, []);

  return (
    <LiftUnrecoverableError>
      <LiftContactCommunity error={error} eventLabel="supportEmail" />
    </LiftUnrecoverableError>
  );
}

interface LiftUnrecoverableErrorDefaultProps {
  error?: Error | FetchBaseQueryError | SerializedError;
}
