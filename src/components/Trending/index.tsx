import GifItem from "@components/common/GifItem";
import Loader from "@components/common/Loader";
import { useData } from "@context/dataContext";
import { useTheme } from "@context/themeContext";
import {
  ArrowTrendingUpIcon,
  HeartIcon,
  ListBulletIcon,
} from "@heroicons/react/24/solid";
import throttle from "lodash.throttle";
import { useEffect } from "react";
import Masonry from "react-masonry-css";
import { TrendingStyled } from "./style";

type Props = {
  isSearching?: boolean;
  isFavorite?: boolean;
  currentQuery?: string;
};

const Trending = ({ isSearching, isFavorite, currentQuery }: Props) => {
  // data from context
  let offset = 0;
  const { trending, loading, searchResults, favorites, getMoreTrending } =
    useData();
  const theme = useTheme();

  // break points for the mansory or mosaic layout
  const breakpointColumnsObj = {
    default: 4,
    1400: 3,
    977: 2,
    500: 1,
  };

  const targetDataList = () => {
    const currentIds: Record<string, number> = {};
    if (isSearching && !isFavorite) return searchResults;
    if (isFavorite && !isSearching) return favorites;
    return trending
      .map((item: any) => {
        if (!(item.id in currentIds)) currentIds[item.id] = 1;
        else currentIds[item.id] = currentIds[item.id] + 1;
        return item;
      })
      .filter((item: any) => currentIds[item.id] === 1);
  };

  useEffect(() => {
    // if it is Trending List
    if (!isFavorite && !isSearching) {
      // target gallery from DOM
      const scrollDemo = document.querySelector("#gallery-scroll");

      // detect bottom of scrolling and fetch more Trending GIFs
      const handleScroll = throttle(() => {
        const sh = scrollDemo?.scrollHeight as number;
        const st = Math.floor(scrollDemo?.scrollTop as number);
        const ch = scrollDemo?.clientHeight;

        // formula to detect SCROLL BOTTOM, found by myself
        if (
          // equals case
          sh - st === ch ||
          // other differences, boundary will be +- 2
          sh - st - 1 === ch ||
          sh - st - 2 === ch ||
          sh - st + 1 === ch ||
          sh - st + 2 === ch
        ) {
          // update offset to avoid duplicate data and get new GIFs
          offset += 10;
          getMoreTrending(offset);

          // scroll back to top a little
          setTimeout(() => {
            scrollDemo?.scrollTo({ top: st - 200, behavior: "smooth" });
          }, 400);
        }
      }, 200);

      // add scroll event listener on GIFs gallery
      scrollDemo?.addEventListener("scroll", handleScroll);

      // clean up
      return () => scrollDemo?.removeEventListener("scroll", handleScroll);
    }
  }, [isFavorite, isSearching]);

  return (
    <TrendingStyled theme={theme} id="gallery-scroll">
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
            Search Results for "{currentQuery}" (30)
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
        <div
          style={{
            position: "absolute",
            zIndex: "20",
            bottom: "1rem",
            right: "1rem",
          }}
        >
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
