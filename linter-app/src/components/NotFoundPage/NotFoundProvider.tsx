import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { PropsWithOnlyChildren } from "../../utils/PropsWithOnlyChildren";
import { NotFoundContext } from "./NotFoundContext";
import { NotFoundPage } from "./NotFoundPage";

export function NotFoundProvider({ children }: PropsWithOnlyChildren) {
  const [isNotFound, setNotFound] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (isNotFound) {
      setNotFound(false);
    }
  }, [location]);

  return (
    <NotFoundContext.Provider value={setNotFound}>
      {isNotFound ? <NotFoundPage /> : children}
    </NotFoundContext.Provider>
  );
}
