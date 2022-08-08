import React, { Component } from "react";

import { InputNumber, InputDate } from "elements/Form";
import Breadcrumb from "elements/Breadcrumb";
import Button from "elements/Button";

export default class Example extends Component {
  // state = {
  //   value: {
  //     startDate: new Date(),
  //     endDate: new Date(),
  //     key: "selection",
  //   },
  // };

  // handleChange = (e) => {
  //   this.setState({ [e.target.name]: e.target.value });
  // };

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Detail", pageHref: "" },
    ];

    return (
      <div className="container">
        <div
          className="row align-items-center justify-content-center"
          style={{ height: "100vh" }}
        >
          <div className="col">
            <Breadcrumb data={breadcrumb} />

            <div class="d-grid gap-2 d-md-block">
              <Button
                className="btn"
                hasShadow
                isPrimary
                onClick={this.startBooking}
              >
                Continue to Book
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
