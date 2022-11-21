import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Giris from "./components/Giris";
import Kayit from "./components/Kayit";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Giris />} />
          <Route path="/kayit" element={<Kayit />} />
        </Routes>
        <div>test</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
