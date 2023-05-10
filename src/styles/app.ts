import styled from "styled-components";

export const AppStyled = styled.div`
  min-height: 100vh;
  background-color: ${(props) => props.theme.colorBg1};

  .category-btns {
    display: flex;
    justify-content: center;
    gap: 4rem;
    @media screen and (max-width: 768px) {
      gap: 2rem;
    }
    margin-top: 4rem;
    margin-bottom: 2rem;
  }
`;
