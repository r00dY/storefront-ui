import "../global-config";

import React from "react";

import { Grid, GridItem } from "@commerce-ui/core/Grid";
import { useTheme } from "@commerce-ui/core/Theme";
import { L } from "../theme.js";

import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import TextSection from "../components/TextSection";

const Shipping = () => {
  const theme = useTheme();

  return (
    <div>
      <TextSection>
        <h1>Shipping</h1>
        <p>
          We make&nbsp;every effort to process your order within 24 hours,
          however orders placed over weekends or holidays may take a little
          longer. Once your order is processed you will receive an order
          confirmation followed by a shipping confirmation.
        </p>
        <h2>North America</h2>
        <p>
          We charge ​a flat ​$4.95 on all North American orders when FedEx
          SmartPost shipping is selected​. ​
        </p>
        <p>
          Expedited shipping rates are available at additional cost. We offer
          Ground (2-5 days) for $8.95, 3-Day Shipping for $19.95, 2-Day Shipping
          for $29.95.
        </p>
        <p>
          We also offer&nbsp;<strong>﻿Free Shipping&nbsp;</strong>﻿on all North
          American orders over $200.
        </p>
        <h2>International</h2>
        <p>
          International orders are typically shipped via USPS Priority Mail
          International at a flat cost of $14.95. Please note that shipping does
          not include duties and taxes as these vary by destination country.
        </p>
        <p>
          If you would prefer an alternate shipping method, please contact us
          before placing your order and we will do our best to accommodate your
          request.
        </p>
      </TextSection>
    </div>
  );
};

Shipping.tabbar = 0;
Shipping.showFooterOnMobile = true;

export default Shipping;
