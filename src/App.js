import React from "react";
import "./App.css";
import Navebar from "./components/navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";

import BookFind from "./components/pages/BookFind";
function App() {
  return (
    <>
      <Router>
        <Navebar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Books" exact component={BookFind} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
