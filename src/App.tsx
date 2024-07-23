import React from "react";
import { Route, Routes } from "react-router-dom";

import Chtjd from "./pages/chtjd/index";
import ChtjdUpgrade from "./pages/chtjd_upgrade/index";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/chtjd" element={<Chtjd />} />
        <Route path="/chtjd_update" element={<ChtjdUpgrade />} />
      </Routes>
    </div>
  );
}

export default App;
