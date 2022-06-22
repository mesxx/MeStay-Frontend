import React from "react";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/images/icons/ic-cities.svg";
import IconTraveller from "assets/images/icons/ic-traveler.svg";
import IconTreasure from "assets/images/icons/ic-treasure.svg";

import Button from "elements/Button";
import formatNumber from "utils/formatNumber";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row gx-5 align-items-center">
        <div className="col pe-5" style={{ width: 422 }}>
          <h1 className="fw-bold lh-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-5 fw-light w-75 txt-gray"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onClick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col">
              <img
                width="36"
                height="36"
                src={IconTraveller}
                alt={`${formatNumber(props.data.travelers)} Traveller`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.travelers)}{" "}
                <span className="txt-gray fw-light">travellers</span>
              </h6>
            </div>
            <div className="col">
              <img
                width="36"
                height="36"
                src={IconTreasure}
                alt={`${formatNumber(props.data.treasures)} Treasures`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.treasures)}{" "}
                <span className="txt-gray fw-light">treasures</span>
              </h6>
            </div>
            <div className="col">
              <img
                width="36"
                height="36"
                src={IconCities}
                alt={`${formatNumber(props.data.cities)} Cities`}
              />
              <h6 className="mt-3">
                {formatNumber(props.data.cities)}{" "}
                <span className="txt-gray fw-light">cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col ps-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={ImageHero}
              alt="Room with couches"
              className="img-fluid position-absolute"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1, width: "inherit" }}
            />
            <img
              src={ImageHero_}
              alt="Room with couches frame"
              className="img-fluid position-absolute"
              style={{ margin: "0 -15px -15px 0", width: "inherit" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
