import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import AddExpense from "./components/AddExpense";
import ViewExpense from "./components/ViewExpense";
import IndexPage from "./components/IndexPage";
function App() {
  return (
    <div>
      <Router>
        
        <Switch>
          <Route exact path="/" component={IndexPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
