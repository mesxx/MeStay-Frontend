import React from "react";

import TestimonyAccent from "assets/images/testimonial-landingpages-frame.jpg";

import Star from "elements/Star";
import Button from "elements/Button";

export default function Testimony({ data }) {
  return (
    <section className="container">
      <div className="row align-items-center">
        <div className="col" style={{ marginRight: 70 }}>
          <div className="testimonial-hero" style={{ margin: "30px 0 0 30px" }}>
            <img
              className="position-absolute"
              src={data.imageUrl}
              alt="Testimonial"
              style={{ zIndex: 1 }}
            />
            <img
              className="position-absolute"
              src={TestimonyAccent}
              alt="Testimonial"
              style={{ margin: "-30px 0 0 -30px" }}
            />
          </div>
        </div>
        <div className="col-7">
          <h4 style={{ marginBottom: "40px" }}>{data.name}</h4>
          <Star value={data.rate} width={35} height={35} spacing={4} />
          <h5 className="h2 fw-light line-height-2 my-3">{data.content}</h5>
          <span className="txt-gray">
            {data.familyName}, {data.familyOccupation}
          </span>
          <div className="">
            <Button
              className="btn px-5"
              style={{ marginTop: 40 }}
              hasShadow
              isPrimary
              type="link"
              href={`/testimonial/${data._id}`}
            >
              Read Their Story
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
