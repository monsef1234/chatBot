import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "./components/Layouts";
import Main from "./pages/Main";
import About from "./pages/About";
const App = () => {
  return (
    <>
      <Routes>
        <Route element={<Layouts />} path="/">
          <Route element={<Main />} index />
          <Route element={<About />} path="about" />
        </Route>
      </Routes>
    </>
  );
};

export default App;
