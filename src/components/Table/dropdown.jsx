import React from "react";
import "./dropdown.scss";
const Dropdonw = () => {
  return (
    <div className="dropdown">
      <button
        className="btn vertical"
        type="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src="images/vertical.svg" alt="" />
      </button>
      <ul className="dropdown-menu">
        <li style={{ display: " flex" }} className="dropdown-wrap">
          <img src="images/pencil.png" alt="#" />
          <a className="dropdown-item" href="#">
            Edit
          </a>
        </li>
        <li style={{ display: " flex" }} className="dropdown-wrap">
          <img src="images/close.svg" alt="#" />
          <a className="dropdown-item" href="#">
            Cancel
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdonw;
