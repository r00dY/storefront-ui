import React from "react";
import PropTypes from "prop-types";
import { rslin } from "responsive-helpers";
import { L, F, C, S, R } from "storefront-ui/Config";
import { Grid, GridItem } from "storefront-ui/Grid";
import Container from "storefront-ui/Container";
import Image from "storefront-ui/Image";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";

function EditorialThreeFourth(props) {
  return (
    <div
      css={css`
        position: relative;
      `}
    >
      <div
        css={css`
          height: 100vh;
          min-height: 500px;
          max-height: 800px;
          padding-left: 25%;
        `}
      >
        <Image
          mode={"cover"}
          image={props.image}
          css={css`
            width: 100%;
            height: 100%;
          `}
        />
      </div>
      <div
        css={css`
          position: absolute;
          top: 0;
          left: 0%;
          width: 50%;
          height: 100%;
          display: flex;
          flex-direction: column;
          ${rslin(S.s2, S.s4).css("padding")}
        `}
      >
        <div
          css={css`
            ${F.editorial1.css}
          `}
        >
          {props.title}
        </div>
        <div
          css={css`
            ${F.editorial2.css}
            display: flex;
            align-items: center;
            flex-grow: 1;
          `}
        >
          {props.text}
        </div>
      </div>
    </div>
  );
}

EditorialThreeFourth.propTypes = {
  image: PropTypes.object.isRequired,
  title: PropTypes.string,
  text: PropTypes.string
};
export default EditorialThreeFourth;
