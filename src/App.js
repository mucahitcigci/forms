import React, { useState } from "react";

import Giris from "./components/Giris";
import Kayit from "./components/Kayit";
function App() {
  const [currentForm, setCurrentForm] = useState("giris");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <div>
      {currentForm === "giris" ? (
        <Giris onFormSwitch={toggleForm} />
      ) : (
        <Kayit onFormSwitch={toggleForm} />
      )}
      {/* <BrowserRouter>
        <Routes>
          <Route path="/" element={<Giris />} />
          <Route path="/kayit" element={<Kayit />} />
        </Routes>
        <div>test</div>
      </BrowserRouter> */}
    </div>
  );
}

export default App;
