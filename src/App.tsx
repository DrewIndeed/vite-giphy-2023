import Header from "@components/Header";
import Button from "@components/common/Button";
import { useTheme } from "@context/themeContext";
import {
  HeartIcon,
  ArrowTrendingUpIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/solid";
import { AppStyled } from "@styles/app";

const App = () => {
  const theme = useTheme();
  return (
    <AppStyled theme={theme}>
      <Header />
      <div className="category-btns">
        <Button
          name="Liked GIFs"
          icon={<HeartIcon width="1.5rem" height="1.5rem" />}
        />
        <Button
          name="Trending GIFs"
          icon={<ArrowTrendingUpIcon width="1.5rem" height="1.5rem" />}
        />
        <Button
          name="Random GIFs"
          icon={<ArrowPathIcon width="1.5rem" height="1.5rem" />}
        />
      </div>
    </AppStyled>
  );
};

export default App;
