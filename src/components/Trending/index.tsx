import GifItem from "@components/common/GifItem";
import Loader from "@components/common/Loader";
import { useData } from "@context/dataContext";
import { useTheme } from "@context/themeContext";
import { ArrowTrendingUpIcon } from "@heroicons/react/24/solid";
import Masonry from "react-masonry-css";
import { TrendingStyled } from "./style";

const Trending = () => {
  const { trending, loading } = useData();
  const theme = useTheme();
  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    977: 2,
    500: 1,
  };

  return (
    <TrendingStyled theme={theme}>
      <h2>
        <ArrowTrendingUpIcon width="2rem" height="2rem" />
        Trending GIFs
      </h2>

      {loading && (
        <div style={{ marginTop: "12rem" }}>
          <Loader />
        </div>
      )}

      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {trending.map((giff: any, idx: number) => {
          return (
            <GifItem key={giff.id} order={idx} {...giff} giffItem={giff} />
          );
        })}
      </Masonry>
    </TrendingStyled>
  );
};

export default Trending;
