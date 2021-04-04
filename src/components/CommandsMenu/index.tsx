import { useCommand } from "../../hook/useCommand";

import { CommandItem } from "./CommandItem";
import { IconButton } from "../IconButton";
import { X } from "../../styles/icons";

import styled from "./styles.module.scss";

export function CommandMenu() {
  const { isCommandMenuOpen, toggleCommandMenuOpen } = useCommand();

  return (
    <>
      <div
        className={
          isCommandMenuOpen
            ? `${styled.background} ${styled.backgroundActive}`
            : styled.background
        }
        // Close menu when click out of the menu
        onClick={() => toggleCommandMenuOpen(false)}
      />

      <div
        className={
          isCommandMenuOpen
            ? `${styled.container} ${styled.open}`
            : styled.container
        }
      >
        <header>
          <h3>Commands</h3>

          <IconButton onClick={() => toggleCommandMenuOpen(false)}>
            <X />
          </IconButton>
        </header>

        <div className={styled.content}>
          <section>
            <h4>Pages</h4>

            <ul>
              <CommandItem label="Home" link="/" command={["m", "h"]} />
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
