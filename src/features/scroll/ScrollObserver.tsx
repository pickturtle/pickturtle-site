import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollObserver() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [location.pathname]);

  return null; // Componente invisível, apenas lógica de observação
}
