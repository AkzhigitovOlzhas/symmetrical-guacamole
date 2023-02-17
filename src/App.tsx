import clsx from "clsx";
import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { MainPage } from "./pages/MainPage/MainPage";
import { AboutPageLazy } from "./pages/AboutPage/AboutPage.lazy";
import "./style/index.scss";
import { useTheme } from "./theme/useTheme";

export const App = () => {
  const { theme, togleTheme } = useTheme();

  return (
    <div className={clsx("app", theme)}>
      <div>
        <Link to="/about">ABOUT</Link>
        <Link to="/">main</Link>
      </div>
      <div>
        <button onClick={togleTheme}>TOGGLE</button>
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
