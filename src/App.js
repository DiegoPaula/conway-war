import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";

import Homepage from "./pages/Homepage";
import Game from "./pages/Game";

export default function App() {
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <h1>Conway's Game of Life</h1>
        <h2>Github War</h2>
        <Switch>
          <Route component={Homepage} path="/" exact></Route>
          <Route component={Game} path="/game"></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}
