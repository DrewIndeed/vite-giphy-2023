import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.colorWhite};
  font-weight: 600;
  cursor: pointer;
  font-family: inherit;
  font-size: 1.3rem;
  @media screen and (max-width: 768px) {
    font-size: 1rem;
  }

  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  transition: all 0.3s ease-in-out;

  span:first-child {
    position: relative;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.7rem 2rem;
    @media screen and (max-width: 768px) {
      padding: 0.5rem 1rem;
    }
    border-radius: 1rem;
    gap: 1rem;
    background: ${(props) => props.theme.colorBg1};
  }

  span:last-child {
    position: absolute;
    top: 50%;
    left: -0.3rem;
    transform: translateY(-50%);
    width: calc(100% + 0.6rem);
    height: calc(100% + 0.6rem);
    background: linear-gradient(
      to right,
      ${(props) => props.theme.colorSalmon},
      ${(props) => props.theme.colorYellow},
      ${(props) => props.theme.colorGreen}
    );
    background-size: 400% 200%;
    border-radius: 1rem;
    z-index: 1;
    animation: gradient 5s ease-in-out infinite;
  }

  &:hover span:first-child {
    transition: all 0.3s ease-in-out;
    color: ${(props) => props.theme.colorBlue2};
    transform: scale(0.975);
  }

  &:hover span:last-child {
    animation-play-state: paused;
  }
`;
