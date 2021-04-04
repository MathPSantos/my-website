import { ButtonHTMLAttributes } from "react";

import { IconType } from "react-icons";

import styled from "./styles.module.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: IconType;
  isActive?: boolean;
}

export function IconButton({
  icon,
  isActive = false,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={
        isActive ? `${styled.iconButton} ${styled.active}` : styled.iconButton
      }
      {...rest}
    >
      {icon}
    </button>
  );
}
