import React, { useState } from "react";
const Inputs = ({ labelText, type }) => {
  const [inputsValue, setInputsValue] = useState("");
  const [error, setError] = useState("");

  const changeValue = (e) => {
    setInputsValue(e.target.value);
    if (labelText === "Email") {
      if (e.target.value.includes("@gmail.com")) {
        setError("");
      } else {
        setError("Неволидный email");
      }
    }
    if (labelText === "Password") {
      if (inputsValue.length < 6) {
        setError("пороль должен содержать более 6 символов");
      } else {
        setError("");
      }
    }
    if (labelText === "Adress") {
      if (inputsValue.length >= 6) {
        setError("");
      } else {
        setError("поле не должно быть пустым");
      }
    }
    if (labelText === "Age") {
      if (e.target.value > 18) {
        setError("");
      } else {
        setError("Возраст должен быть старше 18 лет!");
      }
    }
    if (labelText === "City") {
      if (inputsValue.length >= 2) {
        setError("");
      } else {
        setError("поле не должно быть пустым");
      }
    }
  };
  return (
    <div className="container">
      <label htmlFor="">{labelText}</label>
      <input
        type={type ? type : "text"}
        value={inputsValue}
        onChange={changeValue}
      />
      <p className="errorText">{error}</p>
      {inputsValue === "" ? (
        <p className="errorText">Поле не должно быть пустым</p>
      ) : (
        ""
      )}
    </div>
  );
};

export default Inputs;
