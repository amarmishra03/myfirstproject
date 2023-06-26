import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { dropD } from "../Allinfo";
const Navbar = ({ searchData }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSubmit = () => {
    searchData(searchQuery);
  };

  const navigate = useNavigate();

  const handleNav = (e) => {
    e.preventDefault();
    navigate(`/searchcard?query=${searchQuery}`);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary bg-opacity-10">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Shopy
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <form
              id="search"
              className="d-flex mx-auto"
              role="search"
              onSubmit={handleNav}
            >
              <input
                className="form-control me-2 rounded-5"
                type="search"
                placeholder="Search"
                aria-label="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success rounded-5"
                type="submit"
                onClick={handleSubmit}
              >
                Search
              </button>
            </form>
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/home">
                  Home
                </Link>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Category
                </a>
                <ul className="dropdown-menu">
                  {dropD.map((drops) => {
                    const { id, name, path } = drops;
                    return (
                      <li>
                        <Link className="dropdown-item" to={path} key={id}>
                          {name}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  Cart
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
