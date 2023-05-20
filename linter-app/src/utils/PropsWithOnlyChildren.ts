import { PropsWithChildren } from "react";

export type PropsWithOnlyChildren = PropsWithChildren<Record<never, never>>;
