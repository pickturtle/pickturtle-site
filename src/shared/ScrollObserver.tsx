import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollObserver() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.location.hash = "top";
  }, [pathname]);

  return null;
}
