import React from "react";

import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import { useTheme } from "storefront-ui/Theme";
import Device from "storefront-ui/Device";
import { L } from "storefront-ui/Config";

import { rslin } from "responsive-helpers";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import TextSection from "../theme/TextSection";

const Shipping = () => {
  const theme = useTheme();

  return (
    <div>
      <TextSection>
        <h1>Privacy</h1>

        <p>
          We respect the privacy of all&nbsp;customers and their personal
          information. Information collected will be used solely by&nbsp;us to
          conduct our business. Your personally identifiable visitor information
          will not be disclosed to third parties, other than for the purpose of
          completing transaction, (i.e. processing payments or shipping
          packages). We will only ask for and use relevant personal information
          as necessary.
        </p>
        <h2>Information&nbsp;we collect</h2>
        <p>
          We collect&nbsp;information from you when you visit this website,
          register, place an order, or subscribe to the newsletter.
        </p>
        <p>
          When ordering or registering, as appropriate, you may be asked to
          enter your: name, email address, mailing address, phone number, date
          of birth, or credit card information.&nbsp;
        </p>
        <h2>Use of Information</h2>
        <p>
          Any of the information&nbsp;we collect&nbsp;may be used in one of the
          following ways:
        </p>
        <h3>1. For&nbsp;customer service interactions</h3>
        <p>
          The email address you provide for order processing will only be used
          to send you information and updates pertaining to your order, unless
          you decide to opt in to our newsletter.
        </p>
        <p>
          If you opt-in,&nbsp;we may use this information to notify you of any
          company updates, new arrivals, or any promotions you might find of
          value. If you don’t wish to receive these newsletters or updates, you
          can unsubscribe at any time.
        </p>
        <h3>2. To&nbsp;process transactions</h3>
        <p>
          Your personally identifiable information, whether public or private,
          will not be sold, exchanged, transferred, or given to any other
          company for any reason whatsoever, without your consent, other than
          for the express purpose of delivering the purchased product or service
          requested.
        </p>
        <h3>3.&nbsp;For internal tracking purposes</h3>
        <p>
          We use Google Analytics to record visits to our website, including
          what website you came from, how long you stay for, what kind of
          computer you’re using, and other simple pieces of information about
          your visit.
        </p>
        <p>
          To opt out of Google Analytics reporting on any site, install the
          browser add-on available from Google:&nbsp;
          <a
            href="https://tools.google.com/dlpage/gaoptout/"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://tools.google.com/dlpage/gaoptout/
          </a>
          .
        </p>
        <h2>Your Information</h2>
        <p>
          We implement&nbsp;a variety of security measures to maintain the
          safety of your personal information when you place an order or enter,
          submit, or access your personal information.
        </p>
        <p>
          All credit cards are processed securely through Shopify, a leading
          provider of payment gateway services online.
        </p>
        <p>
          We offer the use of a secure server. All supplied sensitive/credit
          information is transmitted via Secure Socket Layer (SSL) technology
          and then encrypted into our payment gateway provider’s database only
          to be accessible by those authorized with special access rights to
          such systems. All parties are required to keep the information
          confidential.
        </p>
        <p>
          After a transaction, your private information (credit cards, social
          security numbers, financials, etc.) will not be stored on our servers.
        </p>
        <h2>Cookies</h2>
        <p>
          Most web browsers are set to accept cookies by default. If you prefer,
          you can usually choose to set your browser to remove or reject browser
          cookies. Please note that if you choose to remove or reject cookies,
          this could affect the availability and functionality of our Services.
        </p>
        <h2>Sharing of Information</h2>
        <p>
          We don't&nbsp;sell, trade, or otherwise transfer to outside parties
          your personally identifiable information. This includes trusted third
          parties who assist&nbsp;us in operating our website, conducting our
          business, or servicing you, so long as those parties agree to keep
          this information confidential.&nbsp;We may also release your
          information when we believe release is appropriate to comply with the
          law, enforce this site’s policies, or protect&nbsp;our or others
          rights, property, or safety.&nbsp;
        </p>
      </TextSection>
    </div>
  );
};

Shipping.tabbar = 0;
Shipping.showFooterOnMobile = true;

export default Shipping;
