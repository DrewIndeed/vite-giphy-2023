import { useTheme } from "@context/themeContext";
import {
  CodeBracketIcon,
  GifIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Loader from "../Loader";
import { ModalStyled } from "./style";

const Modal = (props: any) => {
  const {
    title,
    rating,
    embed_url,
    url: link,
    images: {
      fixed_height_downsampled: { url },
      downsized: { url: downsampledUrl },
    },
    setModalOn,
  } = props;

  const theme = useTheme();
  const [isLoading, setIsLoading] = useState(true);

  return (
    <ModalStyled theme={theme}>
      <div className="modal">
        {/* placeholder when the GIF is loading */}
        {isLoading && (
          <div className="loading-holder">
            <Loader />
          </div>
        )}

        <div className="modal-content">
          <LazyLoadImage
            afterLoad={() => setIsLoading(false)}
            src={downsampledUrl}
            alt={title}
            loading="lazy"
            threshold={500}
            className="giff"
            useIntersectionObserver={false}
          />
          {!isLoading && (
            <div className="text-content">
              <h3>{title}</h3>
              <h4>
                <span>{rating}</span> RATING
              </h4>

              <div className="share-item share">
                <a href={link} target={"_blank"}>
                  <PaperAirplaneIcon
                    width="2.5rem"
                    height="2.5rem"
                    color="#fff"
                  />
                  <span>Share</span>
                </a>
              </div>

              <div className="share-item embed">
                <a href={embed_url} target="_blank">
                  <CodeBracketIcon
                    width="2.5rem"
                    height="2.5rem"
                    color="#fff"
                  />
                  <span>Embed</span>
                </a>
              </div>

              <div className="share-item giffy">
                <a href={link} target="_blank">
                  <GifIcon width="2.5rem" height="2.5rem" color="#fff" />
                  <span>GIPHY</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="overlay" onClick={() => setModalOn(false)} />
    </ModalStyled>
  );
};

export default Modal;
