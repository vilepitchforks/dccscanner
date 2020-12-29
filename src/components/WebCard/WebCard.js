import { useStoreState } from "easy-peasy";

import css from "./WebCard.module.css";

// Styles
const cardImage = css["card-image"] + " three columns";

// Skeletons to be displayed while the website is loading
const ImageSkeleton = () => (
  <div className={css.loading + " " + cardImage}>&nbsp;</div>
);
const TitleSkeleton = () => <h5 className={css.loading}>&nbsp;</h5>;
const TextSkeleton = () => <p className={css.loading}>&nbsp;</p>;

// Default copy to be displayed on new scan
const newTitle = "New DCC Scan";
const newDescription =
  "Initiate a new scan by entering a website URL and selecting the slugs for scanning.";

const WebCard = ({ loading, isNew }) => {
  const { metadata } = useStoreState(state => state);

  const { description, icon, image, title, url } = metadata;

  return (
    <div className={css["card-container"] + " nine columns"}>
      <a href={url} target="_blank">
        {loading ? (
          <ImageSkeleton />
        ) : (
          <div className={cardImage}>
            <img src={image || "./placeholder.gif"} alt={title} />
          </div>
        )}
        <div className={css["card-body"] + " nine columns"}>
          {loading ? (
            <TitleSkeleton />
          ) : (
            <div>
              <img
                className="u-pull-left icon"
                src={icon || "./logo192.png"}
                alt="icon"
              />
              <h5>{isNew ? newTitle : title}</h5>
            </div>
          )}
          {loading ? (
            <TextSkeleton />
          ) : (
            <p>{isNew ? newDescription : description}</p>
          )}
        </div>
      </a>
    </div>
  );
};

export default WebCard;
