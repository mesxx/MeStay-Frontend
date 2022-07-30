import React from "react";
import Fade from "react-reveal/Fade";
import Breadcumb from "elements/Breadcrumb";

export default function PageDetailTitle({ data, breadcumb }) {
  return (
    <section className="container spacing-sm">
      <Fade bottom>
        <div className="row align-item-center">
          <div className="col">
            <Breadcumb data={breadcumb} />
          </div>
          <div className="col-auto text-center">
            <div className="h2">{data.name}</div>
            <span className="text-gray-400">
              {data.city}, {data.country}
            </span>
          </div>
          <div className="col"></div>
        </div>
      </Fade>
    </section>
  );
}
