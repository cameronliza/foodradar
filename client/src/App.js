import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Routes from "./component/routes/index";
import "./App.css";
function App() {
  return (
    <div className="App">
      <Router>
        <Route component={Routes} />
      </Router>
    </div>
  );
}

export default App;
