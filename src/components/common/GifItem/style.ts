import styled from "styled-components";

export const GifItemStyled = styled.div`
  .gif {
    position: relative;

    img {
      width: 100%;
      border-bottom-left-radius: 5px;
      border-bottom-right-radius: 5px;
      border: 1px solid #00e6cc50;
      border-top: none;
      border-bottom: none;
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
      color: #00e6cc;
      position: absolute;
      bottom: 1rem;
      left: 1rem;
    }

    .loading-holder {
      width: 100%;
      padding: 1rem 0 2rem 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 0.3rem;
      border: 1px solid #00e6cc50;
      border-bottom: none;
      transform: translateY(20px);
    }

    .random-loading-holder {
      color: #fff;
      margin-bottom: 1rem;
    }
  }
`;
