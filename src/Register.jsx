import React, { useState } from "react";

const Register = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }    


  return (
    <>
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full Name</label>
        <input
          value={name}
          onChange={handleNameChange}
          name="name"
          id={name}
          placeholder="Full Name"
        ></input>
        <label htmlFor="email">email</label>
        <input
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="youremail@gmail.com"
          id="email"
          name="email"
        ></input>
        <label htmlFor="password">password</label>
        <input
          value={password}
          onChange={handlePasswordChange}
          type="password"
          placeholder="********"
          id="passwrod"
          name="password"
        ></input>
        <button type="submit">Register</button>
      </form>
      <button className="link-btn" onClick={() => props.onFormSwitch("login")}>
        Already have an account? Login here
      </button>
    </>
  );
};

export default Register;
