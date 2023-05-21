import { Box, Button, Modal } from "@mui/material";
import React, { PropsWithChildren, useEffect, useRef } from "react";

export function CustomModal({
  isOpen,
  onClose,
  title,
  children,
}: CustomModalProps) {
  const closeButtonEl = useRef<HTMLButtonElement | null>(null);
  const modalContents = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureFocusOnCloseButtonRatherThanFirstLinkInTree();
  }, [isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <Modal  open={isOpen} onClose={onClose} >
      <Box>
      <header className="nx-modal-header">
        <h2 className="nx-h2">
          <span>{title}</span>
        </h2>
      </header>

      <div className="nx-modal-content" ref={modalContents}>
        {children}
      </div>

      <footer className="nx-footer">
        <div className="nx-btn-bar">
          <Button
            data-test-selector="lift-modal__close-button"
            ref={closeButtonEl}
            onClick={onClose}
          >
            Close
          </Button>
        </div>
      </footer>
      </Box>
    </Modal>
  );

  function ensureFocusOnCloseButtonRatherThanFirstLinkInTree() {
    // This puts focus on the close button rather than the first link that happens to occur in the text
    // from: https://html.spec.whatwg.org/multipage/interactive-elements.html#dialog-focusing-steps
    // "If there isn't one, then let control be the first non-inert descendant element of subject, in tree order."
    // Note: React will not render autofocus attributes by design and their polyfill is busted for this use case
    // https://github.com/facebook/react/issues/11851

    if (isOpen && closeButtonEl && closeButtonEl.current) {
      closeButtonEl.current.focus();
    }

    if (isOpen && typeof modalContents.current?.scrollTo === "function") {
      modalContents.current?.scrollTo(0, 0);
    }
  }
}

export type CustomModalProps = PropsWithChildren<{
  isOpen: boolean;
  onClose: CustomModalCloseHandler;
  title: string;
}>;

export type CustomModalCloseHandler = (arg0?: Event | React.MouseEvent) => void;
