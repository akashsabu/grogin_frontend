import React from "react";
import AuthRoute from "./routing/AuthRoute";
import AppRoute from "./routing/AppRoute";
import { useSelector } from "react-redux";


import './App.css'


function App() {

  return (
    <div className="App">
            <AppRouter />
    </div>
  );
}


function AppRouter() {
    // const log_status = useSelector((state) => state.user.value.is_logged_in);
    const log_status = true;

  return (
    <>
      {log_status ? <AppRoute /> : <AuthRoute />}
    </>
  );
} 
export default App;
