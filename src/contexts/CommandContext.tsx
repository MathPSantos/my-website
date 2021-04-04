import { useEffect, createContext, ReactNode } from "react";
import { useRouter } from "next/router";

import keysRoutes from "../../data/keyRoutes.json";

interface CommandProviderProps {
  children: ReactNode;
}

export const CommandContext = createContext({});

export function CommandProvider({ children }: CommandProviderProps) {
  const router = useRouter();

  let keysArr = [];

  function handleKeyDown(event: KeyboardEvent) {
    keysArr.push(event.key);

    keysArr.map((key, index, arr) => {
      const command = keysRoutes[key + arr[index + 1]];

      if (command) return router.push(command);
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <CommandContext.Provider value={{}}>{children}</CommandContext.Provider>
  );
}
