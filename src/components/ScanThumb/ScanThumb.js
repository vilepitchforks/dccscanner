import { useStoreState } from "easy-peasy";

import { dropDb } from "../../lib/helpers/processDb";

import css from "./ScanThumb.module.css";

const ScanThumb = ({ thumbnail, setShowModal, setDbName, setdeleteDb }) => {
  const { url, image, icon, title, description, dbName } = thumbnail;

  const { scanUrl } = useStoreState(state => state);

  return (
    <div className={css["thumbnail-plh"] + " columns three"}>
      <div className={css["thumbnail-img-plh"]}>
        {dbName !== scanUrl && (
          <svg
            className={css["thumbnail-close-icon"]}
            onClick={async () => {
              try {
                console.log("Deletig db ", dbName);
                const d = await dropDb(dbName);
                setdeleteDb(d => !d);
                console.log("db deleted?", d);
              } catch (error) {
                console.warn("Error while deleting the db for ", url, err);
              }
            }}
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"></path>
          </svg>
        )}
        <img
          className={css["thumbnail-img"]}
          src={image || "./placeholder.gif"}
          alt={description}
          title={description}
        />
      </div>
      <div className={css["thumbnail-body-plh"]}>
        <img
          className={css["thumbnail-icon"] + " u-pull-left"}
          src={icon || "./favicon.ico"}
          alt="icon"
        />
        <h6 className={css["thumbnail-title"]} alt={title} title={title}>
          {title || "Lorem ipsum dolor sit."}
        </h6>
        <a
          title={url}
          className={css["thumbnail-link"]}
          onClick={() => {
            setShowModal(true);
            setDbName(dbName);
          }}
        >
          View DCC data
        </a>
      </div>
    </div>
  );
};

export default ScanThumb;
