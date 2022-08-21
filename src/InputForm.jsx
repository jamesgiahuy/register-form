import React from "react";

const InputForm = (props) => {
  const { img, placeholder, eyes, type, id } = props;
  console.log(eyes);
  return (
    <div className="register__input">
      <span className="register__icon">
        <img src={img} />
      </span>

      <input
        className="register__input-item"
        type={type}
        id={id}
        placeholder=" "
      />
      <label for={id} className="register__label">
        {placeholder}
      </label>
      <span className="register__icon register__eyes">
        <img src={eyes} />
      </span>
    </div>
  );
};

export default InputForm;
