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
import "react-tooltip/dist/react-tooltip.css";

const App = () => {
  const { getRandom } = useData();
  const theme = useTheme();

  // states
  const [renderedCategory, setRenderedCategory] = useState<string>("trending");
  const [currentQuery, setCurrentQuery] = useState<string>("");

  // map to choose what content to render on the main screen
  const categoriesContentMap: Record<string, ReactNode> = {
    trending: <Trending isSearching={false} isFavorite={false} />,
    random: <Random />,
    searching: (
      <Trending isSearching isFavorite={false} currentQuery={currentQuery} />
    ),
    favorites: <Trending isSearching={false} isFavorite />,
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
          onClick={() => setRenderedCategory("favorites")}
        />
        <Button
          name="Trending GIFs"
          icon={<ArrowTrendingUpIcon width="1.5rem" height="1.5rem" />}
          onClick={() => setRenderedCategory("trending")}
        />
        <Button
          name="Random GIF"
          icon={<ArrowPathIcon width="1.5rem" height="1.5rem" />}
          onClick={() => {
            getRandom();
            setRenderedCategory("random");
          }}
        />
      </div>

      {/* main content display */}
      <main>{categoriesContentMap[renderedCategory]}</main>
    </AppStyled>
  );
};

export default App;
