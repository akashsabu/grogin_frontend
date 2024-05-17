import React from "react";
import AuthRoute from "./routing/AuthRoute";
import AppRoute from "./routing/AppRoute";


import './App.css'


function App() {

  return (
    <div className="App">
      <AuthRoute />
      <AppRoute /> 
    </div>
  );
}

export default App;
