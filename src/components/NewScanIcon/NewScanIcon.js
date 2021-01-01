import { useStoreActions } from "easy-peasy";

import css from "./NewScanIcon.module.css";

const NewScanIcon = ({ setNewScan }) => {
  const { reSetScanUrl } = useStoreActions(actions => actions);

  return (
    <button
      className={css.newScan}
      type="button"
      onClick={() => {
        // Reset all before initiating a new scan
        reSetScanUrl();
        setNewScan(true);
      }}
    >
      <span className={css.label}>
        <svg className={css.icon} focusable="false" viewBox="0 0 24 24">
          <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
        </svg>
      </span>
    </button>
  );
};

export default NewScanIcon;
