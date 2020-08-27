import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { RootPage } from "./pages/RootPage/RootPage";

import './App.scss';

function App() {

  return (
    <Router>
      <div className="App">
        {/* <RootPage /> */}
        <Route path="/" component={ RootPage } />
      </div>
    </Router>
  )
}

export default App;