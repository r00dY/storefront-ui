import React from "react";
import { BannerInner, Banner } from "./Banner";

const Banner_ = props => (
  <Banner
    image={props.image}
    imageMobile={props.imageMobile}
    href={props.href}
    element={
      <BannerInner label={props.label} title={props.title} hideTextOnMobile />
    }
    elementFlexAlign={"flex-end"}
  />
);

export default Banner_;
