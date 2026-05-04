"use client";

import { useEffect } from "react";

export function BackRedirectScript() {
  useEffect(() => {
    let initialized = false;
    
    // O Chrome e Safari bloqueiam history.pushState automatizados. 
    // Exige-se uma interação do usuário (click, touch) para habilitar o "Trapper"
    const initBackRedirect = () => {
      if (!initialized && typeof window !== "undefined") {
        window.history.pushState({ backRedirect: true }, "", window.location.href);
        window.history.pushState({ backRedirect: true }, "", window.location.href);
        initialized = true;
      }
    };

    document.addEventListener("click", initBackRedirect);
    document.addEventListener("touchstart", initBackRedirect);

    const handlePopState = () => {
      if (initialized) {
        window.location.replace('/desconto');
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Tratamento para bfcache (se o usuário voltar pelo cache do Safari)
    const handlePageShow = (e: PageTransitionEvent) => {
      if (e.persisted && !initialized) {
        initBackRedirect();
      }
    };
    window.addEventListener('pageshow', handlePageShow);

    return () => {
      document.removeEventListener("click", initBackRedirect);
      document.removeEventListener("touchstart", initBackRedirect);
      window.removeEventListener('popstate', handlePopState);
      window.removeEventListener('pageshow', handlePageShow);
    };
  }, []);

  return null;
}
