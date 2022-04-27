import "./App.css";
import "./Styles.css";
import Search from "./Search";
import Forecast from "./Forecast";
import Footer from "./Footer";
import SearchEngine from "./SearchEngine";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="container border border-dark">
      <div className="row">
        <Search />
      </div>
      <div className="row">
        <Forecast />
      </div>
      <div className="row">
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
