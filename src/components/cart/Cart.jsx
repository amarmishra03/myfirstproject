import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decreaseItem,
  emptyItems,
  increaseItem,
  removeItem,
} from "../store/slice/CartSlice";

const Cart = () => {
  //For Removing individual Items
  const dispatch1 = useDispatch();

  const deleteItem = (id) => {
    dispatch1(removeItem(id));
  };

  //For Removing all Items from the Cart
  const dispatch2 = useDispatch();

  const emptyCart = () => {
    dispatch2(emptyItems());
  };

  //Increasing Items
  const dispatch3 = useDispatch();

  const increment = (id) => {
    dispatch3(increaseItem(id));
  };
  //Decreasing Items
  const dispatch4 = useDispatch();

  const decrement = (id) => {
    dispatch4(decreaseItem(id));
  };

  const { carts } = useSelector((item) => item.user);
  return (
    <>
      <section className="h-100 h-custom">
        <h1 className="text-center">Total Items = {carts.length}</h1>

        <div className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col">
              <div className="table-responsive">
                <table className="table">
                  <thead>
                    <tr>
                      <th scope="col" className="h5">
                        Shopping Bag
                      </th>
                      {/* <th scope="col">Format</th> */}
                      <th scope="col">Quantity</th>
                      <th scope="col">Price</th>
                      <th scope="col"> 
                        <button
                          className="btn btn-danger fs-6 p-1"
                          onClick={() => emptyCart()}
                        >
                          Empty Cart
                        </button>
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {carts.map((item) => {
                      const { id, image, model, price, quantity } = item;
                      return (
                        <tr>
                          <th scope="row" key={id}>
                            <div className="d-flex align-items-center">
                              <img
                                src={image}
                                className="img-fluid rounded-3"
                                style={{ width: "120px" }}
                                alt="Book"
                              />
                              <div className="flex-column ms-4">
                                <p className="mb-2">{model}</p>
                                <p className="mb-0"></p>
                              </div>
                            </div>
                          </th>
                          {/* <td className="align-middle">
                            <p className="mb-0" style={{ fontWeight: 500 }}>
                              Digital
                            </p>
                          </td> */}
                          <td className="align-middle">
                            <div className="d-flex flex-row">
                              <button
                                className="btn btn-link px-2"
                                onclick={() => decrement(id)}
                              >
                                <i className="bi bi-dash-lg"></i>
                              </button>

                              <input
                                id="form1"
                                min="0"
                                name="quantity"
                                value={quantity}
                                type="number"
                                className="form-control form-control-sm"
                                style={{ width: "50px" }}
                              />

                              <button
                                className="btn btn-link px-2"
                                onclick={() => increment(id)}
                              >
                                <i className="bi bi-plus-lg"></i>
                              </button>
                            </div>
                          </td>
                          <td className="align-middle">
                            <p className="mb-0" style={{ fontWeight: 500 }}>
                              {price}
                            </p>
                          </td>
                          <td className="align-middle">
                            <button
                              className="btn btn-link px-2"
                              onClick={() => deleteItem(id)}
                            >
                              <i className="bi bi-trash3-fill text-danger"></i>
                            </button>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>

              <div
                className="card shadow-2-strong mb-5 mb-lg-0"
                style={{ borderRadius: "16px" }}
              >
                <div className="card-body p-4">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0">
                      <form>
                        <div className="d-flex flex-row pb-3">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel1v"
                              value=""
                              aria-label="..."
                              checked
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="bi bi-credit-card-fill text-success pe-2"></i>
                              Credit Card
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row pb-3">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel2v"
                              value=""
                              aria-label="..."
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="bi bi-credit-card-2-front-fill text-success pe-2"></i>
                              Debit Card
                            </p>
                          </div>
                        </div>
                        <div className="d-flex flex-row">
                          <div className="d-flex align-items-center pe-2">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="radioNoLabel"
                              id="radioNoLabel3v"
                              value=""
                              aria-label="..."
                            />
                          </div>
                          <div className="rounded border w-100 p-3">
                            <p className="d-flex align-items-center mb-0">
                              <i className="bi bi-paypal text-success pe-2"></i>
                              PayPal
                            </p>
                          </div>
                        </div>
                      </form>
                    </div>
                    <div className="col-md-6 col-lg-4 col-xl-6">
                      <div className="row">
                        <div className="col-12 col-xl-6">
                          <div className="form-outline mb-4 mb-xl-5">
                            <input
                              type="text"
                              id="typeName"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="John Smith"
                            />
                            <label className="form-label" for="typeName">
                              Name on card
                            </label>
                          </div>

                          <div className="form-outline mb-4 mb-xl-5">
                            <input
                              type="text"
                              id="typeExp"
                              className="form-control form-control-lg"
                              placeholder="MM/YY"
                              size="7"
                              minlength="7"
                              maxlength="7"
                            />
                            <label className="form-label" for="typeExp">
                              Expiration
                            </label>
                          </div>
                        </div>
                        <div className="col-12 col-xl-6">
                          <div className="form-outline mb-4 mb-xl-5">
                            <input
                              type="text"
                              id="typeText"
                              className="form-control form-control-lg"
                              siez="17"
                              placeholder="1111 2222 3333 4444"
                              minlength="19"
                              maxlength="19"
                            />
                            <label className="form-label" for="typeText">
                              Card Number
                            </label>
                          </div>

                          <div className="form-outline mb-4 mb-xl-5">
                            <input
                              type="password"
                              id="typeText"
                              className="form-control form-control-lg"
                              placeholder="&#9679;&#9679;&#9679;"
                              size="1"
                              minlength="3"
                              maxlength="3"
                            />
                            <label className="form-label" for="typeText">
                              Cvv
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-4 col-xl-3">
                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-2">Subtotal</p>
                        <p className="mb-2">$23.49</p>
                      </div>

                      <div
                        className="d-flex justify-content-between"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-0">Shipping</p>
                        <p className="mb-0">$2.99</p>
                      </div>

                      <hr className="my-4" />

                      <div
                        className="d-flex justify-content-between mb-4"
                        style={{ fontWeight: 500 }}
                      >
                        <p className="mb-2">Total (tax included)</p>
                        <p className="mb-2">$26.48</p>
                      </div>

                      <button
                        type="button"
                        className="btn btn-primary btn-block btn-lg"
                      >
                        <div className="d-flex justify-content-between">
                          <span>Checkout</span>
                          <span>$26.48</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cart;
