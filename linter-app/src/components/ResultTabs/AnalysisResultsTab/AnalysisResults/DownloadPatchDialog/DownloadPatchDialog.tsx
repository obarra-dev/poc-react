/*
 * Copyright (c) 2020-present Sonatype, Inc. All rights reserved.
 * "Sonatype" is a trademark of Sonatype, Inc.
 */

import React from "react";
import {
  LiftDialogCloseHandler,
  LiftModal,
} from "../../../../LiftModal/LiftModal";
import { NxTextLink } from "@some/react-test-components";
import "./DownloadPatchDialog.scss";
import { LIFT_BACKEND_BASE_URI } from "../../../../../constants";

export function DownloadPatchDialog({
  onClose,
  isOpen,
  jobId,
}: DownloadPatchDialogProps) {
  const patchUrl = `${LIFT_BACKEND_BASE_URI}/results/${jobId}.diff`;

  return (
    <LiftModal isOpen={isOpen} onClose={onClose} title="Auto-fix patch file">
      <p className="nx-h3">What is an auto-fix patch file?</p>
      <p>
        Some of the issues in this PR can be automatically fixed. You can
        download and apply these changes in your local project directory of your
        branch to review the suggestions before committing.{" "}
      </p>
      <p className="nx-h3">How do I use the patch file?</p>
      <p>
        <div className="download-patch-instructions-text">
          1)
          <NxTextLink
            id="downloadPatchLink"
            href={patchUrl}
            download
            className="download-patch-instructions-link"
          >
            Download the patch file
          </NxTextLink>
        </div>
      </p>
      <p>
        <div className="download-patch-instructions-text">
          2) Apply the patch with git{" "}
        </div>
        <div className="download-patch-instructions-code">
          git apply {jobId}.diff
        </div>
      </p>
      <p>
        <div className="download-patch-instructions-text">
          3) Review the changes
        </div>
        <div className="download-patch-instructions-code">git diff</div>
      </p>
    </LiftModal>
  );
}

interface DownloadPatchDialogProps {
  onClose: LiftDialogCloseHandler;
  isOpen: boolean;
  jobId: string;
}
