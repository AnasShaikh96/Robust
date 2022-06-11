import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"
import Loader from "./views/layouts/Loader";

const Home = lazy(() => import('./views/pages/Home'));



function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div><Loader /></div>}>
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
