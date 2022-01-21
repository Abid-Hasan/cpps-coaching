import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <div className="container px-4 pt-5 mt-5 text-center">
      <h1 className="display-4 fw-bold text-secondary">CPPS Coaching</h1>
      <div className="col-lg-6 mx-auto">
        <p className="lead mb-4">
          Welcome to Competitive Programming and Problem Solving (CPPS)
          Coaching. The best online coaching for CPPS which gives you 100%
          money-back if you don't qualify for ICPC World Finals.
        </p>
        <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
          <NavLink to="/about">
            <button
              type="button"
              className="btn btn-primary btn-lg px-4 me-sm-3"
            >
              About us
            </button>
          </NavLink>
          <NavLink to="/contact">
            <button type="button" className="btn btn-secondary btn-lg px-4">
              Contact us
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Hero;
