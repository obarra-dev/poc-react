import { useContext, useEffect } from "react";
import { NotFoundContext } from "./NotFoundContext";

export function NotFoundTrigger() {
  const setNotFound = useContext(NotFoundContext);

  useEffect(() => {
    setNotFound(true);
  }, []);

  return null;
}
