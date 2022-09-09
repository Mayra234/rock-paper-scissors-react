import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MainLayout } from "./layouts/MainLayout";
import { StartLayout } from "./layouts/StartLayout";
import { OptionsLayout } from "./layouts/OptionsLayout";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" element={<StartLayout />} />
        <Route path="/mode" element={<OptionsLayout />} />
        <Route path="/play" element={<MainLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
