import { useData } from "@context/dataContext";
import { useTheme } from "@context/themeContext";
import { HeartIcon } from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tooltip } from "react-tooltip";
import Loader from "../Loader";
import Modal from "../Modal";
import { GifItemStyled } from "./style";

const GifItem = (props: any) => {
  const {
    id,
    order,
    title,
    isRandom,
    url: link,
    username,
    user,
    images: {
      original: { url: originUrl },
      fixed_height_downsampled: { url },
      downsized: { url: downsampledUrl },
    },
    isFavorite,
  } = props;
  const { saveToFavorites, removeFromFavorites } = useData();
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOn, setModalOn] = useState(false);

  return (
    <GifItemStyled theme={theme} id={id}>
      {/* tooltip to inform users to double click */}
      {!isLoading && <Tooltip id="gif" />}
      {isModalOn && <Modal setModalOn={setModalOn} {...props} />}
      <div
        className="gif"
        data-tooltip-id="gif"
        data-tooltip-content="Double Click to Show More"
        data-tooltip-place="bottom"
        onDoubleClick={() => setModalOn(true)}
      >
        <LazyLoadImage
          afterLoad={() => setIsLoading(false)}
          src={isRandom ? originUrl : url}
          alt={title}
          threshold={2000}
          effect="opacity"
          useIntersectionObserver={false}
          // visibleByDefault={order >= 0 && order <= 7}
          visibleByDefault
        />

        {/* button to add to Favorties */}
        {!isLoading && (
          <div
            className="love"
            onClick={() => {
              const targetDataForProcessing = {
                id,
                title,
                url: link,
                images: {
                  fixed_height_downsampled: { url },
                  downsized: { url: downsampledUrl },
                },
              };

              // if the current screen is the Favorite GIFs
              // then, when icon is clicked, remove it from the favorites list
              if (isFavorite) removeFromFavorites(targetDataForProcessing);
              else saveToFavorites(targetDataForProcessing);
            }}
          >
            {isFavorite ? (
              <HeartIcon
                width="2.5rem"
                height="2.5rem"
                color={theme?.colorGreen}
              />
            ) : (
              <HeartIconSolid
                width="2.5rem"
                height="2.5rem"
                color={theme?.colorGreen}
              />
            )}
          </div>
        )}

        {/* username preiew at the bottom left corners */}
        {!isLoading && (
          <a
            target="_blank"
            className="username"
            href={user?.profile_url || user?.website_url || ""}
          >
            {username && `@${username}`}
          </a>
        )}

        {/* placeholder when the GIF is loading */}
        {isLoading && !isRandom && (
          <div className="loading-holder">
            <Loader />
          </div>
        )}
        {isLoading && isRandom && (
          <p className="random-loading-holder">
            Still loading, almost there...
          </p>
        )}
      </div>
    </GifItemStyled>
  );
};

export default GifItem;
