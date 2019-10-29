import React from "react";
import PropTypes from "prop-types";
import { rslin, RangeMap } from "responsive-helpers";
import { L, C, S, R } from "../../theme.js";
import Color from "@commerce-ui/core/Color";
// import {Grid, GridItem} from 'storefront-ui/Grid'
import { Image } from "../../Image";

/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function EditorialHalfImage(props) {
  let _v = "flex-start";

  if (props.elementPosition === "center") {
    _v = "center";
  } else if (props.elementPosition === "bottom") {
    _v = "flex-end";
  }

  return (
    <div
      css={css`
        position: relative;
        display: flex;
        flex-wrap: wrap;
      `}
    >
      <div
        css={css`
          display: grid;
          grid-template-columns: repeat(24, 1fr);
        `}
      >
        <div
          css={css`
            display: flex;
            align-items: ${_v};
            ${R.to("sm").css(`
                            ${rslin(S.s2, S.s4).css("margin-top")}
                            ${L.margin.css("padding-left")}
                            ${L.margin.css("padding-right")}
                        `)}
            ${new RangeMap({
              xs: "span 24",
              sm: "3 / span 20",
              md: `${props.imageFirst ? "14 /" : "2 /"} span 10`,
              lg: `${props.imageFirst ? "14 /" : "2 /"} span 10`,
              xl: `${props.imageFirst ? "15 /" : "4 /"} span 8`
            }).css(val => `grid-column: ${val};`)}
          `}
        >
          {props.element}
        </div>
        <div
          css={css`
            grid-row: 1;
            ${new RangeMap({
              xs: "span 24",
              md: `${props.imageFirst ? "" : "13 / "}span 12`,
              lg: `${props.imageFirst ? "" : "13 / "}span 12`
            }).css(val => `grid-column: ${val};`)}
          `}
        >
          <Image
            mode={"natural"}
            image={props.image}
            backgroundColor={new Color("transparent")}
          />
        </div>
      </div>
    </div>
  );
}
EditorialHalfImage.testOptions = {
  elementPosition: ["top", "center", "bottom"],
  imageFirst: [true, false]
};
EditorialHalfImage.defaultProps = {
  imageFirst: false
};
EditorialHalfImage.propTypes = {
  image: PropTypes.object.isRequired,
  element: PropTypes.element.isRequired,
  elementPosition: PropTypes.oneOf(
    EditorialHalfImage.testOptions["elementPosition"]
  ),
  imageFirst: PropTypes.bool
};
export default EditorialHalfImage;
