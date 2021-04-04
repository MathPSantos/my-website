import { CommandButton } from "./Buttons/CommandButton";
import { LoveButton } from "./Buttons/LoveButton";
import styled from "./styles.module.scss";

export function Header() {
  return (
    <header className={styled.container}>
      <img src="/image/logo.svg" alt="Matheus Santos" />

      <div className={styled.actions}>
        <CommandButton />

        <LoveButton />
      </div>
    </header>
  );
}
