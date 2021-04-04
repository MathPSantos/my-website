import { useCommand } from "../../../../hook/useCommand";

import { IconButton } from "../../../IconButton";

import { Command } from "../../../../styles/icons";

export function CommandButton() {
  const { toggleCommandMenuOpen } = useCommand();

  return (
    <IconButton isHide onClick={() => toggleCommandMenuOpen(true)}>
      <Command />
    </IconButton>
  );
}
