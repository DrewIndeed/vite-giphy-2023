import React, { ReactNode } from "react";
import { ButtonStyled } from "./style";
import { useTheme } from "@context/themeContext";

type Props = {
  name: string;
  icon: ReactNode;
  onClick?: () => {};
};

const Button = ({ name, icon, onClick }: Props) => {
  const theme = useTheme();

  return (
    <ButtonStyled theme={theme} onClick={onClick}>
      <span>
        {icon}
        {name}
      </span>
      <span></span>
    </ButtonStyled>
  );
};

export default Button;
