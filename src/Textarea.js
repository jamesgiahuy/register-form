import React from "react";

const InputForm = (props) => {
  const { img, placeholder, eyes, type, id } = props;

  return (
    <div className="register__input">
      <span className="register__icon">
        <img src={img} />
      </span>

      <textarea
        className="register__input-item"
        type={type}
        id={id}
        placeholder=" "
      />
      <label for={id} className="register__label">
        {placeholder}
      </label>
    </div>
  );
};

export default InputForm;
