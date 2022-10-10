import React from "react";
import VideoGrid from "./components/VideoGrid";
import VideoDetails from "./components/VideoDetails";
import { Route, Switch } from "react-router-dom";
import "./App.css";

export const config = {
  endpoint: `https://07ddcc16-d0ab-4dec-b0f2-63562ece73b1.mock.pstmn.io/v1`,
};

function App() {

  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={VideoGrid}/>
        <Route exact path="/video/:id" component={VideoDetails}/>
      </Switch>
    </div>
  );
}

export default App;


