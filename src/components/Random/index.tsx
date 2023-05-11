import GiftItem from "@components/common/GifItem";
import Loader from "@components/common/Loader";
import { useData } from "@context/dataContext";
import { useTheme } from "@context/themeContext";
import { ArrowPathIcon } from "@heroicons/react/24/solid";
import { RandomStyled } from "./style";

const Random = () => {
  const { random: randomGifData, loading } = useData();
  const theme = useTheme();

  return (
    <RandomStyled theme={theme}>
      {/* title */}
      <h2>
        <ArrowPathIcon width="2rem" height="2rem" />
        Random GIF
      </h2>

      {/* random gifyt display */}
      {loading ? <Loader /> : <GiftItem {...randomGifData} isRandom />}
    </RandomStyled>
  );
};

export default Random;
