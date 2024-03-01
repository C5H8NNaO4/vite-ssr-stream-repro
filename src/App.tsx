import "./App.css";
import { BrowserRouter, Routes } from "react-router-dom";
import { StaticRouter } from "react-router-dom/server";

import { routes } from "./routes";

const Router = typeof window === "undefined" ? StaticRouter : BrowserRouter;
function App({ url }: { url?: string }) {
  return (
    <Router url={url}>
      <Routes>{routes}</Routes>
    </Router>
  );
}

export default App;
