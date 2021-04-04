import { ButtonHTMLAttributes } from "react";

import styled from "./styles.module.scss";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
  isHide?: boolean;
}

export function IconButton({
  isActive = false,
  isHide = false,
  children,
  ...rest
}: IconButtonProps) {
  return (
    <button
      type="button"
      className={`
        ${styled.iconButton} 
        ${isActive ? styled.active : ""} 
        ${isHide ? styled.hide : ""}
      `}
      {...rest}
    >
      {children}
    </button>
  );
}
