import Input from "../Input/Input.tsx";
import ItemTypeFilter from "../../components/ItemTypeFilter/ItemTypeFilter.tsx";
import Button from "../../components/Button/Button.tsx";

import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import SolarCloudyMoonLinear from "../../icons/SolarCloudyMoonLinear.tsx";

import styles from "./Toolbar..module.css";

const Toolbar = () => {
  return (
    <div className={styles.Toolbar}>
      <Input
        placeholder="Search Dream..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <ItemTypeFilter />
      <Button sameWidthHeight className={styles.theme}>
        <SolarCloudyMoonLinear />
      </Button>
    </div>
  );
};

export default Toolbar;
