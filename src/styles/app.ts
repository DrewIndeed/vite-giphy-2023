import styled from "styled-components";

export const AppStyled = styled.div`
  height: 100vh;
  overflow: hidden;
  background-color: ${(props) => props.theme.colorBg1};

  .category-btns {
    display: flex;
    justify-content: center;
    gap: 4rem;
    @media screen and (max-width: 768px) {
      gap: 2rem;
    }
    margin-top: 2rem;
  }

  main {
    padding: 2rem 8rem;
    @media screen and (max-width: 1300px) {
      padding: 2rem 4rem;
    }
  }
`;
