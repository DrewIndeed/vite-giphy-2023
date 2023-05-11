import { useTheme } from "@context/themeContext";
import { ReactNode } from "react";
import { ButtonStyled } from "./style";

type Props = {
  name: string;
  icon: ReactNode;
  onClick?: () => void;
  isChosen?: boolean;
};

const Button = ({ name, icon, onClick, isChosen }: Props) => {
  const theme = useTheme();

  return (
    <ButtonStyled theme={theme} onClick={onClick} aria-label={name}>
      <span style={{ backgroundColor: isChosen ? "#4a4a4a" : "#252525" }}>
        {icon}
        {name}
      </span>
      <span></span>
    </ButtonStyled>
  );
};

export default Button;
