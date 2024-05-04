import { Payload } from "@/types/payload";
import { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";

export const useAuth = () => {
  const [authInfo, setAuthInfo] = useState<{
    checked: boolean;
    isAuthenticated: boolean;
  }>({
    checked: false,
    isAuthenticated: false,
  });

  useEffect(() => {
    const token = localStorage.getItem("token");
    try {
      if (token) {
        const decoratedToken = jwtDecode<Payload>(token);
        if (decoratedToken.exp * 1000 < Date.now()) {
          localStorage.removeItem("token");
          setAuthInfo({ checked: true, isAuthenticated: false });
        } else {
          localStorage.setItem("token", token);
          setAuthInfo({ checked: true, isAuthenticated: true });
        }
      } else {
        setAuthInfo({ checked: true, isAuthenticated: false });
      }
    } catch (error) {
      localStorage.removeItem("token");
      setAuthInfo({ checked: true, isAuthenticated: false });
    }
  }, []);

  return authInfo;
};
