import Header from "@components/Header";
import Random from "@components/Random";
import Trending from "@components/Trending";
import Button from "@components/common/Button";
import { useData } from "@context/dataContext";
import { useTheme } from "@context/themeContext";
import {
  ArrowPathIcon,
  ArrowTrendingUpIcon,
  HeartIcon,
} from "@heroicons/react/24/solid";
import { AppStyled } from "@styles/app";
import type { ReactNode } from "react";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "react-tooltip/dist/react-tooltip.css";

const App = () => {
  const { getRandom, getTrending } = useData();
  const theme = useTheme();

  // states
  const [renderedCategory, setRenderedCategory] = useState<string>("trending");
  const [currentQuery, setCurrentQuery] = useState<string>("");

  // map to choose what content to render on the main screen
  const categoriesContentMap: Record<string, ReactNode> = {
    random: <Random />,
    favorites: <Trending isSearching={false} isFavorite />,
    trending: <Trending isSearching={false} isFavorite={false} />,
    searching: (
      <Trending isSearching isFavorite={false} currentQuery={currentQuery} />
    ),
  };

  // button click handlers
  const handleFavoriteClick = () => {
    setRenderedCategory("favorites");
    const scrollDemo = document.querySelector("#gallery-scroll");
    scrollDemo?.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleTrendingClick = () => {
    setRenderedCategory("trending");
    getTrending();
    const scrollDemo = document.querySelector("#gallery-scroll");
    scrollDemo?.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleRandomClick = () => {
    getRandom();
    setRenderedCategory("random");
  };

  return (
    <AppStyled theme={theme}>
      {/* header section with search bar */}
      <Header {...{ setCurrentQuery, setRenderedCategory }} />

      {/* list of buttons */}
      <div className="category-btns">
        <Button
          name="Favorite GIFs"
          icon={<HeartIcon width="1.5rem" height="1.5rem" />}
          isChosen={renderedCategory === "favorites"}
          onClick={handleFavoriteClick}
        />
        <Button
          name="Trending GIFs"
          icon={<ArrowTrendingUpIcon width="1.5rem" height="1.5rem" />}
          isChosen={renderedCategory === "trending"}
          onClick={handleTrendingClick}
        />
        <Button
          name="Random GIF"
          icon={<ArrowPathIcon width="1.5rem" height="1.5rem" />}
          isChosen={renderedCategory === "random"}
          onClick={handleRandomClick}
        />
      </div>

      {/* main content display */}
      <main>{categoriesContentMap[renderedCategory]}</main>

      {/* for toasting messages */}
      <ToastContainer
        autoClose={3000}
        theme="colored"
        position="bottom-center"
      />
    </AppStyled>
  );
};

export default App;
