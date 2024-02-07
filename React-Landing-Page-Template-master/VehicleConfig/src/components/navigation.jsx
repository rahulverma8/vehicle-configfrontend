import React from "react";
import { Link, Outlet } from "react-router-dom"
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Vehicle Configurator
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            
           
            <li>
              <Link to="/Login" className="page-scroll"> {/* Update href to "to" and remove href="#" */}
                Login
              </Link>
            </li>
            <li>
              <Link to="/UserRegistration" className="page-scroll"> {/* Update href to "to" and remove href="#" */}
                Register
              </Link>
            </li>
          </ul>
          <Outlet>
          
          </Outlet>
        </div>
      
      </div>
    </nav>
  );
};
