import styled from "styled-components";

export const ModalStyled = styled.div`
  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #25252505;
    backdrop-filter: blur(0.2rem);
    z-index: 12;
  }

  .modal {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    position: fixed;
    top: 50%;
    left: 50%;
    min-width: 18vw;
    min-height: 20rem;

    transform: translate(-50%, -50%);
    z-index: 13;
    border-radius: 15px;
    background: #25252570;
    backdrop-filter: blur(1rem);

    .loading-holder {
      position: absolute;
      top: 1rem;
      left: 1rem;
    }

    .modal-content {
      padding: 2rem;
      display: flex;
      gap: 2rem;
      @media screen and (max-width: 1400px) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
      }

      img {
        width: 90%;
        height: 90%;
        border-radius: 5px;
        object-fit: cover;
        /* border: 1px solid ${(props) => props.theme.colorBlue2}; */
      }

      .text-content {
        h3 {
          font-size: 1.6rem;
          text-align: center;
          font-weight: 800;
          background: linear-gradient(
            45deg,
            ${(props) => props.theme.colorBlue2} 0%,
            ${(props) => props.theme.colorYellow} 50%,
            ${(props) => props.theme.colorPurple} 75%,
            ${(props) => props.theme.colorSalmon2} 100%
          );
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 400% 400%;
          animation: gradient 5s ease-in-out infinite;
        }

        h4 {
          color: #fff;
          span {
            text-transform: uppercase;
          }
          border-bottom: 1px solid ${(props) => props.theme.colorWhite};
          padding-bottom: 0.5rem;
          margin-bottom: 2rem;
          margin-top: 2rem;
        }

        .share-item {
          margin-bottom: 1rem;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease-in-out;
          color: ${(props) => props.theme.colorWhite};

          &:hover {
            transform: scale(1.1) translateX(25px);
          }

          a {
            font-size: inherit;
            font-family: inherit;
            color: inherit;
            text-decoration: none;
            display: grid;
            grid-template-columns: 40px 1fr;
            align-items: center;

            span {
              margin-left: 1rem;
            }
          }
        }

        .giffy {
          border-bottom: 1px solid ${(props) => props.theme.colorWhite};
          padding-bottom: 0.5rem;
          margin-bottom: 2rem;
        }
      }
    }
  }
`;
