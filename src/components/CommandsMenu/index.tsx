import { useCommand } from "../../hook/useCommand";

import { CommandItem } from "./CommandItem";
import { IconButton } from "../IconButton";
import { X } from "../../styles/icons";

import keysRoutes from "../../../data/keyRoutes.json";

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
              {keysRoutes.map((item, index) => (
                <CommandItem
                  key={index}
                  label={item.label}
                  link={item.link}
                  command={item.command.split("")}
                  foreign={item.foreign}
                />
              ))}
            </ul>
          </section>

          <section>
            <h4>Media</h4>
            <ul>
              <CommandItem
                label="Github"
                link="https://github.com/MathPSantos"
                foreign
              />
              <CommandItem
                label="LinkedIn"
                link="https://www.linkedin.com/in/mathpsantos/"
                foreign
              />
            </ul>
          </section>
        </div>
      </div>
    </>
  );
}
