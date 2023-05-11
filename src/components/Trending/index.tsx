import GifItem from "@components/common/GifItem";
import Loader from "@components/common/Loader";
import { useData } from "@context/dataContext";
import { useTheme } from "@context/themeContext";
import { ArrowTrendingUpIcon, ListBulletIcon } from "@heroicons/react/24/solid";
import Masonry from "react-masonry-css";
import { TrendingStyled } from "./style";

type Props = {
  isSearching?: boolean;
  currentQuery?: string;
};
const Trending = ({ isSearching, currentQuery }: Props) => {
  const { trending, loading, searchResults } = useData();
  const theme = useTheme();

  // break points for the mansory or mosaic layout
  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    977: 2,
    500: 1,
  };

  return (
    <TrendingStyled theme={theme}>
      {/* main display title at the top left corner */}
      <h2>
        {!isSearching && (
          <>
            <ArrowTrendingUpIcon width="2rem" height="2rem" />
            Trending GIFs
          </>
        )}
        {isSearching && (
          <>
            <ListBulletIcon width="2rem" height="2rem" />
            Search Results for "{currentQuery}"
          </>
        )}
      </h2>

      {/* loader of the current content */}
      {loading && (
        <div style={{ marginTop: "12rem" }}>
          <Loader />
        </div>
      )}

      {/* GIFs gallery */}
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="my-masonry-grid"
        columnClassName="my-masonry-grid_column"
      >
        {(isSearching ? searchResults : trending).map(
          (giff: any, idx: number) => {
            return (
              <GifItem key={giff.id} order={idx} {...giff} giffItem={giff} />
            );
          }
        )}
      </Masonry>
    </TrendingStyled>
  );
};

export default Trending;
