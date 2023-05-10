import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 3rem 22rem;
  background-color: ${(props) => props.theme.colorBg2};

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  @media screen and (max-width: 1300px) {
    padding: 2rem 10rem;
  }

  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    span {
      text-transform: uppercase;
      color: ${(props) => props.theme.colorGrey};
      font-size: 0.8rem;
    }

    svg {
      width: 10rem;
    }
  }

  #search-bar-form {
    width: 100%;

    .input-control {
      position: relative;
      width: 100%;

      .search-text-input {
        font-style: italic;
        position: relative;
        z-index: 10;
        width: 100%;
        font-family: inherit;
        font-size: 1.2rem;
        padding: 1rem 5rem 1rem 2rem;
        outline: none;
        border: none;
        border-radius: 1rem;
      }

      &::after {
        content: "";
        position: absolute;
        top: 50%;
        left: -0.3rem;
        transform: translateY(-50%);
        width: 100%;
        height: 100%;
        background: linear-gradient(
          45deg,
          ${(props) => props.theme.colorBlue2} 0%,
          ${(props) => props.theme.colorYellow} 50%,
          ${(props) => props.theme.colorPurple} 75%,
          ${(props) => props.theme.colorSalmon2} 100%
        );
        background-size: 400% 400%;
        z-index: 1;
        padding: 0.3rem;
        transform: scale(0);
        border-radius: 1rem;
        transition: all 0.3s ease;
        animation: gradient 7s ease-in-out infinite;
      }

      &:hover::after,
      &:focus-within::after {
        transform: scale(1) translateY(-49.5%);
      }

      .submit-btn {
        position: absolute;
        top: 50%;
        right: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        transform: translateY(-50%);
        border: none;
        outline: none;
        color: ${(props) => props.theme.colorWhite};
        font-size: 1.2rem;
        font-weight: 600;
        cursor: pointer;
        z-index: 10;
        height: 102%;
        padding: 0 1.5rem;
        border-top-right-radius: 1rem;
        border-bottom-right-radius: 1rem;
        background: linear-gradient(
          to right,
          ${(props) => props.theme.colorPurple},
          ${(props) => props.theme.colorSalmon}
        );
        background-size: 400% 400%;
        animation: gradient 3s ease-in-out infinite;
      }

      @keyframes gradient {
        0% {
          background-position: 0% 50%;
        }
        50% {
          background-position: 100% 50%;
        }
        100% {
          background-position: 0% 50%;
        }
      }
    }
  }
`;
