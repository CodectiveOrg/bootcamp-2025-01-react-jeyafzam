import SearchBox from "../../components/SearchBox/SearchBox.tsx";
import ItemTypeFilter from "../../components/ItemTypeFilter/ItemTypeFilter.tsx";
import Button from "../../components/Button/Button.tsx";

import SolarCloudyMoonLinear from "../../icons/SolarCloudyMoonLinear.tsx";

import styles from "./Toolbar..module.css"

const Toolbar = () => {
  return (
    <div className={styles.Toolbar}>
      <SearchBox />
      <ItemTypeFilter />
      <Button sameWidthHeight className={styles.theme}>
        <SolarCloudyMoonLinear />
      </Button>
    </div>
  );
};
export default Toolbar;
