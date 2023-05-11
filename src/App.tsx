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
  const [renderedCategory, setRenderedCategory] = useState<string>("trending");
  const categoriesContentMap: Record<string, ReactNode> = {
    trending: <Trending />,
    random: <Random />,
    favorite: <div>Liked</div>,
  };

  return (
    <AppStyled theme={theme}>
      <Header />
      <div className="category-btns">
        <Button
          name="Liked GIFs"
          icon={<HeartIcon width="1.5rem" height="1.5rem" />}
          onClick={() => setRenderedCategory("liked")}
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

      <main>{categoriesContentMap[renderedCategory]}</main>
    </AppStyled>
  );
};

export default App;
