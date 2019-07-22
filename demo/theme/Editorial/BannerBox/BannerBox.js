import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

import { rslin, rs, rm } from "responsive-helpers";
import { F, L, Color, S, R } from "storefront-ui/Config";
import Container from "storefront-ui/Container";
import Image from "storefront-ui/Image";
import SectionTitle from "../../SectionTitle/SectionTitle";
import Link from "next/link";
import UI_GLOBALS from "../../ui-globals.config";

function BannerBox(props) {
  function setParams(param) {
    if (typeof param === "string") {
      return { xs: param };
    } else {
      return param;
    }
  }
  const image = (
    <Image
      image={props.image}
      backgroundColor={props.imageBackground}
      video={props.video}
    />
  );
  const imageWithMobile = (
    <div>
      <Image
        css={css`
          height: 700px;
          ${R.to("xs_plus").css("display: none;")}
        `}
        mode={"cover"}
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

  const section = (
    <div
      css={css`
        position: relative;
      `}
    >
      <Link href={"/category"}>
        <a>
          <div>
            {props.imageMobile || props.videoMobile ? imageWithMobile : image}

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
                            ${rslin(S.s3, S.s4).css("padding")}
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
        </a>
      </Link>
    </div>
  );

  return (
    <>
      {props.inContainer ? (
        <Container>
          {props.title && <SectionTitle>{props.title}</SectionTitle>}
          {section}
        </Container>
      ) : (
        section
      )}
    </>
  );
}
BannerBox.defaultProps = {
  imageBackground: "transparent",
  inContainer: false,
  elementFlexAlign: "flex-start",
  elementFlexJustify: "flex-start",
  elementFullWidth: false
};
BannerBox.propTypes = {
  image: PropTypes.object,
  imageMobile: PropTypes.object,
  video: PropTypes.object,
  videoMobile: PropTypes.object,
  title: PropTypes.string,
  element: PropTypes.element,
  elementFlexAlign: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  elementFlexJustify: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  elementFullWidth: PropTypes.bool,
  imageBackground: PropTypes.string,
  inContainer: PropTypes.bool
};
export default BannerBox;
