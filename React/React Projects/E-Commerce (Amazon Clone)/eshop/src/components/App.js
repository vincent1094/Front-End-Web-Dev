import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/checkout" element={<div><Header/><Checkout/></div>}>
          </Route>

          <Route path="/" element={<div><Header /><Home /></div>}>
          </Route>

          <Route path="/login" element={<div><Header /><Login /></div>}>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
