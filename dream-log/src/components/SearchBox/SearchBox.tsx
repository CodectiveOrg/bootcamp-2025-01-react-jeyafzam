import MingcuteSearchLine from "../../icons/MingcuteSearchLine";

import styles from "./SearchBox.module.css";

const SearchBox = () => {
  return (
    <div className={styles["search-box"]}>
      <input type="text" placeholder="Search note..." />
      <MingcuteSearchLine className="icon" />
    </div>
  );
};
export default SearchBox;
