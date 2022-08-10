import { BrowserRouter, Routes, Route } from "react-router-dom";

import "assets/scss/style.scss";

import LandingPage from "pages/LandingPage";
import Example from "pages/Example";
import Detail from "pages/DetailsPage";
import Checkout from "pages/Checkout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/example" element={<Example />} />
          <Route path="/properties/:id" element={<Detail />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
