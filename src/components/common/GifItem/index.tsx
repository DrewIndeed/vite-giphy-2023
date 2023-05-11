import { useTheme } from "@context/themeContext";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tooltip } from "react-tooltip";
import Loader from "../Loader";
import { GiftItemStyled } from "./style";

const GiftItem = ({
  id,
  order,
  title,
  embed_url,
  rendered,
  url: link,
  username,
  user,
  images: {
    original: { url },
  },
}: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const theme = useTheme();
  return (
    <GiftItemStyled theme={theme}>
      {!isLoading && <Tooltip id="gif" />}
      <div
        className="gif"
        data-tooltip-id="gif"
        data-tooltip-className="gif"
        data-tooltip-content="Double Click to Show More"
        data-tooltip-place="bottom"
      >
        {!isLoading && (
          <div className="love">
            <HeartIcon
              width="2.5rem"
              height="2.5rem"
              color={theme?.colorGreen}
            />
          </div>
        )}

        {!isLoading && (
          <a
            target="_blank"
            className="username"
            href={user?.profile_url || user?.website_url || ""}
          >
            @{username}
          </a>
        )}

        <LazyLoadImage
          beforeLoad={() => {}}
          afterLoad={() => {
            setIsLoading(false);
          }}
          src={url}
          alt={title}
          loading="lazy"
          threshold={500}
          useIntersectionObserver={false}
          visibleByDefault={order >= 0 && order <= 7}
        />

        {isLoading && (
          <div className="loading-holder">
            <Loader />
          </div>
        )}
      </div>
    </GiftItemStyled>
  );
};

export default GiftItem;
