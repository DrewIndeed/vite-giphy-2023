import styled from "styled-components";

export const RandomStyled = styled.article`
  position: relative;
  margin: 3rem auto;
  border-radius: 0.4rem;
  overflow: auto;

  @media screen and (min-width: 1400px) {
    min-width: 18vw;
    max-width: 35vw;
    min-height: 35rem;
    max-height: 38rem;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.theme.colorBg2};
  overflow: hidden;
  padding: 8rem 2rem 6rem 2rem;
  background: linear-gradient(
    45deg,
    ${(props) => props.theme.colorPurple2} 0%,
    ${(props) => props.theme.colorSalmon} 100%
  );

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    gap: 1rem;
    top: 1rem;
    left: 1rem;
    color: #fff;
    font-size: 2rem;
  }
`;
