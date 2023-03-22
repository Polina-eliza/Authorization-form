import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";
import './App.css';

function App() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };

  return (
    <div className="App">
      <div className="auth-form-container">
      {currentForm === "login" ? (
        <Login onFormSwitch={toggleForm} />
      ) : (
        <Register onFormSwitch={toggleForm} />
      )}
      </div>
     
    </div>
  );
}

export default App;
