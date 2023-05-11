import { useTheme } from "@context/themeContext";
import { HeartIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { Tooltip } from "react-tooltip";
import Loader from "../Loader";
import Modal from "../Modal";
import { GiftItemStyled } from "./style";

const GiftItem = (props: any) => {
  const {
    id,
    order,
    title,
    rating,
    embed_url,
    rendered,
    url: link,
    username,
    user,
    images: {
      original: { url },
    },
  } = props;
  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOn, setModalOn] = useState(false);

  return (
    <GiftItemStyled theme={theme} id={id}>
      {/* tooltip to inform users to double click */}
      {!isLoading && <Tooltip id="gif" />}
      {isModalOn && <Modal setModalOn={setModalOn} {...props} />}
      <div
        className="gif"
        data-tooltip-id="gif"
        data-tooltip-className="gif"
        data-tooltip-content="Double Click to Show More"
        data-tooltip-place="bottom"
        onDoubleClick={() => setModalOn(true)}
      >
        {/* button to add to Favorties */}
        {!isLoading && (
          <div className="love">
            <HeartIcon
              width="2.5rem"
              height="2.5rem"
              color={theme?.colorGreen}
            />
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
        {isLoading && (
          <div className="loading-holder">
            <Loader />
          </div>
        )}

        <LazyLoadImage
          afterLoad={() => setIsLoading(false)}
          src={url}
          alt={title}
          loading="lazy"
          threshold={500}
          useIntersectionObserver={false}
          visibleByDefault={order >= 0 && order <= 7}
        />
      </div>
    </GiftItemStyled>
  );
};

export default GiftItem;
