import { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./Component/SignUp";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
