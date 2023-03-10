import "./App.css";
import NavBar from "./components/Header/NavBar";
import CardHolder from "./components/Card/CardHolder";

function App() {
  return (
    <div className="App">
      {/* Navabar */}
      <NavBar />

      {/* Search Results */}
      <CardHolder />
      {/* Footer */}
    </div>
  );
}

export default App;
