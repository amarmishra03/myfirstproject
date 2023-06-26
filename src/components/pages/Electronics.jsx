import React from "react";
import { elecProd } from "../Allinfo";
// import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addItem } from "../store/slice/CartSlice";

const Electronics = ({ products, menuCategories, filterItem, setProducts }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="container-fluid mt-5">
        <h1 className="text-center">
          <span
            className="border-3 border-bottom border-danger"
            onClick={() => setProducts(elecProd)}
            style={{ cursor: "pointer" }}
          >
            Electronics
          </span>
        </h1>
        <div className="prod-nav container mt-4">
          <ul className="nav justify-content-center">
            {menuCategories.map((items) => {
              return (
                <button
                  className="btn mx-4 text-capitalize"
                  onClick={() => filterItem(items)}
                >
                  {items}
                </button>
              );
            })}
          </ul>
        </div>
      </div>

      <div className="main-card--cointainer">
        {products.map((prods) => {
          const {
            id,
            header,
            offer,
            image,
            category,
            model,
            MRP,
            price,
            available,
          } = prods;
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
                <div className="img-container">
                  <img
                    src={image}
                    className="card-img-top img-fluid"
                    alt={category}
                  />
                </div>
                <div className="card-body">
                  <div className="d-flex justify-content-end">
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
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-fill"></i>
                      <i class="bi bi-star-half"></i>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center align-items-center">
                    <button
                      className="btn btn-success my-2"
                      onClick={() => dispatch(addItem(prods))}
                    >
                      Add To Cart
                    </button>
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

export default Electronics;
