import React, { Component } from "react";
import Fade from "react-reveal/Fade";
import { connect } from "react-redux";

import { checkoutBooking } from "store/actions/checkout";
import { fetchPage } from "store/actions/page";

import Header from "parts/Header";
import PageDetailTitle from "parts/PageDetailTitle";
import FeaturedImage from "parts/FeaturedImage";
import PageDetailDescription from "parts/PageDetailDescription";
import BookingForm from "parts/BookingForm";
import Categories from "parts/Categories";
import Testimony from "parts/Testimony";
import Footer from "parts/Footer";

import ItemDetails from "json/itemDetails.json";

class DetailsPage extends Component {
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
        <section className="container">
          <div className="row">
            <div className="col-7 ps-5">
              <Fade bottom>
                <PageDetailDescription
                  data={ItemDetails}
                ></PageDetailDescription>
              </Fade>
            </div>
            <div className="col-5">
              <Fade bottom>
                <BookingForm
                  itemDetails={ItemDetails}
                  startBooking={this.props.checkoutBooking}
                ></BookingForm>
              </Fade>
            </div>
          </div>
        </section>
        <Categories data={ItemDetails.categories}></Categories>
        <Testimony data={ItemDetails.testimonial}></Testimony>
        <Footer></Footer>
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  page: state.page,
});

export default connect(mapStateToProps, { checkoutBooking, fetchPage })(
  DetailsPage
);
