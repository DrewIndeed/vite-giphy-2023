import styled from "styled-components";

export const GiftItemStyled = styled.div`
  .gif {
    position: relative;

    img {
      width: 100%;
      border-radius: 5px;
    }

    .love {
      position: absolute;
      top: 1rem;
      right: 1rem;
      cursor: pointer;

      &:hover {
        transform: scale(1.17);
        transition: all 0.3s ease-in-out;
      }
    }

    .username {
      color: #fff;
      position: absolute;
      bottom: 1rem;
      left: 1rem;
    }

    .loading-holder {
      width: 100%;
      height: 25rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;
      border: 1px solid #a6a6a650;
    }

    .random-loading-holder {
      color: #fff;
      margin-bottom: 1rem;
    }
  }
`;
