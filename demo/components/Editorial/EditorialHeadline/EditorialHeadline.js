import React from "react";
import PropTypes from "prop-types";
import { rslin } from "responsive-helpers";
import { F, C, S, R } from "../../theme.js";
import Font from "@commerce-ui/core/Font";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function EditorialHeadline(props) {
  return (
    <div
      color={props.textColor}
      textalign={props.textalign}
      css={css`
        text-align: ${props.textalign};
        color: ${props.color};
      `}
    >
      <div
        css={css`
          ${props.titleFont.css}
        `}
      >
        {props.title}
      </div>
      <div
        css={css`
          ${props.paragraphFont.css}
          ${rslin(S.s2, S.s3).css("margin-top")}
        `}
      >
        {props.paragraph}
      </div>
    </div>
  );
}
EditorialHeadline.testOptions = {
  textalign: ["left", "center", "right"]
};
EditorialHeadline.defaultProps = {
  textalign: "left",
  textColor: "black"
};
EditorialHeadline.propTypes = {
  title: PropTypes.string,
  paragraph: PropTypes.string,
  titleFont: PropTypes.instanceOf(Font).isRequired,
  paragraphFont: PropTypes.instanceOf(Font).isRequired,
  textalign: PropTypes.oneOf(EditorialHeadline.testOptions.textalign),
  textColor: PropTypes.string
};
export default EditorialHeadline;
