import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
    </div>
  );
}

export default App;
