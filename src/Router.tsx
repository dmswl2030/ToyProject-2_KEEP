import ErrorPage from "../src/pages/ErrorPage";
import MainPage from "../src/pages/MainPage";
import { Dispatch, SetStateAction, useCallback } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

interface IRouterProps {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
}

function Router({ theme, setTheme }: IRouterProps) {
  const isLight = theme === "light";

  const onToggleDark = useCallback(() => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme, setTheme]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<MainPage isLight={isLight} onToggleDark={onToggleDark} />}
        />
        <Route path="/*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
