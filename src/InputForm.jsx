import React, { useState } from "react";

const InputForm = (props) => {
  const { img, placeholder, eyes, type, id, onAddForm } = props;
  const [input, setInput] = useState("");

  const handleOnchange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddForm(input);
  };
  return (
    <div className="register__input">
      <span className="register__icon">
        <img src={img} alt="" />
      </span>

      <input
        className="register__input-item"
        type={type}
        id={id}
        placeholder=""
        value={input}
        onChange={handleOnchange}
      />
      <label htmlFor={id} className="register__label">
        {placeholder}
      </label>
      <span className="register__icon register__eyes">
        <img src={eyes} alt="" />
      </span>
    </div>
  );
};

export default InputForm;
