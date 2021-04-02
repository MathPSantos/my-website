import { useEffect, useState } from "react";

import { STORAGE_KEY } from "../../../../constants";

import { Button } from "./styles";

import { Heart } from "../../../../styles/icons";

export function LoveButton() {
  const [isLoved, setIsLoved] = useState<boolean>(false);

  useEffect(() => {
    const storagedLove = localStorage.getItem(`${STORAGE_KEY}loved`);

    if (storagedLove) {
      return setIsLoved(storagedLove === "true");
    }
  }, []);

  useEffect(
    () => localStorage.setItem(`${STORAGE_KEY}loved`, JSON.stringify(isLoved)),
    [isLoved]
  );

  return (
    <Button isLoved={isLoved} onClick={() => setIsLoved(!isLoved)}>
      <Heart />
    </Button>
  );
}
