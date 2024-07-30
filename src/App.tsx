import React from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import Navigation from "./components/Navigation";
import BinarySearch from "./components/BinarySearch";
import './App.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigation/>} />
          <Route path="/binarysearch" element={<BinarySearch/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
