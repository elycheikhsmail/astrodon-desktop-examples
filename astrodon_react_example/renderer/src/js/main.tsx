import { BrowserRouter, HashRouter,React, ReactDOM } from "./deps.ts";
import { App } from "./app.tsx";

const BrowserApp = () => (
  <HashRouter hashType="slash">
    <App />
  </HashRouter>
);

addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<BrowserApp />, document.querySelector("#main"));
});
