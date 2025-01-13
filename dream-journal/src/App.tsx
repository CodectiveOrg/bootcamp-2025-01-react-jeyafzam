import MingcuteSearchLine from "./icons/MingcuteSearchLine.tsx";
import LineMdMoonRisingLoop from "./icons/LineMdMoonRisingLoop.tsx";

import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>Dream Journal</h1>
      </header>
      <main>
        <div className="toolbar">
          <div className="search-box">
            <input type="text" />
            <MingcuteSearchLine className="icon" />
          </div>
          <select>
            <option value="">All</option>
            <option value="">Filter 1</option>
            <option value="">Filter 2</option>
          </select>
          <button className="theme">
            <LineMdMoonRisingLoop />
          </button>
        </div>
        <ul className="items"></ul>
      </main>
      <footer>
        <button className="add">+</button>
      </footer>
    </div>
  );
}

export default App;
