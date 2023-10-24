import React from "react";
import Inputs from "./Inputs";
const LogInForm = () => {
  return (
    <div className="mainContainer">
      <form className="form">
        <h1 className="heading">Log in form </h1>
        <Inputs labelText="firstName" />
        <Inputs labelText="lastName" />
        <Inputs labelText="Email" type="email" />
        <Inputs labelText="Password" type="password" />
        <Inputs labelText="Adress" type="text" />
        <Inputs labelText="City" type="text" />
        <Inputs labelText="Age" type="number" />
        <button type="submit" className="button">
          Register
        </button>
      </form>
    </div>
  );
};
export default LogInForm;
