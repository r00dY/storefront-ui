import MobileDetect from "mobile-detect";

import React from "react";
import PropTypes from "prop-types";

import MediaQuery from "../MediaQuery";
import { Range } from "responsive-helpers";

let md;

const Device = ({ mobile, desktop, children }) => {
  if (mobile === false && desktop === false) {
    throw new Error(
      "[Device] Either mobile or desktop flag must be set to true"
    );
  } else if (mobile === true && desktop === true) {
    throw new Error("[Device] You can't set both desktop and mobile");
  }

  let canShow =
    (mobile && Device.isMobile()) || (desktop && Device.isDesktop());

  let range;

  if (mobile) {
    range = new Range("mobile", 0, 767);
  } else if (desktop) {
    range = new Range("desktop", 768, undefined);
  }

  return (
    <MediaQuery range={range} prerender={canShow}>
      {children}
    </MediaQuery>
  );
};

Device.setUserAgent = userAgent => {
  md = new MobileDetect(userAgent);
};

Device.isMobile = () => {
  if (typeof window !== "undefined") {
    return window.innerWidth < 768;
  }

  if (!md) {
    throw new Error(
      "Device: either window must be defined (browser) or user agent must be set in order to use this component."
    );
  }

  return md.phone() !== null;
};

Device.isDesktop = () => {
  return !Device.isMobile();
};

Device.defaultProps = {
  mobile: false,
  desktop: false
};

Device.propTypes = {
  children: PropTypes.any,
  mobile: PropTypes.bool,
  desktop: PropTypes.bool
};

export default Device;
