import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { rslin } from "responsive-helpers";
import { R, L } from "storefront-ui/Config";
import Container from "storefront-ui/Container";
import SectionTitle from "../SectionTitle";

import { useTheme } from "storefront-ui/Theme";

function TwoBoxes(props) {
  return (
    <div>
      <Container>
        {props.title && <SectionTitle>{props.title}</SectionTitle>}
        <div
          css={css`
            display: grid;
            grid-row-gap: 10px;
            ${L.gutter.css("grid-column-gap")}
            ${R.from("md").css("grid-template-columns: 1fr 1fr;")}
          `}
        >
          {props.banners.map((banner, index) => (
            <div key={index}>{banner}</div>
          ))}
        </div>
      </Container>
    </div>
  );
}

TwoBoxes.propTypes = {
  title: PropTypes.string,
  banners: PropTypes.array.isRequired
};

export default TwoBoxes;
