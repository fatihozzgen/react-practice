import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Quotes from "./pages/Quotes";
import QuoteDetail from "./pages/QuoteDetail";
import "./App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="navbar">
          <Link style={{ padding: "20px" }} to="/">
            Characters
          </Link>

          <Link to="/quotes">Quotes</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/char/:char_id" element={<Detail />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/quotes/:quote_id" element={<QuoteDetail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
