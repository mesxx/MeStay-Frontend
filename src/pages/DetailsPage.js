import React, { Component } from "react";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";

import ItemDetails from "json/itemDetails.json";

export default class DetailsPage extends Component {
  componentDidMount() {
    window.title = "Details Page";
    window.scrollTo(0, 0);
  }

  render() {
    const breadcrumb = [
      { pageTitle: "Home", pageHref: "" },
      { pageTitle: "House Detail", pageHref: "" },
    ];

    return (
      <>
        <Header {...this.props} />
        <PageDetailTitle
          breadcumb={breadcrumb}
          data={ItemDetails}
        ></PageDetailTitle>
        <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
      </>
    );
  }
}
