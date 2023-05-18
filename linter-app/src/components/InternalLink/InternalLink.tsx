import React from "react";

export function InternalLink({
  eventLabel,
  eventAction = "Internal Click",
  to = "",
  children,
  ...rest
}: InternalLinkProps) {
  const onClick = () => {
   console.log("on click on href");
  };

  return <a href={to} onClick={onClick} children={children} {...rest} />;
};

export interface InternalLinkProps extends React.HTMLProps<HTMLAnchorElement> {
  eventLabel: string;
  eventAction?: string;
  to: string;
  children?: React.ReactNode;
}
