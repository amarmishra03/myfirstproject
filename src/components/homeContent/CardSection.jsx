import React from "react";
import { homeCards } from "../Allinfo";
import { Link } from "react-router-dom";
const CardSection = () => {
  return (
    <>
      {homeCards.map((items1) => {
        const {
          id,
          heading,
          path,
          card1,
          card2,
          card3,
          image1,
          image2,
          image3,
          description,
        } = items1;

        return (
          <>
            <div className="container mt-5" key={id}>
              <div className="row">
                <h2>
                  <Link className="nav-link" to={path}>
                    <span className="border-3 border-bottom border-danger">
                      {heading}
                    </span>
                  </Link>
                </h2>
              </div>
            </div>

            <div className="container mt-2">
              <div className="row">
                <div className="col-md-4">
                  <div className="profile-card-2">
                    <img
                      src={image1}
                      className="img img-responsive"
                      alt="Accessories"
                    />

                    <div className="profile-name">
                      <Link
                        className="nav-link text-capitalize"
                        to="/electronics"
                      >
                        {card1}
                      </Link>
                    </div>

                    <div className="profile-username text-gradient">
                      {description}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="profile-card-2">
                    <img
                      src={image2}
                      className="img img-responsive"
                      alt="Accessories"
                    />
                    <div className="profile-name">{card2}</div>
                    <div className="profile-username text-gradient">
                      {description}
                    </div>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="profile-card-2">
                    <img
                      src={image3}
                      className="img img-responsive"
                      alt="Accessories"
                    />
                    <div className="profile-name">{card3}</div>
                    <div className="profile-username text-gradient">
                      {description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CardSection;
