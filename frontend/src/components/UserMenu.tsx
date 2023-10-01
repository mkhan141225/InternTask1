import React from "react";
import { useNavigate, NavLink } from 'react-router-dom';

const UserMenu: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="row m-4 ">
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <NavLink
              to="/"
              className="btn col-md-3 border d-flex justify-content-center align-items-center p-5"
            >
              Program Details
            </NavLink>

            <NavLink
              to="/form"
              className="btn nav-link-active col-md-3 border d-flex justify-content-center align-items-center p-5"
             
            >
              Application Form
            </NavLink>
            <NavLink
              to="/"
              className=" btn  col-md-3 border d-flex justify-content-center align-items-center p-5"
            >
              Workflow
            </NavLink>
            <NavLink
              to="/"
              className="btn col-md-3 border d-flex justify-content-center align-items-center p-5"
            >
              Preview
            </NavLink>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default UserMenu;
