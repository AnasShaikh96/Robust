import Home from "./views/pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home /> } />

    </Routes>
    </BrowserRouter>
  );
}

export default App;
