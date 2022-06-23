import React from "react";

import Button from "elements/Button";
import IconText from "parts/IconText";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col me-5">
            <IconText />
            <p className="brand-tagline">
              We kaboom your beauty holiday instantly and memorable.
            </p>
          </div>
          <div className="col-2 me-5">
            <h6 className="mt-2">For Beginners</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Button type="link" href="/register">
                  New Account
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/properties">
                  Start Booking a Room
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/use-payments">
                  Use Payments
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-2 me-5">
            <h6 className="mt-2">Explore Us</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Button type="link" href="/careers">
                  Our Career
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/privacy">
                  Privacy
                </Button>
              </li>
              <li class="list-group-item">
                <Button type="link" href="/terms">
                  Terms & Condition
                </Button>
              </li>
            </ul>
          </div>
          <div className="col-3">
            <h6 className="mt-2">Connect Us</h6>
            <ul class="list-group list-group-flush">
              <li class="list-group-item">
                <Button
                  isExternal
                  type="link"
                  href="mailto:ichsanfauzan2@gmail.com"
                >
                  ichsanfauzan2@gmail.com
                </Button>
              </li>
              <li class="list-group-item">
                <Button isExternal type="link" href="tel:+62895640083282">
                  +62895640083282
                </Button>
              </li>
              <li class="list-group-item">
                <span>Kebayoran Lama, Jakarta Selatan</span>
              </li>
            </ul>
          </div>
          <div className="row">
            <div className="col text-center copyrights">
              Copyright 2022 • All rights reserved • MeStay
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
