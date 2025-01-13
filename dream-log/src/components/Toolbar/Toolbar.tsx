import SearchBox from "../../components/SearchBox/SearchBox.tsx";
import ItemTypeFilter from "../../components/ItemTypeFilter/ItemTypeFilter.tsx";
import Button from "../../components/Button/Button.tsx";

import SolarCloudyMoonLinear from "../../icons/SolarCloudyMoonLinear.tsx";

const Toolbar = () => {
  return (
    <div className="toolbar">
      <SearchBox />
      <ItemTypeFilter />
      <Button className="theme">
        <SolarCloudyMoonLinear />
      </Button>
    </div>
  );
};
export default Toolbar;
