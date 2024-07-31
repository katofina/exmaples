import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import Navigation from "./components/Navigation";
import "./App.css";
import Sort from "./components/Sort";
import Search from "./components/BinarySearch";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigation />} />
          <Route path="search/:id" element={<Search />} />
          <Route path="sort/:id" element={<Sort />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
