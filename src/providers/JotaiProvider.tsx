"use client";

import { ReactNode } from "react";
import { Provider } from "jotai";

type TProps = {
  children: ReactNode;
};

export function JotaiProvider({ children }: TProps) {
  return <Provider>{children}</Provider>;
}
