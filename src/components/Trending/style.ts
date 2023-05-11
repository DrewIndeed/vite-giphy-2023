import styled from "styled-components";

export const TrendingStyled = styled.article`
  padding: 2rem;
  background-color: ${(props) => props.theme.colorBg2};
  border-radius: 1rem;
  height: 70vh;
  overflow: auto;

  h2 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: ${(props) => props.theme.colorWhite};
    display: flex;
    align-items: center;
    gap: 1rem;
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
