import { useRouter } from "next/router";
import { useCommand } from "../../../hook/useCommand";
import styled from "./styles.module.scss";

interface CommandItemProps {
  label: string;
  link: string;
  foreign?: boolean;
  command?: string[];
}

export function CommandItem({
  label,
  link,
  foreign = false,
  command = [],
}: CommandItemProps) {
  const { toggleCommandMenuOpen } = useCommand();
  const route = useRouter();

  function handlePushLink() {
    if (!foreign) {
      route.push(link);
      toggleCommandMenuOpen(false);
    } else {
      window.open(link, "_blank").focus();
    }
  }

  return (
    <li onClick={handlePushLink} className={styled.commandItem}>
      <h5>{label}</h5>

      <div>
        {command.map((item, index) => (
          <span key={index}>{item.toUpperCase()}</span>
        ))}
      </div>
    </li>
  );
}
