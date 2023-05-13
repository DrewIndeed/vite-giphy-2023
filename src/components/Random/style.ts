import styled from "styled-components";

export const RandomStyled = styled.article`
  position: relative;
  margin: 3rem auto;
  border-radius: 0.4rem;
  overflow: auto;
  height: 35rem;

  @media screen and (min-width: 1100px) {
    min-width: 18vw;
    max-width: 58vw;
  }

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.colorBg2};
  overflow: hidden;
  padding: 8rem 1rem;
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

  #random-gif-container {
    width: 100%;
    height: 29rem;
    margin-top: 3rem;
    border-radius: 0.4rem;
    overflow: auto;
    /* border: 2px solid cyan; */
  }

  .loader-holding {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
`;
