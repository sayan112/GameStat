import React from 'react'
  import { Route, Routes } from "react-router";
 import Home from './Pages/Home'
const App = () => {

  return (
    <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/game/:id" element={<Home />} />
    </Routes>
  );
}

export default App