import styled from "styled-components";

export const TrendingStyled = styled.article`
  position: relative;
  padding: 2rem;
  margin-top: 1rem;
  background-color: ${(props) => props.theme.colorBg2};
  border-radius: 1rem;
  height: 62vh;
  overflow: auto;
  padding-bottom: 4rem;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colorWhite};
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .empty-msg {
    text-align: center;
    width: 100%;
    height: 80%;
    color: #fff;
    font-size: 1.5em;
    font-style: italic;
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .my-masonry-grid {
    display: -webkit-box; /* Not needed if autoprefixing */
    display: -ms-flexbox; /* Not needed if autoprefixing */
    display: flex;
    margin-left: -1.25rem; /* gutter size offset */
    width: auto;
  }

  .my-masonry-grid_column {
    padding-left: 1.25rem; /* gutter size */
    background-clip: padding-box;
  }

  /* Style your items */
  .my-masonry-grid_column > div {
    /* change div to reference your elements you put in <Masonry> */
    margin-bottom: 0.9rem;
  }
`;
