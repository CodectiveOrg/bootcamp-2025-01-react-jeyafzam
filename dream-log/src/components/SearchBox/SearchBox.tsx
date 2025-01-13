
import MingcuteSearchLine from "../../icons/MingcuteSearchLine";
import "./SearchBox.css"

const SearchBox= () => {
    return(
        <div className="search-box">
            <input type="text" />
            <MingcuteSearchLine className="icon" />
          </div>
    )
}
export default SearchBox;