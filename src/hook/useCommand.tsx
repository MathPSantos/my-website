import {
  useEffect,
  useState,
  createContext,
  ReactNode,
  useContext,
} from "react";
import { useRouter } from "next/router";

import keysRoutes from "../../data/keyRoutes.json";

interface CommandProviderProps {
  children: ReactNode;
}

interface CommandContextData {
  isCommandMenuOpen: boolean;
  toggleCommandMenuOpen: (value: boolean) => void;
}

const CommandContext = createContext<CommandContextData>(
  {} as CommandContextData
);

export function CommandProvider({ children }: CommandProviderProps) {
  const router = useRouter();

  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);

  let keysArr = [];

  function handleKeyDown(event: KeyboardEvent) {
    keysArr.push(event.key);

    if (keysArr.length < 2) return;

    const arrLength = keysArr.length;
    const userCommand = `${keysArr[arrLength - 2]}${keysArr[arrLength - 1]}`;

    keysRoutes.map((item) => {
      if (item.command === userCommand) router.push(item.link);
    });
  }

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function toggleCommandMenuOpen(value: boolean) {
    setIsCommandMenuOpen(value);
  }

  return (
    <CommandContext.Provider
      value={{ isCommandMenuOpen, toggleCommandMenuOpen }}
    >
      {children}
    </CommandContext.Provider>
  );
}

export function useCommand() {
  const context = useContext(CommandContext);

  return context;
}
