import Header from "./components/Header/Header.tsx";
import ItemsList from "./components/ItemsList/ItemsList.tsx";
import Footer from "./components/Footer/Footer.tsx";

import "./App.module.css";
import Toolbar from "./components/Toolbar/Toolbar.tsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Toolbar/>
        <ItemsList />
      </main>
      <Footer />
    </div>
  );
}

export default App;
