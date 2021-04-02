import { CommandButton } from "./Buttons/CommandButton";
import { LoveButton } from "./Buttons/LoveButton";
import { Content } from "./styles";

export function Header() {
  return (
    <Content>
      <img src="/image/logo.svg" alt="Matheus Santos" />

      <div className="actions">
        <CommandButton />

        <LoveButton />
      </div>
    </Content>
  );
}
