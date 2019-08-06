import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rslin, rs, rm } from "responsive-helpers";
import { F, L, Color, S, R } from "storefront-ui/Config";
import Image from "storefront-ui/Image";
import Link from "next/link";
import { useTheme } from "storefront-ui/Theme";
import { Button } from "../Button";

import Router from "next/router";
import routerPush from "../../helpers/routerPush";

const BannerButton = props => {
  const theme = useTheme();
  return (
    <div>
      <Button href={props.href}>{props.label}</Button>
    </div>
  );
};

const BannerInner = props => {
  const theme = useTheme();
  return (
    <div>
      <div
        css={css`
          margin-bottom: ${theme.spacings.s80}px;
        `}
      >
        {props.label && (
          <div
            css={css`
              ${theme.fonts.body1.css}
            `}
          >
            {props.label}
          </div>
        )}
        {props.title && (
          <div
            css={css`
              ${theme.fonts.h2.css}
            `}
          >
            {props.title}
          </div>
        )}
        {props.text && (
          <div
            css={css`
              ${theme.fonts.body1.css}
              ${props.hideTextOnMobile ? R.to("sm").css("display: none;") : ""}
            `}
          >
            {props.text}
          </div>
        )}
      </div>
      <BannerButton label={"Shop"} />
    </div>
  );
};
BannerInner.defaultProps = {
  hideTextOnMobile: false
};
BannerInner.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  hideTextOnMobile: PropTypes.bool,
  buttons: PropTypes.array
};

const Banner = props => {
  const theme = useTheme();

  function setParams(param) {
    if (typeof param === "string") {
      return { xs: param };
    } else {
      return param;
    }
  }

  const imageElem = (
    <Image
      image={props.image}
      backgroundColor={props.imageBackground}
      video={props.video}
    />
  );
  const imageWithMobileElem = (
    <div>
      <Image
        css={css`
          ${R.to("xs_plus").css("display: none;")}
        `}
        image={props.image}
        video={props.video}
        backgroundColor={props.imageBackground}
      />
      <Image
        css={css`
          ${R.from("sm").css("display: none;")}
        `}
        image={props.imageMobile}
        video={props.videoMobile}
        backgroundColor={props.imageBackground}
      />
    </div>
  );

  const sectionElem = (
    <div
      css={css`
        position: relative;
        cursor: pointer;
      `}
      onClick={() => routerPush(props.href)}
    >
      <div>
        {props.imageMobile || props.videoMobile
          ? imageWithMobileElem
          : imageElem}

        <div
          className={"ImageOverlay"}
          css={css`
            background: black;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            opacity: 0;
            transition: 100ms;
          `}
        />
      </div>
      {props.element && (
        <div
          css={css`
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    ${rm(setParams(props.elementFlexAlign)).css(
                      val => `align-items: ${val};`
                    )}
                    ${rm(setParams(props.elementFlexJustify)).css(
                      val => `justify-content: ${val};`
                    )}
                    ${rslin(theme.spacings.s80, theme.spacings.s120).css(
                      "padding"
                    )}
                `}
        >
          <div
            css={css`
              ${props.elementFullWidth
                ? "width: 100%;"
                : rs({
                    xs: "100%",
                    sm: "60%",
                    md: "50%",
                    lg: "40%"
                  }).css("width")}
            `}
          >
            {props.element}
          </div>
        </div>
      )}
    </div>
  );

  return sectionElem;
};
Banner.defaultProps = {
  imageBackground: "transparent",
  elementFlexAlign: "flex-start",
  elementFlexJustify: "flex-start",
  elementFullWidth: false
};
Banner.propTypes = {
  image: PropTypes.object,
  imageMobile: PropTypes.object,
  video: PropTypes.object,
  videoMobile: PropTypes.object,
  element: PropTypes.element,
  elementFlexAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  elementFlexJustify: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  elementFullWidth: PropTypes.bool,
  imageBackground: PropTypes.string,
  href: PropTypes.string
};
export { Banner, BannerInner, BannerButton };
