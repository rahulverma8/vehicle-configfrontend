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
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <Link to="/" className="navbar-brand page-scroll">
            Vehicle Configurator
          </Link>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#configurator" className="page-scroll">
                Configurator
              </a>
            </li>
            <li>
              <a href="#login" className="page-scroll">
                Login
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact
              </a>
            </li>
            
           
            <li>
              <Link to="/Login" > 
                Login
              </Link>
            </li>
            <li>
              <Link to="/UserRegistration" > 
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
