import styled from "styled-components";

export const LoaderStyled = styled.div`
  display: flex;
  justify-content: center;

  .lds-ring {
    display: inline-block;
    position: relative;
    width: 4.5rem;
    height: 4.5rem;
  }

  .lds-ring div {
    box-sizing: border-box;
    display: block;
    position: absolute;
    width: 3.5rem;
    height: 3.5rem;
    margin: 0.5rem;
    border: 0.25rem solid #00e6cc;
    border-radius: 50%;
    animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
    border-color: #00e6cc transparent transparent transparent;
  }

  .lds-ring div:nth-child(1) {
    animation-delay: -0.45s;
  }

  .lds-ring div:nth-child(2) {
    animation-delay: -0.3s;
  }

  .lds-ring div:nth-child(3) {
    animation-delay: -0.15s;
  }

  @keyframes lds-ring {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
