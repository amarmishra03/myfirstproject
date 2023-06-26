import React from "react";
import { useLocation } from "react-router-dom";
import { elecProd } from "../Allinfo";
const SearchCard = () => {
  const location = useLocation();
  const searchQuery = new URLSearchParams(location.search).get("query");
  const filteredData = searchQuery
    ? elecProd.filter(
        (item) =>
          item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.model.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : [];
  return (
    <>
      <div className="main-card--cointainer">
        {filteredData.map((items) => {
          const {
            id,
            header,
            offer,
            category,
            image,
            model,
            MRP,
            price,
            available,
          } = items;
          return (
            <div className="card-container" key={id}>
              <div className="card">
                <div className="d-flex justify-content-between p-3">
                  <p className="lead mb-0">{header}</p>
                  <div
                    className="bg-info rounded-circle d-flex align-items-center justify-content-center shadow-1-strong"
                    style={{ width: "35px", height: "35px" }}
                  >
                    <p className="text-white mb-0 small">{offer}</p>
                  </div>
                </div>
                <div className="container">
                  <img
                    src={image}
                    className="card-img-top img-fluid"
                    alt="Laptop"
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-between">
                    <p className="small text-decoration-underline text-muted">
                      {category}
                    </p>

                    <p className="small text-danger">
                      <s>{MRP}</s>
                    </p>
                  </div>

                  <div className="d-flex justify-content-between mb-3">
                    <h5 className="mb-0">{model}</h5>
                    <h5 className="text-dark mb-0">{price}</h5>
                  </div>

                  <div className="d-flex justify-content-between mb-2">
                    <p className="text-muted mb-0">
                      Available: <span className="fw-bold">{available}</span>
                    </p>
                    <div className="ms-auto text-warning">
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                      <i className="fa fa-star"></i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SearchCard;
