import React from "react";

export const NotFoundContext = React.createContext<
  React.Dispatch<React.SetStateAction<boolean>>
>(() => {
  throw new Error("NotFoundContext not found");
});
