import GifItem from "@components/common/GifItem";
import Loader from "@components/common/Loader";
import { useData } from "@context/dataContext";
import { useTheme } from "@context/themeContext";
import {
  ArrowTrendingUpIcon,
  HeartIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import Masonry from "react-masonry-css";
import { TrendingStyled } from "./style";

type Props = {
  isSearching?: boolean;
  isFavorite?: boolean;
  currentQuery?: string;
};
const Trending = ({ isSearching, isFavorite, currentQuery }: Props) => {
  // data from context
  const { trending, loading, searchResults, favorites } = useData();
  const theme = useTheme();

  // break points for the mansory or mosaic layout
  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    977: 2,
    500: 1,
  };

  const targetDataList = () => {
    if (isSearching) return searchResults;
    if (isFavorite) return favorites;
    return trending;
  };

  return (
    <TrendingStyled theme={theme}>
      {/* main display title at the top left corner */}
      <h2>
        {!isSearching && !isFavorite && (
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
        {isFavorite && (
          <>
            <HeartIcon width="2rem" height="2rem" />
            Favorite GIFs
          </>
        )}
      </h2>

      {/* loader of the current content */}
      {loading && (
        <div style={{ marginTop: "15%" }}>
          <Loader />
        </div>
      )}

      {/* if data list is empty */}
      {!loading && targetDataList().length === 0 && (
        <div className="empty-msg">
          Spice things up a little my friends 🚀 ...
        </div>
      )}

      {/* GIFs gallery */}
      {targetDataList().length > 0 && (
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {targetDataList().map((giff: any, idx: number) => {
            return (
              <GifItem
                key={giff.id}
                order={idx}
                isFavorite={isFavorite}
                {...giff}
              />
            );
          })}
        </Masonry>
      )}
    </TrendingStyled>
  );
};

export default Trending;
