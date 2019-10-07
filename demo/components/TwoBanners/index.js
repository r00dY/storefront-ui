import React from "react";
import PropTypes from "prop-types";
/** @jsx jsx */
import { css, jsx } from "@emotion/core";
import { rslin } from "responsive-helpers";
import { R, L } from "@commerce-ui/core/Config";
import Container from "@commerce-ui/core/Container";
import SectionTitle from "../SectionTitle";
import { useTheme } from "@commerce-ui/core/Theme";

function TwoBoxes(props) {
  const theme = useTheme();

  return (
    <div>
      <Container>
        {props.title && <SectionTitle>{props.title}</SectionTitle>}
        <div
          css={css`
            display: grid;
            ${theme.layout.gutter.css("grid-row-gap")}
            ${theme.layout.gutter.css("grid-column-gap")}
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
