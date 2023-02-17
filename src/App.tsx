import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import "./index.scss";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";

export const App = () => {
  return (
    <div className="app">
      <div>
        <Link to="/about">ABOUT</Link>
        <Link to="/">main</Link>
      </div>
      <Suspense fallback="loading">
        <Routes>
          <Route path="/about" element={<AboutPageLazy />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};
