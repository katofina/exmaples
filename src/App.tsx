import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<App />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
